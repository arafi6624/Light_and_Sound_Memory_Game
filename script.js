// global constants
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const timerEl = document.getElementById('timer');


//global variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var cluePauseTime = 333; //how long to pause in between clues
var attempts = 0;
var time = 20;

function generatePattern(){
  for (let i = 0; i < 8; ++i){
  pattern[i] = Math.floor(Math.random() * (5 - 1 + 1) + 1); //Generates a random number between 1 and 5 and stores it in the i-th elemenent of pattern
  }
}

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  cluePauseTime = 333;
  clueHoldTime = 1000;
  attempts = 0;
  generatePattern();
  
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence();
}


var timer = setInterval(function(){
  timerEl.innerHTML= `0:$`;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    alert("You're out of time!");
  }
}, 1000);

function stopGame(){
  //initialize game variables
  gamePlaying = false;
  
  //swap the Stop and Start buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 246.94,
  2: 349.23,
  3: 440,
  4: 554.37,
  5: 659.26
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("btn"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("btn"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  context.resume()
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
  if(pattern[guessCounter] == btn){
    //Correct guess
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame(); //Game won
      }else{
        //Pattern was correct, next segment is added
        ++progress;
        if(cluePauseTime > 150){
          cluePauseTime -= 50; //Clue pause time is decremented after each successful level if it's above 150
        }
        if(clueHoldTime > 300){
          clueHoldTime -= 75; //Clue hold time is decremented after each successful level if it's above 300
        }
  
        playClueSequence();
      }
    }else{
      ++guessCounter; 
    }
  }else if(attempts < 2){
    ++attempts;
    alert("You have " + (3-attempts) + " attempts remaining! Try again after the clue.");
    guessCounter = 0;
    playClueSequence();
  }else{
    loseGame();
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("You won!")
}



