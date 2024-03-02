let canvas;
let context;
let textInput;
window.addEventListener("load", function () {
  textInput = document.getElementById("textInput");
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

  context.font = "170px Arial";
  context.textAlign = "center";
  context.textBaseline = "middle";
  //   context.fillText(text, textX, textY);
  //   context.strokeText(text, textX, textY);

  const maxTextWidth = canvas.width * 1;
  const lineHeight = 160;
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
    }
    let textHeight = lineCounter * lineHeight;
    let textY = canvas.height / 2 - textHeight / 2;
    linesArray.forEach((line, index) => {
      context.fillText(line, canvas.width / 2, textY + index * lineHeight);
      lineCounter++;
    });
  }

  //   wrapText("Hey how");
  textInput.addEventListener("keyup", function (e) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    wrapText(e.target.value);
  });
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
