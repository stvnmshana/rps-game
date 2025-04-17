// Player Scores
const player1Score = document.getElementById("player1-score");
const player2Score = document.getElementById("player2-score");

player1Score.textContent = 0;
player2Score.textContent = 0;

// StatusTab
const statusTab = document.getElementById("status");

// PlayerNames
const player1Name = document.getElementById("player1-name");
const player2Name = document.getElementById("player2-name");

// Player Choices
const player1 = document.getElementById("player1-choice");
const player2 = document.getElementById("player2-choice");

// Reset Button
const resetBtn = document.getElementById("reset-btn");

// Game Logic Arrays
const gameChoices = ["rock", "paper", "scissor"];
const gamePlayLogic = [
  [0, "paper", "rock"],
  ["paper", 0, "scissor"],
  ["rock", "scissor", 0],
];

// Buttons
const gameBtns = document.querySelectorAll(".game-btn");

gameBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    const player1Choice = button.dataset.gameChoice;
    updateChoiceDisplay(player1Choice, "user");

    console.log("UserChoice: " + player1Choice);

    const player2Choice = computerPlay();
    updateChoiceDisplay(player2Choice, "computer");

    console.log("ComputerChoice: " + player2Choice);

    displayWinner(player1Choice, player2Choice);
  });
});

// Computer Plays
function computerPlay() {
  const index = Math.floor((Math.random() * 10) % 3);
  return gameChoices[index];
}

// Display Player Choice
function updateChoiceDisplay(choice, player) {
  const rockImage = `<div class=" h-25 w-25">
                        <img src="./images/rock.jpeg" alt="" srcset="">
                      </div>`;

  const paperImage = `<div class=" h-25 w-25">
                        <img src="./images/paper.jpeg" alt="" srcset="">
                      </div>`;

  const scissorImage = `<div class=" h-25 w-25">
                          <img src="./images/scissor.jpeg" alt="" srcset="">
                        </div>`;
  if (choice === "rock") {
    if (player === "user") {
      player1.innerHTML = rockImage;
    } else {
      player2.innerHTML = rockImage;
    }
  } else if (choice === "paper") {
    if (player === "user") {
      player1.innerHTML = paperImage;
    } else {
      player2.innerHTML = paperImage;
    }
  } else if (choice === "scissor") {
    if (player === "user") {
      player1.innerHTML = scissorImage;
    } else {
      player2.innerHTML = scissorImage;
    }
  }
}

// Scores
let player1ScoreCount = 0;
let player2ScoreCount = 0;

// Display Winner
function displayWinner(playerA, playerB) {
  if (playerA === playerB) {
    statusTab.textContent = `draw`.toUpperCase();
    return;
  }

  const playerA1 = gameChoices.indexOf(playerA);
  const playerB1 = gameChoices.indexOf(playerB);

  let gameResult = gamePlayLogic[playerA1][playerB1];

  console.log("GameResult: " + gameResult);

  if (gameResult === playerA) {
    statusTab.innerHTML = `${player1Name.textContent.toUpperCase()} Won!`;
    player1ScoreCount += 1;

    player1Score.textContent = player1ScoreCount;
  } else if (gameResult === playerB) {
    statusTab.textContent = `${player2Name.textContent.toUpperCase()} Won!`;
    player2ScoreCount += 1;
    player2Score.textContent = player2ScoreCount;
  }
}

// Display Score
function displayScore(score) {
  player1Score.textContent = score;
  player2Score.textContent = score;
}

// Reset Game
resetBtn.addEventListener("click", resetGame);
function resetGame() {
  statusTab.textContent = "#";

  player2Score.textContent = 0;
  player1Score.textContent = 0;

  player1ScoreCount = 0;
  player2ScoreCount = 0;

  player1.innerHTML = "";
  player2.innerHTML = "";
}