let rock = document.querySelector("#rock");
 let paper = document.querySelector("#paper");
 let scissors = document.querySelector("#scissors");

 let result = document.querySelector("#result");
 let score = document.querySelector("#score");

 let playerScore=0;
 let computerScore=0;
 let resultOfGame;

 function clickTheGame(playerChoice){
    resultOfGame = theGame(playerChoice,getComputerChoice());
    result.innerHTML = resultOfGame;
    if(resultOfGame.charAt(4) === "w"){
        playerScore++;
    }
    else if(resultOfGame.charAt(4) === "l"){
        computerScore++;
    }
    score.innerHTML = `player: ${playerScore} || computer: ${computerScore}`;
 }
 
 rock.onclick = function(){
   clickTheGame("rock"); 

 }
 paper.onclick = function(){
    clickTheGame("paper"); 
 }

 scissors.onclick = function(){
    clickTheGame("scissors"); 
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

// console.log(theGame("rock",getComputerChoice()));

function gameRounds(){
    
    
   

    // for(let i=0; i<5; i++){
      
    
    // }

    if(playerScore > computerScore){
        return `player beats computer by score ${playerScore}:${computerScore}`
    }
    else if(computerScore > playerScore){
        return `computer beats player by score ${computerScore}:${playerScore}`
    }
    else{
        return `it's a Draw by score ${playerScore}:${computerScore} `
    }

}

//  let rock = document.querySelector("#rock");
//  let paper = document.querySelector("#paper");
//  let scissors = document.querySelector("#scissors");

//  let result = document.querySelector("#result");

 
//  rock.onclick = function(){
//     result.textContent = theGame("rock",getComputerChoice());

//  }
//  paper.onclick = function(){
//     result.textContent = theGame("paper",getComputerChoice());
//  }

//  scissors.onclick = function(){
//     result.textContent = theGame("scissors",getComputerChoice());
//  }


 


// let rockResult = theGame("rock",getComputerChoice());
// let paperResult = theGame("paper",getComputerChoice());
// let scissorsResult = theGame("scissors",getComputerChoice());

// let resultDiv = document.createElement("div");
 

// rock.addEventListener("click",()=>{
//     let rockResult = theGame("rock",getComputerChoice());
//     resultDiv.append(rockResult);
//     document.body.append(resultDiv);
    
// });
// paper.addEventListener("click",()=>{});
// scissors.addEventListener("click",()=>{console.log()});

 
