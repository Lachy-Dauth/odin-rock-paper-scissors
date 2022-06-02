const opts = ["Rock", "Paper", "Scissors"];
const validInputs = ["r", "p", "s"]

function computerPlay(){
  return opts[Math.floor(Math.random()*opts.length)];
}

function playRound(playerSelection, comupterSelection){
  // matches the selections to a number
  let simpPlayer = validInputs.indexOf(playerSelection.split("")[0].toLowerCase());
  let simpComp = validInputs.indexOf(comupterSelection.split("")[0].toLowerCase());
  if (simpPlayer == -1 || simpComp == -1) { // check if the inputs are invalid
    return "The input was invalid";
  }
  switch (simpPlayer - simpComp) {
    case 0: // if the numbers are the same it is a draw
      return("It Was A Draw! " + opts[simpPlayer] + " Draws With " + opts[simpComp]);
      break;
    case 1: 
    case -2:
      return("You Win! " + opts[simpPlayer] + " Beats " + opts[simpComp]);
      break;
    case -1:
    case 2:
      return("You Lose! " + opts[simpPlayer] + " Loses To " + opts[simpComp]);
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

