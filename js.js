const textArray = [
    'rock',
    'paper',
    'scissors'
];

const getValue = (playerChoice) => {
    const randomNumber = Math.floor(Math.random()*textArray.length);
    const botChoice = textArray[randomNumber];
    const prompt = document.getElementById('prompt');

    const player = document.getElementById('player');
    const computer = document.getElementById('computer');

    player.src = `./imgs/${playerChoice}Pink.png`;
    computer.src = `./imgs/${botChoice}Pink.png`;
    
    player.classList.remove('hidden');
    computer.classList.remove('hidden');

    if(playerChoice === botChoice) {
        prompt.innerHTML ='Draw';
    }
    else if(playerChoice === 'rock' && botChoice === 'paper') {
        prompt.innerHTML = 'Computer Wins'
    }
    else if(playerChoice === 'rock' && botChoice === 'scissors') {
        prompt.innerHTML = 'Player Wins'
    }
    else if(playerChoice === 'paper' && botChoice === 'scissors') {
        prompt.innerHTML = 'Computer Wins'
    }
    else if(playerChoice === 'paper' && botChoice === 'rock') {
        prompt.innerHTML = 'Player Wins'
    }
    else if(playerChoice === 'scissors' && botChoice === 'rock') {
        prompt.innerHTML = 'Computer Wins'
    }
    else if(playerChoice === 'scissors' && botChoice === 'paper') {
        prompt.innerHTML = 'Player Wins'
    }
 }

