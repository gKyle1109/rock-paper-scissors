const rps = ["rock", "paper", "scissors"];
const computerChoice = () => rps[Math.floor(Math.random() * rps.length)]; 
let playerScore = 0;
let computerrScore = 0;

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
    console.log(playerScore)
    if (computer == playerChoice) {
        return "tie game";
    } else if (computer == "rock" && playerChoice == "scissors") {
        computerrScore += 1;
        return "you lose";
    } else if (computer == "rock" && playerChoice == "paper") {
        playerScore += 1;
        return "you win";
    } else if (computer == "paper" && playerChoice == "scissors") {
        playerScore += 1;
        return "you win";
    } else if (computer == "paper" && playerChoice == "rock") {
        computerrScore += 1;
        return "you lose";
    } else if (computer == "scissors" && playerChoice == "paper") {
        computerrScore += 1;
        return "you lose";
    } else if (computer == "scissors" && playerChoice == "rock") {
        playerScore += 1;
        return "you win";
    } 
}


