export const ref = {
  canvas: document.getElementById("coordinateCanvas"),
  rotationForm: document.querySelector(".rotation"),
  motionAxis: document.querySelector(".motion"),
  scale: document.querySelector(".scale"),
  resetBtn: document.querySelector(".reset-button"),
  symmetry: document.querySelector(".symm"),
  affine: document.querySelector(".affine"),
};

export const context = ref.canvas.getContext("2d");
