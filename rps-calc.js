const rps = ["rock", "paper", "scissors"];
const computerChoice = () => rps[Math.floor(Math.random() * rps.length)]; 
let playerScore = 0;
let computerrScore = 0;

// add dom manipulation to allow player to choice option 
const playerChoice = rps[1];

function playRound () {
    const computer = computerChoice();
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
for (let game = 0; playerScore < 5 && computerrScore < 5; game++) {
    playRound();
    if (playerScore == 5 || computerrScore == 5) {
        console.log(playerScore)
        console.log(computerrScore)
    }
}
