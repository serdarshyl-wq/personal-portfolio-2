
const choices = ["rock","paper","scissors"];

const playerDisplay= document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay=document.getElementById("computerScoreDisplay");
let playerScore=0;
let computerScore=0;


function playGame(PlayerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result  = "";
    if (PlayerChoice === computerChoice) {   
       result= resultDisplay.textContent = "IT'S A TIE!";
    }
    else{
        switch (PlayerChoice) {
            case "rock" :
                result  = (computerChoice==="paper" ? "YOU LOST!" : "YOU WIN!");
                break;
            case "paper" : 
               result  = (computerChoice === "scissors" ? "YOU LOST!" : "YOU WIN!");
                break;
            case "scissors" : 
               result  = (computerChoice === "rock" ? "YOU LOST!" : "YOU WIN!");
                break;
            
        }
    }
        playerDisplay.textContent = 'PLAYER : '+ PlayerChoice;
        computerDisplay.textContent = 'COMPUTER : ' + computerChoice;
        resultDisplay.textContent = result;
        resultDisplay.classList.remove("greenText", "redText");

        switch(result){
            case "YOU WIN!" : 
              resultDisplay.classList.add("greenText");
              playerScoreDisplay.textContent = playerScore;
              playerScore++;
            break;
            case "YOU LOST!"  :
               resultDisplay.classList.add("redText"); 
               computerScoreDisplay.textContent = computerScore;
               computerScore++;
            break;
        }


}