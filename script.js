// Initialisation
const players = data.players;
let index = 0;
let current = players[index];
let score = 0;

// Get elements
const submit = document.getElementById("submit");
const list = document.getElementById("list");
const video = document.getElementById("video");
const scoreText = document.getElementById("score");
const next = document.getElementById("next");
const modal = document.getElementById("info");
const closeModal = document.getElementById("closeModal");

function loadVideo() {
    video.src = "https://youtube.com/embed/" + current.video;
    document.querySelector(".cover").style.display = "block";
    next.disabled = true;
}

function loadQuestion() {
    if (index >= players.length) {
        alert("Game over");
    } else {
        index++;
        current = players[index];
        loadVideo();
        submit.disabled = false;
    }
}

function updateModal(val) {
    const title = document.getElementById("modalTitle");
    const text = document.getElementById("modalText");
    title.textContent = val ? "Correct!" : "Wrong!";
    title.style.color = val ? "green" : "red";
    text.innerHTML = `
        Name: ${current.name}<br>
        Born: ${current.city}, ${current.country}<br>
        Team: ${current.team}<br>
        Drafted: ${current.date}
    `;
}

submit.addEventListener("click", () => {
    if (list.value === current.country) {
        updateModal(true);
        score++;
    } else {
        updateModal(false);
    }
    modal.showModal();
    document.querySelector(".cover").style.display = "none";
    scoreText.textContent = `Score: ${score}/${(index+1)}`;
    next.disabled = false;
    submit.disabled = true;
});

next.addEventListener("click", loadQuestion);

closeModal.addEventListener("click", () => {
    modal.close();
});

loadVideo();
