export function getCanvasContext(canvas) {
  if (canvas) {
    return canvas.getContext("2d");
  }
  return null
}

export function getCanvas() {

  return document.getElementById("shapeCanvas");
}
