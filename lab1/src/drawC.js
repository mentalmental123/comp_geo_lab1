import { context, ref } from "./refs.js";
import {
  canvasHeight,
  canvasWidth,
  unitsX,
  unitsY,
  xCenter,
  yCenter,
  xyDivision,
} from "./defaultVal.js";

export function drawGrid() {
  context.beginPath();

  // Горизонтальні лінії
  for (let i = 1; i < unitsY; i++) {
    const y = (canvasHeight / unitsY) * i;
    context.moveTo(0, y);
    context.lineTo(canvasWidth, y);
  }

  // Вертикальні лінії
  for (let i = 1; i < unitsX; i++) {
    const x = (canvasWidth / unitsX) * i;
    context.moveTo(x, 0);
    context.lineTo(x, canvasHeight);
  }

  context.strokeStyle = "#ccc";
  context.stroke();
}

// Малюємо вісі координат
export function drawAxes() {
  context.beginPath();

  // Горизонтальна вісь (X)
  context.moveTo(0, canvasHeight / 2);
  context.lineTo(canvasWidth, canvasHeight / 2);

  // Вертикальна вісь (Y)
  context.moveTo(canvasWidth / 2, 0);
  context.lineTo(canvasWidth / 2, canvasHeight);

  context.strokeStyle = "#000";
  context.stroke();
}
// малюємо фігуру
export function drawFigure(x, y, scaleX = 1, scaleY = 1) {
  context.beginPath();
  console.log(xyDivision);
  // context.scale(1.2, 1);
  // line 1
  context.moveTo(x + xyDivision * scaleX, y - xyDivision * scaleY * 13);
  context.lineTo(x + xyDivision * scaleX, y - xyDivision * scaleY * 7);
  // line 2
  context.moveTo(x + xyDivision * scaleX, y - xyDivision * scaleY * 13);
  context.lineTo(x + xyDivision * scaleX * 6, y - xyDivision * scaleY * 13);
  // line 3
  context.moveTo(x + xyDivision * scaleX * 6, y - xyDivision * scaleY * 13);
  context.lineTo(x + xyDivision * scaleX * 6, y - xyDivision * scaleY * 14);
  // line 4
  context.moveTo(x + xyDivision * scaleX * 6, y - xyDivision * scaleY * 14);
  context.lineTo(x + xyDivision * scaleX * 8, y - xyDivision * scaleY * 14);
  // line 5
  context.moveTo(x + xyDivision * scaleX * 8, y - xyDivision * scaleY * 14);
  context.lineTo(
    x + xyDivision * scaleX * 8,
    y - xyDivision * scaleY * (14 - 13.5)
  );
  // line 6
  context.moveTo(
    x + xyDivision * scaleX * 8,
    y - xyDivision * scaleY * (14 - 13.5)
  );
  context.lineTo(
    x + xyDivision * scaleX * 7,
    y - xyDivision * scaleY * (14 - 13.5)
  );
  // line 7
  context.moveTo(
    x + xyDivision * scaleX * 7,
    y - xyDivision * scaleY * (14 - 13.5)
  );
  context.lineTo(
    x + xyDivision * scaleX * 7,
    y - xyDivision * scaleY * (14 - 13)
  );
  // line 8
  context.moveTo(
    x + xyDivision * scaleX * 7,
    y - xyDivision * scaleY * (14 - 13)
  );
  context.lineTo(
    x + xyDivision * scaleX * 6,
    y - xyDivision * scaleY * (14 - 13)
  );
  // line 9
  context.moveTo(
    x + xyDivision * scaleX * 6,
    y - xyDivision * scaleY * (14 - 13)
  );
  context.lineTo(
    x + xyDivision * scaleX * 6,
    y - xyDivision * scaleY * (14 - 9)
  );
  // line 10
  context.moveTo(
    x + xyDivision * scaleX * 6,
    y - xyDivision * scaleY * (14 - 9)
  );
  context.lineTo(
    x + xyDivision * scaleX * 3,
    y - xyDivision * scaleY * (14 - 7)
  );
  // line 11
  context.moveTo(
    x + xyDivision * scaleX * 3,
    y - xyDivision * scaleY * (14 - 7)
  );
  context.lineTo(x + xyDivision * scaleX, y - xyDivision * scaleY * 7);
  context.stroke(); // end single line

  // draw circle
  if (scaleX == scaleY) {
    let radius = xyDivision * Math.abs(scaleX);
    context.beginPath();

    context.arc(
      x + xyDivision * 4 * scaleX, // x start
      y - xyDivision * 10 * scaleY, // y start
      radius, // radius
      0, // 0pi
      2 * Math.PI // 2pi
    );

    context.strokeStyle = "black";

    context.stroke();
  } else {
    context.beginPath();
    context.ellipse(
      x + xyDivision * 4 * scaleX,
      y - xyDivision * 10 * scaleY,
      Math.abs(scaleX) * xyDivision,
      Math.abs(scaleY) * xyDivision,
      0,
      0,
      2 * Math.PI
    );
    context.strokeStyle = "black";

    context.stroke();
  }
}

const resetClick = () => {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  drawGrid();
  drawAxes();
  //   context.save();

  context.beginPath();

  drawFigure(xCenter, yCenter); // canvasWidth -
  context.stroke();
  //   context.restore();
};

ref.resetBtn.addEventListener("click", resetClick);
