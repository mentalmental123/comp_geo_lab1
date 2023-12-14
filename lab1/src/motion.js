import { context } from "./refs.js";

import {
  xyDivision,
  xCenter,
  yCenter,
  canvasHeight,
  canvasWidth,
} from "./defaultVal.js";

import { drawAxes, drawFigure, drawGrid } from "./drawC.js";

const getMotionVal = (evt) => {
  evt.preventDefault();
  const form = evt.target;
  const xMotionVal = form.elements.motionX.value;
  const yMotionVal = form.elements.motionY.value;
  if (!xMotionVal && !YMotionVal) {
    alert("Enter a value!");
    return;
  }
  const xMotion = xCenter + xyDivision * xMotionVal;
  const yMotion = yCenter - xyDivision * yMotionVal;
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  drawGrid();
  drawAxes();
  //   context.save();

  context.beginPath();

  drawFigure(xMotion, yMotion); // canvasWidth -
  context.stroke();
  //   context.restore();
};

export { getMotionVal };
