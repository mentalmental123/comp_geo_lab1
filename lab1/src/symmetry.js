import { context } from "./refs.js";

import {
  xyDivision,
  xCenter,
  yCenter,
  canvasHeight,
  canvasWidth,
} from "./defaultVal.js";

import { drawAxes, drawFigure, drawGrid } from "./drawC.js";

const getSymmVal = (evt) => {
  evt.preventDefault();
  const form = evt.target;
  const isXsymm = +form.elements.symmX.checked;
  const isYsymm = +form.elements.symmY.checked;

  if (!isXsymm && !isYsymm) {
    alert("Choose at least one option!");
    return;
  }

  context.clearRect(0, 0, canvasWidth, canvasHeight); //очизення канвасу
  drawGrid();
  drawAxes();
  context.save();

  context.beginPath();

  drawFigure(xCenter, yCenter, -isXsymm || 1, -isYsymm || 1);
  context.stroke();
  context.restore();
};

export { getSymmVal };
