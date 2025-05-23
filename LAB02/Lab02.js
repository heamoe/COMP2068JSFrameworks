const prompt = require('prompt');

function playGame() {
    prompt.start();

    const schema = {
        properties: {
            userSelection: {
                description: 'Choose ROCK, PAPER, or SCISSORS',
                pattern: /^(ROCK|PAPER|SCISSORS)$/i,
                message: 'Please enter ROCK, PAPER, or SCISSORS',
                required: true
            }
        }
    };

    prompt.get(schema, function (err, result) {
        if (err) {
            console.log('Something went wrong.');
            return;
        }

        var userSelection = result.userSelection.toUpperCase();

        var randomNumber = Math.random();
        var computerSelection = '';

        if (randomNumber <= 0.34) {
            computerSelection = 'PAPER';
        } else if (randomNumber <= 0.67) {
            computerSelection = 'SCISSORS';
        } else {
            computerSelection = 'ROCK';
        }

        console.log('User selected: ' + userSelection);
        console.log('Computer selected: ' + computerSelection);

        if (userSelection === computerSelection) {
            console.log("It's a tie");
        } else if (
            (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
            (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
            (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
        ) {
            console.log("YOU Wins");
        } else {
            console.log("GameMaster Wins");
        }

        console.log('---');
        playGame();
    });
}

playGame();
