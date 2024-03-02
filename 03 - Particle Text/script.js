let canvas;
let context;

window.addEventListener("load", function () {
  canvas = document.getElementById("canvas1");
  context = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  drawLines(canvas.width / 2, canvas.height / 2);

  const text = "Hello!";
  const textX = canvas.width / 2;
  const textY = canvas.height / 2;

  context.fillStyle = "red";
  context.strokeStyle = "blue";
  context.lineWidth = 3;

  context.font = "180px Arial";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, textX, textY);
  context.strokeText(text, textX, textY);
});

// creating a function to draw two lines that goes through x and y axis in the centre of the canvas

function drawLines(x, y) {
  //  Drawing the x axis
  context.lineWidth = 3;
  context.strokeStyle = "grey";
  context.beginPath();
  context.moveTo(0, y);
  context.lineTo(canvas.width, y);
  context.stroke();
  // Drawing the y axis
  context.lineWidth = 3;
  context.strokeStyle = "white";
  context.beginPath();
  context.moveTo(x, 0);
  context.lineTo(x, canvas.height);
  context.stroke();
  context.closePath();
}
