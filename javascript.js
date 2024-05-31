// function that returns random computer choice, "rock", "paper", or "scissors"
function getComputerChoice () {
let randomNumber = Math.floor((Math.random() * 3) + 1);
    if (randomNumber === 1) {
        return "rock";}
    if (randomNumber === 2) {
         return "paper";}
    if (randomNumber === 3) {
         return "scissors"}             
}
//console.log(getComputerChoice())

