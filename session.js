const SESSION_DURATION = 300000;

const phases = [
  { name: "ARRIVAL", duration: 30000 },
  { name: "ENGAGE", duration: 180000 },
  { name: "DEEP", duration: 60000 },
  { name: "EXIT", duration: 30000 }
];

let currentPhase = 0;
let phaseStartTime = Date.now();

function getCurrentPhase() {
  return phases[currentPhase].name;
}

function updatePhase() {
  const now = Date.now();

  if (now - phaseStartTime > phases[currentPhase].duration) {
    currentPhase++;
    phaseStartTime = now;

    if (currentPhase >= phases.length) {
      endSession();
    }
  }
}