let rock = document.querySelector("#rock");
 let paper = document.querySelector("#paper");
 let scissors = document.querySelector("#scissors");

let divWords = document.querySelector(".words");



 let playerScore=0;
 let computerScore=0;


function createPlayAgainButton(){
    let playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play Again";
    playAgainButton.style.marginTop = "30px";
    playAgainButton.style.borderRadius = "8px";
    playAgainButton.style.border = "3px salmon solid";
    playAgainButton.style.fontSize ="20px";
    divWords.append(playAgainButton);

    playAgainButton.onclick = function(){
        result.textContent = "Choose your weapon";
        score.textContent = "First to score 5 points win the game";
        playAgainButton.remove();

       playerScore=0;
       computerScore=0;
       
   }
}

function checkScore(){
    if(playerScore === 5 && playerScore > computerScore){
        result.textContent = `player beats computer by score ${playerScore}:${computerScore}`;  
        createPlayAgainButton();
    }
    else if(computerScore === 5 && computerScore > playerScore){
        result.textContent = `computer beats player by score ${computerScore}:${playerScore}`
        createPlayAgainButton();
    }
}

 function clickTheGame(playerChoice){
    let resultOfGame;
    let result = document.querySelector("#result");
    let score = document.querySelector("#score");

   
        resultOfGame = theGame(playerChoice,getComputerChoice());
        result.innerHTML = resultOfGame;
    if(resultOfGame.charAt(4) === "w"){
        playerScore++;
        checkScore();
    }
    else if(resultOfGame.charAt(4) === "l"){
        computerScore++;
        checkScore();
    }
    score.innerHTML = `player: ${playerScore} || computer: ${computerScore}`;

    }
    
   
    function activeClickOrNot(playerChoice){
        if(playerScore !== 5 && computerScore !== 5)
        clickTheGame(playerChoice);
    }
    
 
 
 rock.onclick = function(){
    activeClickOrNot("rock"); 
   
 }
 paper.onclick = function(){
    activeClickOrNot("paper"); 
 }

 scissors.onclick = function(){
    activeClickOrNot("scissors"); 
 }





function getComputerChoice(){

    let choice;
    let number = Math.round((Math.random() * 10)+1);

    if(number === 11){number =-1;}

   if(number <= 3){
        choice = "rock";
    }
    else if (number >= 4 && number <= 7 ){
        choice = "paper";
    }
    else{
        choice = "scissors";
    }

    return choice;

}


function theGame(playerChoice,computerChoice){

    //Assign  a short name variable for code readability
    let pC = playerChoice.toLowerCase();
    pC = pC.trim();
    let cC = computerChoice;
    let r = "rock";
    let p = "paper";
    let s = "scissors";
    
    let winLose;
    let result;
     if(pC === r && cC === s){

         winLose = "win";
         result = `you ${winLose}! Rock beats scissors`;
         
     }
     else if(cC === r && pC === s){

         winLose = "lose";
         result = `you ${winLose}! Rock beats scissors`;
     }
     else if(pC === s && cC === p){

         winLose = "win";
         result = `you ${winLose}! Scissors beats paper`;
     }
     else if(cC === s && pC === p){

         winLose = "lose";
         result = `you ${winLose}! Scissors beats paper`;
     }
     else if(pC  === p && cC === r){

        winLose = "win";
        result = `you ${winLose}! paper beats rock`;
     }
     else if(cC  === p && pC === r){

        winLose = "lose";
        result = `you ${winLose}! paper beats rock`;
     }
     else if(pC === r && cC === pC){

        result = "rock ties with rock";
     }
     else if(pC === "paper" && cC === pC){

        result = "paper ties with paper";
     }
     else if(pC === "scissors" && cC === pC){

        result = "scissors ties with scissors";
     }
     else{

        result = "you entered a wrong choice"
     }

     return result;
 }


 
