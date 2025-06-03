
function getComputerChoice(){
    computer_choice =Math.trunc(Math.random()*3+1)
    //Expected output 1,2, or 3
    
    return computer_choice;
    
}

function getHumanChoice(){
    human_num = 0;

    human_choice = prompt("Rock, paper or scissors?");
    human_choice = human_choice.toLowerCase(); //To make it case insensitive
    if (human_choice =="rock") {
        human_num = 1;
    }
    else if (human_choice =="paper") {
      human_num =2;
    }
    else if( human_choice == "scissors") {
      human_num = 3;
    }
      
     
    
    return human_num;
}
function playround(human_num,computer_choice,computerScore,humanScore){
  
  if (computer_choice == human_num){ 
    console.log("Tie");
  }
  else if (computer_choice ==3  && human_num ==2) {
    console.log("You lost! Scissors beats paper!")


  }
  else if (computer_choice ==3  && human_num ==1) {
    console.log("You Won! Rock beats Scissors!")
    return 

  }
  else if (computer_choice ==2  && human_num ==1) {
    console.log("You lost! Paper beats rock!")
    return computerScore++;
  }
  else if (computer_choice ==2  && human_num ==3) {
    console.log("You Won! Paper beats Scissors!")
    return humanScore++;
  }
  else if (computer_choice ==1  && human_num ==3) {
    console.log("You lost! Rock beats Scissors!")
    return computerScore++;
  }
  else if (computer_choice ==1  && human_num ==2) {
    console.log("You Won! Paper beats rock!")
    return humanScore++;
  }
 else {
  console.log("pie");
 }



}
function playGame() {
  var humanScore = 0;
  var computerScore = 0;
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playround(humanSelection,computerSelection,computerScore,humanScore)
  
}
i = 0;
while (i<5) {
  playGame();
  i++;
  
}
