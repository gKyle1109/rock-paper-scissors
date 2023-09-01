const rps = ["rock", "paper", "scissors"];
const computerChoice = () => rps[Math.floor(Math.random() * rps.length)]; 
let playerScore = 0;
let computerrScore = 0;
let message = "";

// add dom manipulation to allow player to choice option 

let playerChoice = "";
const playRock = document.getElementById("Rock");
const playPaper = document.getElementById("Paper");
const playScissors = document.getElementById("Scissors");
playRock.addEventListener("click", () => {
    playerChoice = rps[0];
    playRound();
});
playPaper.addEventListener("click", () => {
    playerChoice = rps[1];
    playRound();
});
playScissors.addEventListener("click", () => {
    playerChoice = rps[2];
    playRound();
});
function playRound () {
    const computer = computerChoice();
    if (computer == playerChoice) {
        message = "Tie Game Play Again"
    } else if (computer == "rock" && playerChoice == "scissors") {
        message = "You Lose";
        computerrScore += 1;
    } else if (computer == "rock" && playerChoice == "paper") {
        message = "You Win";
        playerScore += 1;
    } else if (computer == "paper" && playerChoice == "scissors") {
        message = "You Win"
        playerScore += 1;
    } else if (computer == "paper" && playerChoice == "rock") {
        message = "You Lose";
        computerrScore += 1;
    } else if (computer == "scissors" && playerChoice == "paper") {
        message = "You Lose";
        computerrScore += 1;
    } else if (computer == "scissors" && playerChoice == "rock") {
        message = "You Win";
        playerScore += 1;
    } 
    results()
}

//display inputs and outputs of game

const playerPoints = document.getElementById("player-score");
const oppnetPoints = document.getElementById("computer-score");
const text = document.getElementById("message");
function results() {
    playerPoints.textContent = playerScore;
    oppnetPoints.textContent =  computerrScore;
    text.textContent = message;
    if (playerScore == 5) {
        playerPoints.textContent = 0;
        oppnetPoints.textContent = 0;
        alert("Congrats You Win The Score Was " + playerScore + " To " + computerrScore);
        playerScore = 0;
        computerrScore = 0;
    } else if (computerrScore == 5) {
        playerPoints.textContent = 0;
        oppnetPoints.textContent = 0;
        alert("Sorry You Lose The Score Was " + playerScore + " To " + computerrScore);
        playerScore = 0;
        computerrScore = 0;
    }
}
