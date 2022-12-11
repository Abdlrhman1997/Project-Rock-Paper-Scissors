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
    let cC = computerChoice;
    let r = "rock";
    let p = "paper";
    let s = "scissors";

    let winLose;
    let result;
     if(pC === r && cC === s){

         winLose = "win";
         result = `you ${winLose}!Rock beats scissors`;
         
     }
     else if(cC === r && pC === s){

         winLose = "lose";
         result = `you ${winLose}!Rock beats scissors`;
     }
     else if(pC === s && cC === p){

         winLose = "win";
         result = `you ${winLose}!Scissors beats paper`;
     }
     else if(cC === s && pC === p){

         winLose = "lose";
         result = `you ${winLose}!Scissors beats paper`;
     }
     else if(pC  === p && cC === r){

        winLose = "win";
        result = `you ${winLose}!paper beats rock`;
     }
     else if(cC  === p && pC === r){

        winLose = "lose";
        result = `you ${winLose}!paper beats rock`;
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

//  console.log(theGame("rock","paper"));

console.log(theGame("rock",getComputerChoice()));
 
