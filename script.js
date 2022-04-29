function computerPlay () {
  const choicesArray = ['rock', 'paper', 'scissors'];
  const computerSelection = choicesArray[(Math.random() * choicesArray.length) | 0];
  return(computerSelection);
}





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
  let roundWinner = 'Noone';
  let gameWinner = 'Noone';
  let gameResults = '';

  const btnRock = document.getElementById("btn-rock");
  const btnPaper = document.getElementById("btn-paper");
  const btnScissors = document.getElementById("btn-scissors");

  

  
// jouer en FT5 

  while (playerScore < 5 || computerScore < 5) {
    btnRock.addEventListener('click', () => {roundWinner = (playRound("rock", computerPlay()))});
    btnPaper.addEventListener('click', () => {roundWinner = (playRound("paper", computerPlay()))});
    btnScissors.addEventListener('click', () => {roundWinner = (playRound("scissors", computerPlay()))});


    if (roundWinner == 'player') {
      playerScore++;
      console.log(playerScore);
    } else if (roundWinner == 'computer') {
      computerScore++;
      console.log(computerScore);
    }

    console.log(`Player score is : ${playerScore}`);
    console.log(`Computer score is : ${computerScore}`);
    console.log('');

    if (playerScore == 5) {
        gameWinner = 'player';
        gameResults = `Player won with ${playerScore} points !`;
    } else if (computerScore == 5) {
        gameWinner = 'computer';
        gameResults = `Computer won with ${computerScore} points !`;
    }

    console.log(gameWinner);

  console.log(gameResults);
  return gameWinner;
  }
}
game();