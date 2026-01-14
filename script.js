// Initialisation
let examples = [];
let countries = [];
let currentIndex = 0;
let score = 0;

// Set variables
const video = document.getElementById("video");

// Load JSON data
fetch("data.json")
  .then(response => response.json())
  .then(data => {
    players = data.players;
})


// Load current example
function loadPlayer() {
    let current = players[0];
    let video = document.getElementById("video");
    //video.src = "https://youtu.be/bAqPyv1Rg2U?t=344";
}

// Handle submission

// Go to next example


// Reset game