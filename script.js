const opts = ["Rock", "Paper", "Scissors"];

function computerPlay(){
  return opts[Math.floor(Math.random()*opts.length)];
}
