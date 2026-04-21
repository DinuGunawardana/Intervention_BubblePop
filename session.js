const SESSION_DURATION = 300; // seconds

let remainingTime = SESSION_DURATION;

function startCountdown() {
  const timerEl = document.getElementById("timer");

  const interval = setInterval(() => {
    remainingTime--;

    let min = Math.floor(remainingTime / 60);
    let sec = remainingTime % 60;

    timerEl.innerText =
      `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;

    updatePhaseByTime();

    if (remainingTime <= 0) {
      clearInterval(interval);
      endSession();
    }
  }, 1000);
}

// Phase control using time (more reliable)
function getCurrentPhase() {
  if (remainingTime > 270) return "ARRIVAL";
  if (remainingTime > 90) return "ENGAGE";
  if (remainingTime > 30) return "DEEP";
  return "EXIT";
}