let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results");
const finalResult = document.querySelector("#finalResult");
const buttonContainer = document.querySelector("#buttonContainer");
const body = document.querySelector("body");

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

function playRound (humanChoice, computerChoice)   
{

    if (humanChoice == computerChoice) {
        //alert ("It's a tie");
        return "tie"}

    else if (humanChoice == "rock")
    {
        if (computerChoice == "scissors")
            {
                //alert ("You win!"); 
                return "humanWon";
            }
        else
        {
            //alert ("You lose");
            return "humanLost";
        }
    }

    else if (humanChoice == "paper")
        {
            if (computerChoice == "rock")
                {
                    //alert ("You win!");
                    return "humanWon";
                }
            else
            {
                //alert ("You lose");
                return "humanLost";
            }

        }

    else if (humanChoice== "scissors")
        {
            if (computerChoice == "paper")
                {
                    //alert ("You win!");
                    return "humanWon";
                }
                else
                {
                    //alert ("You lose");
                    return "humanLost";
                }
        }
}

function returnResults (whoWon) 
{    
        if(whoWon == "humanWon")
            {
                humanScore++;
            }
        else if(whoWon == "humanLost")
            {
                computerScore++;
            }

            results.textContent = "Your score: " + humanScore + "  -   Opponent's score: " + computerScore;
  
        if(humanScore >= 5)
            {
                 finalResult.textContent = "Game Over: You Win!";
                 body.removeChild(buttonContainer);
                
            }
        if(computerScore >= 5)
            {
                finalResult.textContent = "Game Over: You Lose!";
                body.removeChild(buttonContainer);

            }        
}




buttons.forEach(button => 
{
    button.addEventListener("click", event => 
    {
        playerChoice = button.id;
        computerChoice = getComputerChoice();
        result = playRound (playerChoice, computerChoice);
        returnResults(result);
    })
})







 



