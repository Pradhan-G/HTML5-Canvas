const canvas = document.getElementById("canvas1");
var particles = [];
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// // Building a rectangle
// ctx.fillStyle = "blue";
// ctx.fillRect(200, 200, 100, 50);

// // Building a triangle
// ctx.fillStyle = "green";
// ctx.beginPath();
// ctx.moveTo(300, 100);
// ctx.lineTo(350, 150);
// ctx.lineTo(250, 150);
// ctx.lineTo(300, 100);
// ctx.fill();

// // Building another Triangle
// ctx.fillStyle = "yellow";
// ctx.beginPath();
// ctx.lineWidth = 7;
// ctx.moveTo(500, 200);
// ctx.lineTo(600, 200);
// ctx.lineTo(550, 150);
// ctx.lineTo(500, 200);
// ctx.fill();
// ctx.stroke();

// Draw a Circle Everytime i click on the window anywhere

// canvas.addEventListener("click", () => {
//   ctx.fillStyle = "red";
//   ctx.strokeStyle = "red";
//   ctx.lineWidth = 3;
//   ctx.beginPath();
//   ctx.arc(100, 100, 50, 0, Math.PI * 2);
//   ctx.stroke();
// });

const mouse = {
  x: null,
  y: null,
};

// Creating a colors array with more than 100 different colors in it
color = "green";

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.opacity = 1; // New property
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.opacity > 0) {
      this.opacity -= 1 / 120; // Decrease opacity
    }
  }

  draw() {
    ctx.fillStyle = color;
    ctx.globalAlpha = this.opacity; // Use opacity for drawing
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1; // Reset opacity to fully opaque for other drawings
  }
}

function init() {
  for (let i = 0; i < 5; i++) {
    particles.push(new Particle());
  }
}
init();

function handleParticles() {
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    // Remove particle if opacity is less than or equal to 0
    if (particles[i].opacity <= 0) {
      particles.splice(i, 1);
      i--; // Adjust the index since we removed an item
    }
  }
}

canvas.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  init();
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}

animate();
