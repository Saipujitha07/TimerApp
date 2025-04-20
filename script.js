let timerDisplay = document.getElementById('timer');
let startButton = document.querySelector('.start');
let stopButton = document.querySelector('.stop');
let resetButton = document.querySelector('.reset');
let shortBreakButton = document.querySelector('.button4');
let longBreakButton = document.querySelector('.button5');

let time = 25 * 60;
let countdown;
let isRunning = false;

function updateDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        countdown = setInterval(() => {
            if (time > 0) {
                time--;
                updateDisplay();
            } else {
                clearInterval(countdown);
                isRunning = false;
                alert("Time's up! Take a break 🧘‍♂️");
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(countdown);
    isRunning = false;
}

function resetTimer() {
    clearInterval(countdown);
    time = 25 * 60;
    isRunning = false;
    updateDisplay();
}

function shortBreak() {
    clearInterval(countdown);
    time = 5 * 60;
    isRunning = false;
    updateDisplay();
}

function longBreak() {
    clearInterval(countdown);
    time = 15 * 60;
    isRunning = false;
    updateDisplay();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
shortBreakButton.addEventListener('click', shortBreak);
longBreakButton.addEventListener('click', longBreak);

updateDisplay();
