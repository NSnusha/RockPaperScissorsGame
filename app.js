let userScore = 0;
let compScore = 0;

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const genCompChoice=()=>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    const compC = options[randIdx];
    console.log(compC);
    return compC;
  
  };

const choosen = document.querySelector(".choosen");
const choose = document.querySelector(".choose");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const userChooseDiv = document.getElementById("userC");
const compChooseDiv = document.getElementById("compC");



const playGame = (userChoice) => {
  const compChoice =genCompChoice(); 

  userChooseDiv.innerHTML = '';  
  compChooseDiv.innerHTML = '';
 

  const userImg = document.createElement("img");
  userImg.src = `./images/${userChoice}.png`; 
  userChooseDiv.appendChild(userImg);
    
  
  const compImg = document.createElement("img");
  compImg.src = `./images/${compChoice}.png`;
  compChooseDiv.appendChild(compImg);


  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};



choices.forEach((choice) => {
  choice.addEventListener("click", () => {

    const userChoice = choice.getAttribute("id"); 
    playGame(userChoice);
  });
});

