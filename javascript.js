// human choice
function getHumanChoice (){   

let choice = prompt ("Rock, Paper, or Scissors?", "");
choice = choice.toLowerCase();

    if (choice == "rock") {
        alert ("You chose rock!");}
    else if (choice == "paper"){
        alert ("You chose paper!");}
    else if (choice == "scissors"){
        alert ("You chose scissors!");}
    return choice;  

}
//console.log(getHumanChoice());

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
//getComputerChoice();

//declare player score variables
let humanScore = 0;
let computerScore = 0;


//play round
function playRound (humanChoice, computerChoice)
{

    if (humanChoice == computerChoice) {
        alert ("It's a tie");}
    else if (humanChoice == "rock")
    {
        if (computerChoice == "scissors")
            {
                alert ("You win!"); 
                humanScore++;
            }
        else
        {
            alert ("You lose");
            computerScore++;
        }
    }

    else if (humanChoice == "paper")
        {
            if (computerChoice == "rock")
                {
                    alert ("You win!");
                    humanScore++;
                }
            else
            {
                alert ("You lose");
                computerScore++;
            }

        }

    else if (humanChoice== "scissors")
        {
            if (computerChoice == "paper")
                {
                    alert ("You win!");
                    humanScore++;
                }
                else
                {
                    alert ("You lose");
                    computerScore++;
                }
        } 
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(humanScore);
console.log(computerScore);
playRound(humanSelection, computerSelection);
console.log(humanScore);
console.log(computerScore);
playRound(humanSelection, computerSelection);
console.log(humanScore);
console.log(computerScore);
playRound(humanSelection, computerSelection);
console.log(humanScore);
console.log(computerScore);
playRound(humanSelection, computerSelection);
console.log(humanScore);
console.log(computerScore);