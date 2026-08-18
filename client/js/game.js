/*
* game state and rules (grid, players, collisions)
*/

// Game state: where things ARE. No drawing in this file, ever.
const GRID_SIZE = 30;              // 30x30 cells
const CELL = 600 / GRID_SIZE;      // pixel size of one cell

const player = {
  x: 15,          // grid column
  y: 15,          // grid row
  color: "lime"
};

const trail = [
  { x: 12, y: 15 },
  { x: 13, y: 15 },
  { x: 14, y: 15 }
];
