//function that returns randomly rock, paper or scissors

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}


//function that plays a single round of Rock Paper Scissors.

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You lose paper beats rock";}
    else if(playerSelection === computerSelection) {
        return "Tie";}
        else return "You win rock beats scissors"
    }


const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));