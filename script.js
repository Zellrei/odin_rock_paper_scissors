function computerPlay () {
  const choicesArray = ['rock', 'paper', 'scissors'];
  const computerSelection = choicesArray[(Math.random() * choicesArray.length) | 0];
  return(computerSelection);
}

const btnRock = document.getElementById("btnRock");
const btnPaper = document.getElementById("btnPaper");
const btnScissors = document.getElementById("btnScissors");

btnRock.addEventListener('click', () => {playRound("rock", computerPlay());});
btnPaper.addEventListener('click', () => {playRound("paper", computerPlay());});
btnScissors.addEventListener('click', () => {playRound("scissors", computerPlay());});





function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let winner;
  let result;
  console.log(`You chose : ${playerSelection}`);
  console.log(`Computer chose : ${computerSelection}`);

  if (playerSelection === computerSelection) {
    winner = 'Noone';
    result = `It's a tie !`
  } else if (playerSelection === 'rock') {
      if (computerSelection === 'paper') {
        winner = 'computer';
        result = `Computer wins ! ${computerSelection} beats ${playerSelection}`;
      } else {
        winner = 'player';
        result = `You win ! ${playerSelection} beats ${computerSelection}`;
    }
  } else if (playerSelection === 'paper') {
      if (computerSelection === 'scissors') {
        winner = 'computer';
        result = `Computer wins ! ${computerSelection} beats ${playerSelection}`;
      }
      else {
        winner = 'player';
        result = `You win ! ${playerSelection} beats ${computerSelection}`;
    }
  } else if (playerSelection === 'scissors') {
      if (computerSelection === 'rock') {
        winner = 'computer';
        result = `Computer wins ! ${computerSelection} beats ${playerSelection}`;
      }
      else {
        winner = 'player';
        result = `You win ! ${playerSelection} beats ${computerSelection}`;
      } 
    }
  else {
    winner = 'Noone';
    result = `${playerSelection} is not a valid choice.`;
  }

  console.log(result);
  return winner;
}
  
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let gameWinner = 'Noone';
  let gameResults = '';

// jouer 5 parties :
/*   for (let index = 0; index < 5; index++) {
    
    let playerSelection = prompt(`Rock, Paper, Scissors ?`, `Rock`);
    if (typeof playerSelection != 'string') playerSelection = 'None';
    console.log(`Round ${index + 1}`);
    let roundWinner = playRound (playerSelection, computerPlay());
    
    if (roundWinner === 'player') {
      playerScore++;
    } else if (roundWinner === 'computer') {
      computerScore++;
    } 

    console.log(`Player score is : ${playerScore}`);
    console.log(`Computer score is : ${computerScore}`);
    console.log('');
  } */

  for (let index = 0; index < 1; index++) {
    
    let playerSelection = prompt(`Rock, Paper, Scissors ?`, `Rock`);
    if (typeof playerSelection != 'string') playerSelection = 'None';
    console.log(`Round ${index + 1}`);
    let roundWinner = playRound (playerSelection, computerPlay());
    
    if (roundWinner === 'player') {
      playerScore++;
    } else if (roundWinner === 'computer') {
      computerScore++;
    } 

    console.log(`Player score is : ${playerScore}`);
    console.log(`Computer score is : ${computerScore}`);
    console.log('');
  }

  if (playerScore > computerScore) {
      gameWinner = 'player';
      gameResults = `Player won with ${playerScore} points !`;
  } else if (playerScore < computerScore) {
      gameWinner = 'computer';
      gameResults = `Computer won with ${computerScore} points !`;
  } else { 
      gameWinner = 'Noone';
      gameResults = `Nobody wins, it's a draw !`;
  }

  console.log(gameResults);
  return gameWinner;
}

// game();

