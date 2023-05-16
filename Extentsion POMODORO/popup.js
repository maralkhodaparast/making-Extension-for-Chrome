let timerInterval;
let minutes = 25;
let seconds = 0;

function formatTime(time) {
  return time.toString().padStart(2, '0');
}

function updateTimerDisplay() {
  const timerDisplay = document.getElementById('timer');
  timerDisplay.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
}

function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        alert('Pomodoro session completed!');
        return;
      }

      if (seconds === 0) {
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }

      updateTimerDisplay();
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  minutes = 25;
  seconds = 0;
  updateTimerDisplay();
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

updateTimerDisplay();
