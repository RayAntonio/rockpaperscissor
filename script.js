
function getComputerChoice() {
    computer_choice =Math.trunc(Math.random()*3+1)
    //Expected output 1,2, or 3
    return computer_choice;
    
}

function getHumanChoice(){
    human_choice = prompt("Rock, paper or scissors?");
    return human_choice;
}




