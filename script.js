var pattern = [];
for (let i = 0; i < 8; ++i){
  pattern[i] = Math.floor(Math.random() * (4 - 1 + 1) + 1);
}
var progress = 0;
var gamePlaying = false;

function startGame