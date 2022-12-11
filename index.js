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

    return choice.toLowerCase();

}


function theGame(playerChoice,computerChoice){

    let pC = playerChoice.toLowerCase();
    let cC = computerChoice;
    let winLose;
    let result;
     if(pC === "rock" && cC === "scissors"){
         winLose = "win";
         result = `you ${winLose}!Rock beats scissors`;
         
     }
     else if(cC === "rock" && pC === "scissors"){
         winLose = "lose";
         result = `you ${winLose}!Rock beats scissors`;
     }
     else if(pC === "scissors" && cC === "paper"){
         winLose = "win";
         result = `you ${winLose}!Scissors beats paper`;
     }
     else if(cC === "scissors" && pC === "paper"){
         winLose = "lose";
         result = `you ${winLose}!Scissors beats paper`;
     }
     else if(pC  === "paper" && cC === "rock"){
        winLose = "win";
        result = `you ${winLose}!paper beats rock`;
     }
     else if(cC  === "paper" && pC === "rock"){
        winLose = "lose";
        result = `you ${winLose}!paper beats rock`;
     }
     else if(pC === "rock" && cC === pC){
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

//  console.log(theGame("rock","paper"));

console.log(theGame("scissors",getComputerChoice()));
 
