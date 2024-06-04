// human choice
function getHumanChoice ()
{   
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


// computer choice
function getComputerChoice () 
{
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

// Function to play 1 round
function playRound (humanChoice, computerChoice)   
{

    if (humanChoice == computerChoice) {
        alert ("It's a tie");
        return "tie"}

    else if (humanChoice == "rock")
    {
        if (computerChoice == "scissors")
            {
                alert ("You win!"); 
                return "humanWon";
            }
        else
        {
            alert ("You lose");
            return "humanLost";
        }
    }

    else if (humanChoice == "paper")
        {
            if (computerChoice == "rock")
                {
                    alert ("You win!");
                    return "humanWon";
                }
            else
            {
                alert ("You lose");
                return "humanLost";
            }

        }

    else if (humanChoice== "scissors")
        {
            if (computerChoice == "paper")
                {
                    alert ("You win!");
                    return "humanWon";
                }
                else
                {
                    alert ("You lose");
                    return "humanLost";
                }
        }
}


//function to play 5 rounds
function playGame() {

    //declare player score variables
    let humanScore = 0;
    let computerScore = 0;

    //function to play 1 round
    for (let i = 1; i < 6; i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        let whoWon = playRound(humanSelection, computerSelection);        
        if(whoWon == "humanWon")
            {
                humanScore++;
            }
        else if(whoWon == "humanLost")
            {
                computerScore++;
            }

            alert ("Your score: " + humanScore + "     Opponent's score: " + computerScore);
    }

    if(humanScore == computerScore)
        {
            alert ("It's a tie!");
        }
    if(humanScore > computerScore)
        {
            alert ("You won! Congrts!");
        }
    if(humanScore < computerScore)
        {
            alert("You lost, womp womp...");
        }

}

playGame();
 



