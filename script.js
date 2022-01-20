// function that returns random choice from computer OK
function computerPlay () {
	const choicesArray = ['rock', 'paper', 'scissors'];
	const computerSelection = choicesArray[(Math.random() * choicesArray.length) | 0];
	return(computerSelection);
}

// const playerSelection = 'rock';
// let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	let result;

	console.log(`You chose : ${playerSelection}`);
	console.log(`Computer chose : ${computerSelection}`);

	if (playerSelection === computerSelection) {
		result = `It's a tie !`
	}
	else if (playerSelection === 'rock') {
		if (computerSelection === 'paper')
			result = `Computer wins ! ${computerSelection} beats ${playerSelection}`;
		else
			result = `You win ! ${playerSelection} beats ${computerSelection}`;
	}
	else if (playerSelection === 'paper') {
		if (computerSelection === 'scissors')
			result = `Computer wins ! ${computerSelection} beats ${playerSelection}`;
		else
			result = `You win ! ${playerSelection} beats ${computerSelection}`;
	}
	else if (playerSelection === 'scissors') {
		if (computerSelection === 'rock')
			result = `Computer wins ! ${computerSelection} beats ${playerSelection}`;
		else
			result = `You win ! ${playerSelection} beats ${computerSelection}`;
	} else result = `${playerSelection} is not a valid choice.`

	return result;
}

console.log(playRound ('Pezfzef', computerPlay()));


// input from player : R, P or S (case insensitive) (LATER)

// if playerSelection === computerSelection then tie
// else return a string for winning or losing + what happened (e.g. You win ! Paper beats rock)






