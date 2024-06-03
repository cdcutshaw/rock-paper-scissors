// computer choice
function getComputerChoice () {
let randomNumber = Math.floor((Math.random() * 3) + 1);
    if (randomNumber === 1) {
        return "rock";}
    if (randomNumber === 2) {
         return "paper";}
    if (randomNumber === 3) {
         return "scissors"}             
}
console.log(getComputerChoice())

// human choice
function getHumanChoice (){   
let choice = prompt ("Rock, Paper, or Scissors?", "");
    if (choice == "rock") {
        alert ("You chose rock!");
        return ("rock");}
    if (choice == "paper"){
        alert ("You chose paper!");
        return ("paper");}
    if (choice == "scissors"){
        alert ("You chose scissors!");
        return ("scissors");}
}
console.log(getHumanChoice())
