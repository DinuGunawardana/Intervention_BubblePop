class Bubble {
  constructor(x, y, radius, speed) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    this.opacity = 0.5;
  }

  update() {
    this.y -= this.speed;
    this.draw();
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(173,216,230,${this.opacity})`;
    ctx.fill();
  }

//   dissolve() {
//     this.opacity -= 0.05;
//     this.radius += 0.3;
//   }

  dissolve() {
    this.opacity -= 0.08;
    this.radius += 0.5;
  }
}