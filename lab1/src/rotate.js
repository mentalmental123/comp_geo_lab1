import { context } from "./refs.js";

import {
  xyDivision,
  xCenter,
  yCenter,
  canvasHeight,
  canvasWidth,
} from "./defaultVal.js";

import { drawAxes, drawFigure, drawGrid } from "./drawC.js";
const getRotationVal = (evt) => {
  evt.preventDefault();
  const form = evt.target;
  const rotateValue = form.elements.rotate.value;
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  drawGrid();
  drawAxes();
  context.save();

  let xPoint = xyDivision * 4;
  let yPoiont = xyDivision * -8;

  const x = xCenter + xPoint; // Нові координати центру фігури
  const y = yCenter + yPoiont;

  context.translate(x, y);
  context.rotate((rotateValue * Math.PI) / 180);
  context.beginPath();

  drawFigure(-xPoint, Math.abs(yPoiont)); // canvasWidth -
  context.stroke();
  context.restore();
};

export { getRotationVal };
