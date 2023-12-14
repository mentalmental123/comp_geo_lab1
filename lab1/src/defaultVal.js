import { ref } from "./refs.js";
const canvasWidth = ref.canvas.width;
const canvasHeight = ref.canvas.height;

// Одиниці на вісі X та Y
const unitsX = 30;
const unitsY = 30;

let xCenter = canvasWidth / 2; // центральні координати
let yCenter = canvasHeight / 2;
let xyDivision = canvasWidth / 30; // ціна поділки на графіку
// реф об'єкт

export {
  canvasHeight,
  canvasWidth,
  unitsX,
  unitsY,
  xCenter,
  yCenter,
  xyDivision,
};
