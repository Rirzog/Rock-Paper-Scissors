//function that would randomly return rock, paper or scissors
function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());