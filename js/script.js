// JavaScript code to handle the game functionality
document.getElementById("startButton").addEventListener("click", startGame);

let playerList = []; // Array to store player objects { initials: "", score: 0 }

function startGame() {
  const initials = document.getElementById("initials").value;
  if (initials !== "") {
    // Create a new player object and add it to the playerList array
    const player = { initials: initials, score: 0 };
    playerList.push(player);

    // Remove player input section
    document.getElementById("playerInput").style.display = "none";

    // Display countdown
    let countdown = 3;
    const countdownDisplay = document.getElementById("countdown");
    countdownDisplay.innerText = countdown;

    const countdownInterval = setInterval(() => {
      countdown--;
      countdownDisplay.innerText = countdown;
      if (countdown === 0) {
        clearInterval(countdownInterval);
        countdownDisplay.innerText = "Begin!";
        // Start displaying quiz questions and handle the quiz logic
        displayQuestions();
      }
    }, 1000);
  }
}

function displayQuestions() {
  // Implement the logic to display quiz questions and handle user answers
}

function updateLeaderboard() {
  // Implement the logic to update the leaderboard with player scores
}
