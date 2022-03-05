var pattern = [];
var progress = 0;
var gamePlaying = false;

function generatePattern(){
  for (let i = 0; i < 8; ++i){
  pattern[i] = Math.floor(Math.random() * (4 - 1 + 1) + 1);
  }
}

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  generatePattern();
  
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
}

function stopGame(){
  //initialize game variables
  gamePlaying = false;
  
  //swap the Stop and Start buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}