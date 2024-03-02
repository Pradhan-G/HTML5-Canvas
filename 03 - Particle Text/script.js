let canvas;
let context;

window.addEventListener("load", function () {
  canvas = document.getElementById("canvas1");
  context = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  drawLines(canvas.width / 2, canvas.height / 2);

  //   const text = "Hello";
  const textX = canvas.width / 2;
  const textY = canvas.height / 2;

  context.fillStyle = "red";
  context.strokeStyle = "blue";
  context.lineWidth = 3;

  context.font = "80px Arial";
  context.textAlign = "center";
  context.textBaseline = "middle";
  //   context.fillText(text, textX, textY);
  //   context.strokeText(text, textX, textY);

  const maxTextWidth = canvas.width * 1;
  // Text Wrap function
  function wrapText(text) {
    let linesArray = [];
    let lineCounter = 0;
    let line = "";
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      let testline = line + words[i] + " ";
      console.log(context.measureText(testline).width);
      if (context.measureText(testline).width > maxTextWidth) {
        line = words[i] + " ";
        lineCounter++;
      } else {
        line = testline;
      }
      linesArray[lineCounter] = line;
      // context.fillText(testline, canvas.width / 2, canvas.height / 2 + i * 80);
    }
    linesArray.forEach((line, index) => {
      context.fillText(line, canvas.width / 2, canvas.height / 2 + index * 70);
      lineCounter++;
    });
  }

  wrapText("Hey how are you whats good today hope you are doing well");
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
