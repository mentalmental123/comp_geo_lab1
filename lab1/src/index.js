import { ref, context } from "./refs.js";
import { getRotationVal } from "./rotate.js";
import { getMotionVal } from "./motion.js";
import { getScaleVal } from "./scale.js";
import { getSymmVal } from "./symmetry.js";
import { getAffineTrVal } from "./affineTransform.js";
import {
  canvasHeight,
  canvasWidth,
  unitsX,
  unitsY,
  xCenter,
  yCenter,
  xyDivision,
} from "./defaultVal.js";
import { drawAxes, drawFigure, drawGrid } from "./drawC.js";

console.log(ref);

// Отримати контекст малювання

ref.rotationForm.addEventListener("submit", getRotationVal);
ref.motionAxis.addEventListener("submit", getMotionVal);
ref.scale.addEventListener("submit", getScaleVal);
ref.symmetry.addEventListener("submit", getSymmVal);
ref.affine.addEventListener("submit", getAffineTrVal);

// Малюємо координатну сітку

// Викликаємо функції для малювання сітки та вісей
drawGrid();
drawAxes();

// Викликаємо функцію для малювання фігури
drawFigure(canvasWidth / 2, canvasHeight / 2);
