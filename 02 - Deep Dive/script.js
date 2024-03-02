// Creating Window.onlad because we want to create an instance of the class FlowFieldEffect when the window is loaded.

let canvas;
let ctx;
let flowField;
let flowFiledAnimation;
window.onload = function () {
  // Target the Canvas
  canvas = document.getElementById("canvas1");

  // Get the 2D Context
  ctx = canvas.getContext("2d");

  // Set the Canvas Size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  //   creating an instance of the FlowFieldEffect
  flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
  flowField.animate();
};

// Classes Encapsulates Data and then work on it with their data

window.addEventListener("resize", () => {
  cancelAnimationFrame(flowFiledAnimation);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
  flowField.animate();
});

class FlowFieldEffect {
  // These are private class fields
  #ctx;
  #width;
  #height;

  // Creating a constructor and passing the context, width and height so that we can access them in the class. these parameters are entered when we create an instance of the class.
  constructor(ctx, width, height) {
    this.#ctx = ctx;
    this.#ctx.strokeStyle = "white";
    this.#width = width;
    this.#height = height;
    console.log("Effect Loaded");
    this.#draw(10, 10);
    this.x = 0;
    this.y = 0;
  }

  #draw(x, y) {
    const length = 500;
    this.#ctx.beginPath();
    this.#ctx.moveTo(x, y);
    this.#ctx.lineTo(x + length, y + length);
    this.#ctx.stroke();
  }

  animate() {
    this.#ctx.clearRect(0, 0, this.#width, this.#height);
    this.#draw(this.x, this.y);
    this.x += 2;
    this.y += 0.5;
    console.log("animating");
    flowFiledAnimation = requestAnimationFrame(this.animate.bind(this));
  }
}
