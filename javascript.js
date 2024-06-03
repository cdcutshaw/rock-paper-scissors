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

// computer choice
function getComputerChoice () {
let randomNumber = Math.floor((Math.random() * 3) + 1);
    if (randomNumber === 1) {
        alert ("Opponent chose rock!");
        return "rock";}
    if (randomNumber === 2) {
        alert ("Opponent chose paper!");
         return "paper";}
    if (randomNumber === 3) {
        alert ("Opponent chose scissors!");
         return "scissors"}             
}
console.log(getComputerChoice())
