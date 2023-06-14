const canvas = document.getElementById("drawing-canvas");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const strokeThickness = document.querySelector("#size");
const colorBtn = document.querySelector("#color");
const clearBtn = document.querySelector("#clear");

/* 

Canvas getContext() method 


Canvas rendering context 2d

*/

const ctx = canvas.getContext("2d");

let size = 10;
let isPressed = false;
let color = "black";
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", function (e) {
  isPressed = true;
  x = e.offesetX;
  y = e.offesetY;
});

canvas.addEventListener("mousemove", function (e) {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

canvas.addEventListener("mouseup", function (e) {
  isPressed = false;
  x = undefined;
  y = undefined;
});

// Drawing lines

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

// Drawing circles

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

// Increase btn
increaseBtn.addEventListener("click", () => {
  size += 1;

  if (size > 50) {
    size = 50;
  }
  updateSize();
});

decreaseBtn.addEventListener("click", function (e) {
  size -= 1;
  if (size < 1) {
    size = 1;
  }
  updateSize();
});

// Color Btn

colorBtn.addEventListener("change", (e) => {
  color = e.target.value;
});

// Udating the stroke width dynamically

function updateSize() {
  strokeThickness.innerText = size;
}

// Clear Btn
clearBtn.addEventListener("click", function (e) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
