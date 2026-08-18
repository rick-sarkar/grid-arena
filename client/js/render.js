/*
* drawing to canvas
*/

// Rendering: how things LOOK. Reads game state, draws it.
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x * CELL, player.y * CELL, CELL, CELL);
}

function drawTrail() {
  ctx.fillStyle = "darkgreen";

  for (const cell of trail) {
    ctx.fillRect(cell.x * CELL, cell.y * CELL, CELL, CELL);
  }
}
