import { context } from "./refs.js";

import {
  xyDivision,
  xCenter,
  yCenter,
  canvasHeight,
  canvasWidth,
} from "./defaultVal.js";

import { drawAxes, drawFigure, drawGrid } from "./drawC.js";

const getScaleVal = (evt) => {
  evt.preventDefault();
  const form = evt.target;
  const xScaleVal = form.elements.scaleX.value;
  const yScaleVal = form.elements.scaleY.value;
  if (!xScaleVal && !yScaleVal) {
    alert("Enter a value!");
    return;
  }

  context.clearRect(0, 0, canvasWidth, canvasHeight); //очизення канвасу
  drawGrid();
  drawAxes();
  context.save();

  context.beginPath();

  drawFigure(xCenter, yCenter, xScaleVal || 1, yScaleVal || 1);
  context.stroke();
  context.restore();
};

export { getScaleVal };
