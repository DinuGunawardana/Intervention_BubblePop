const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bubbles = [];

function spawnBubble() {
  const x = Math.random() * canvas.width;
  const y = canvas.height + 50;
  bubbles.push(new Bubble(x, y, 20, 0.7));
}

function controlledSpawn() {
  const phase = getCurrentPhase();

  if (phase === "ARRIVAL") spawnBubble();
  if (phase === "ENGAGE") spawnBubble();
  if (phase === "DEEP") if (Math.random() < 0.5) spawnBubble();
}

setInterval(controlledSpawn, 2000);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  updatePhase();

  bubbles.forEach((b, i) => {
    b.update();
    if (b.opacity <= 0) bubbles.splice(i, 1);
  });

  requestAnimationFrame(animate);
}

animate();

// interaction
canvas.addEventListener("click", (e) => {
  bubbles.forEach((b) => {
    const dx = b.x - e.clientX;
    const dy = b.y - e.clientY;

    if (Math.sqrt(dx * dx + dy * dy) < b.radius) {
      b.dissolve();
      logEvent("tap", { x: e.clientX, y: e.clientY });
    }
  });
});

// breathing sync
let breath = 0;
setInterval(() => {
  breath += 0.1;
  let scale = 1 + Math.sin(breath) * 0.02;
  document.body.style.transform = `scale(${scale})`;
}, 100);

function endSession() {
  exportLogs();
  alert("Session Complete");
}