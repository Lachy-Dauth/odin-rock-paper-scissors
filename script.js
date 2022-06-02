const opts = ["Rock", "Paper", "Scissors"];
const validInputs = ["r", "p", "s"]

const outDiv = document.querySelector("#out");
const scoreDiv = document.querySelector("#score");
const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");
const winnerDiv = document.querySelector('#winner');

let wins = 0;
let losses = 0;
let games = 0;

function endGame() {
  outDiv.style.cssText = "filter: blur(4px); transition: all ease 0.5s;";
  scoreDiv.style.cssText = "filter: blur(4px); transition: all ease 0.5s;";
  if (wins == losses) return("It was a draw ");
  else if (wins < losses) return("You lose ");
  else return("You win ");
}

buttons.forEach(button => {
  button.addEventListener("click", e => {
    if (games >= 5) return;
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    games += 1;
    if (result[1] == 1) wins += 1;
    if (result[1] == -1) losses += 1;
    outDiv.innerHTML += result[0] + "<br>";
    scoreDiv.innerHTML = "Wins: " + wins + "<br>" + "Losses: " + losses + "<br>" + "Games: " + games + "<br>"
    if (games == 5) winnerDiv.innerHTML = endGame() + wins + " v " + losses;
  })
})

function computerPlay() {
  return opts[Math.floor(Math.random()*opts.length)];
}

function playRound(playerSelection, comupterSelection) {
  // matches the selections to a number
  let simpPlayer = validInputs.indexOf(playerSelection.split("")[0].toLowerCase());
  let simpComp = validInputs.indexOf(comupterSelection.split("")[0].toLowerCase());
  if (simpPlayer == -1 || simpComp == -1) { // check if the inputs are invalid
    return "The input was invalid";
  }
  switch (simpPlayer - simpComp) {
    case 0: // if the numbers are the same it is a draw
      return(["It Was A Draw! " + opts[simpPlayer] + " Draws With " + opts[simpComp], 0]);
      break;
    case 1: 
    case -2:
      return(["You Win! " + opts[simpPlayer] + " Beats " + opts[simpComp], 1]);
      break;
    case -1:
    case 2:
      return(["You Lose! " + opts[simpPlayer] + " Loses To " + opts[simpComp], -1]);
      break;
  }
}

function game(rounds) {
  for (let i = 0; i < rounds; i++) {
    const playerSelection = prompt("What are you going to play?");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

