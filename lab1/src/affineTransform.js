import { context } from "./refs.js";

import {
  xyDivision,
  xCenter,
  yCenter,
  canvasHeight,
  canvasWidth,
} from "./defaultVal.js";

import { drawAxes, drawFigure, drawGrid } from "./drawC.js";
const getAffineTrVal = (evt) => {
  evt.preventDefault();
  const form = evt.target;
  const Xx = form.elements.Xx.value;
  const Xy = form.elements.Xy.value;
  const Yx = form.elements.Yx.value;
  const Yy = form.elements.Yy.value;
  const Ox = form.elements.Ox.value;
  const Oy = form.elements.Oy.value;
  console.log(Xx);
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  context.save();

  context.setTransform(
    Xx,
    Xy / xyDivision,
    Yx / xyDivision,
    Yy,
    Ox * xyDivision,
    Oy * -xyDivision
  );
  drawGrid();
  drawAxes();

  context.beginPath();

  drawFigure(xCenter, yCenter);
  context.stroke();
  context.restore();
};

export { getAffineTrVal };
