initializeGame();

function initializeGame() {
  let playerScore = 0;
  let computerScore = 0;
  let roundWinner = 'Noone';
  let gameWinner = 'Noone';
  let gameResults = '';

  const divPlayerScore = document.getElementById('div-player-score');
  const divComputerScore = document.getElementById('div-computer-score');
  const divRoundResults = document.getElementById('div-round-results');
  const divGameResults = document.getElementById('div-game-results');

  const btnRock = document.getElementById("btn-rock");
  const btnPaper = document.getElementById("btn-paper");
  const btnScissors = document.getElementById("btn-scissors");
  const btnResetGame = document.getElementById("btn-reset-game");

  btnRock.addEventListener('click', () => {roundWinner = (playRound("rock", computerPlay()))});
  btnPaper.addEventListener('click', () => {roundWinner = (playRound("paper", computerPlay()))});
  btnScissors.addEventListener('click', () => {roundWinner = (playRound("scissors", computerPlay()))});
  btnResetGame.addEventListener('click', () => resetGame ());
  
  function playRound(playerSelection, computerSelection) {
    console.log("lancement fonction playRound");
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
          computerScore++;
          result = `Computer wins ! ${computerSelection} beats ${playerSelection}`;
        } else {
          winner = 'player';
          playerScore++;
          result = `You win ! ${playerSelection} beats ${computerSelection}`;
      }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
          winner = 'computer';
          computerScore++;
          result = `Computer wins ! ${computerSelection} beats ${playerSelection}`;
        }
        else {
          winner = 'player';
          playerScore++;
          result = `You win ! ${playerSelection} beats ${computerSelection}`;
      }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
          winner = 'computer';
          computerScore++;
          result = `Computer wins ! ${computerSelection} beats ${playerSelection}`;
        }
        else {
          winner = 'player';
          playerScore++;
          result = `You win ! ${playerSelection} beats ${computerSelection}`;
        } 
      }
    else {
      winner = 'Noone';
      result = `${playerSelection} is not a valid choice.`;
    }
    
    divPlayerScore.textContent = playerScore;
    divComputerScore.textContent = computerScore;
    divRoundResults.textContent = result;

    if (playerScore === 5) {
      gameWinner = 'player';
      gameResults = `Player won with ${playerScore} points !`;
      
    } else if (computerScore === 5) {
      gameWinner = 'computer';
      gameResults = `Computer won with ${computerScore} points !`;
    }

    if (gameResults) {
      divGameResults.textContent = gameResults;
    }

    return winner;
  }

  function resetGame () {
    playerScore = 0;
    computerScore = 0;
    roundWinner = 'Noone';
    gameWinner = 'Noone';
    gameResults = '';
    divPlayerScore.textContent = "";
    divComputerScore.textContent = "";
    divRoundResults.textContent = "";
    divGameResults.textContent = "";
  }
  
}

function computerPlay() {
  const choicesArray = ['rock', 'paper', 'scissors'];
  const computerSelection = choicesArray[(Math.random() * choicesArray.length) | 0];
  return(computerSelection);
}


 