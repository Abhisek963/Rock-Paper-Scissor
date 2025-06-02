let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg"); 

const user = document.querySelector("#user");
const computer = document.querySelector("#computer");

const genComputerChoice = () => {
  let option = ["rock","paper","scissor"];
  const rndidx = Math.floor(Math.random() * 3);
  return option[rndidx];
};

const draw = () => {
   msg.innerText = "Game was Draw. Play again!";
   msg.style.backgroundColor = "rgb(55, 79, 71)";
};

const showWinner = (userWin ,userInput, computerChoice) => {
   if(userWin){
    userScore++;
    user.innerText = userScore;
    msg.innerText = `You Win! Your ${userInput} beats ${computerChoice}`;
    msg.style.backgroundColor = "rgb(32, 144, 2)";
   }else{
    computerScore++;
    computer.innerText = computerScore;
     msg.innerText = `You Lost! ${computerChoice} beats Your ${userInput}`;
    msg.style.backgroundColor = "rgb(122, 11, 11)";
   }
};


const play = (userInput) => {
   const computerChoice = genComputerChoice();


if(userInput === computerChoice){
  draw();
  return;
}
  let userWin = true;
  if(userInput === "rock"){
    //Scissors,paper
     userWin = computerChoice === "paper" ? false : true;
  }else if(userInput === "paper"){
    // rock,scissors
     userWin = computerChoice === "scissors" ? false : true;
  }else{
    //rock,paper
   userWin = computerChoice === "rock" ? false : true;
  }
  showWinner(userWin , userInput , computerChoice);
};



choices.forEach((choice) => {
  choice.addEventListener("click", () =>{
    const userInput = choice.getAttribute("id");
     play(userInput);
  });
});