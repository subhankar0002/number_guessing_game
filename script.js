let computerGuess;
let inputNumbers = [];
let isDarkMode = false;
let isSound = true;
const gameSound =document.getElementById("gameSound");
const gameOver =document.getElementById("gameOver");

const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    document.getElementById('modePage').style.display = "none";
    document.getElementById('playgame').style.display = "none";
}
const startgame = () => {
    document.getElementById('modePage').style.display = "block";
    document.getElementById('homePage').style.display = "none";
    gameSound.play();
}
// start new game begin
const NewGame = () => {
    gameSound.play();
    document.getElementById('homePage').style.display = "flex";
    document.getElementById('playgame').style.display = "none";
    location.reload();
};
// sound on off
let sound = document.getElementById('soundOnOff');
sound.addEventListener('click', () => {
    isSound = !isSound;
    if (isSound) {
        document.getElementById('soundOnOff').innerHTML = "Sound On";
        gameSound.muted=false;
        gameOver.muted=false;
        gameSound.play();
        }
    else {
        document.getElementById('soundOnOff').innerHTML = "Sound Off";
        gameSound.muted=true;
        gameOver.muted=true;
    }
})
//  darkmode
let darkMode = document.getElementById('darkOnOff');
darkMode.addEventListener('click', () => {
    gameSound.play();
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        document.getElementById('darkOnOff').innerHTML = "Dark Mode On";
        document.body.classList.add('darkMode');
        
    }
    else {
        document.getElementById('darkOnOff').innerHTML = "Dark Mode Off";
        document.body.classList.remove('darkMode');

    }
})

// modes
const easyMode = () => {
    document.getElementById('modePage').style.display = "none";
    document.getElementById('playgame').style.display = "flex";
    document.getElementById('NewGame').style.display = "none";
    MaxGueses = 10;
    gameSound.play();
}
const mediumMode = () => {
    document.getElementById('modePage').style.display = "none";
    document.getElementById('playgame').style.display = "flex";
    document.getElementById('NewGame').style.display = "none";
    MaxGueses = 5;
    gameSound.play();
}
const hardMode = () => {
    document.getElementById('modePage').style.display = "none";
    document.getElementById('playgame').style.display = "flex";
    document.getElementById('NewGame').style.display = "none";
    MaxGueses = 3;
    gameSound.play();
}
// back Button
const backScreen = () => {
    document.getElementById('modePage').style.display = "none";
    document.getElementById('homePage').style.display = "flex";
    gameSound.play();
}
// main logic
const inputvalue = () => {
    gameSound.play();
    const userGuess = document.getElementById('inputBox').value;
    inputNumbers = [...inputNumbers, userGuess];
    document.getElementById('UserShow').innerHTML = inputNumbers;
    document.getElementById('UserAttemps').innerHTML = inputNumbers.length;
    document.getElementById('inputBox').value = '';
    if (MaxGueses > inputNumbers.length) {
        if (userGuess > computerGuess) {
            document.getElementById('commentry').innerHTML = 'Your guess is High..';
        }
        else if (userGuess < computerGuess) {
            document.getElementById('commentry').innerHTML = `Your guess is Low..`;
        }
        else {
            document.getElementById('commentry').innerHTML = 'Hurray!! It`s correct..';
            document.getElementById('NewGame').style.display = "flex";
            document.getElementById('inputBox').setAttribute("disabled", true);
        }
    }
    else {
        if (userGuess > computerGuess) {
            document.getElementById('inputBox').setAttribute("disabled", true);
            document.getElementById('commentry').innerHTML = `You lose!!<br>Correct value was ${computerGuess}`;
            document.getElementById('NewGame').style.display = "flex";
            gameOver.play();
        }
        else if (userGuess < computerGuess) {
            document.getElementById('inputBox').setAttribute("disabled", true);
            document.getElementById('commentry').innerHTML = `You lose!!<br>Correct value was ${computerGuess}`;
            document.getElementById('NewGame').style.display = "flex";
            gameOver.play();
        }
        else {
            document.getElementById('commentry').innerHTML = 'Hurray!! It`s correct..';
            document.getElementById('NewGame').style.display = "flex";
            document.getElementById('inputBox').setAttribute("disabled", true);
        }
    }
}


