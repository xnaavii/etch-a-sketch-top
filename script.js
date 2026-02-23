// Grid container
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const numberOfSquares = 16 * 16;
// Create a 16x16 grid
createSquares(container, numberOfSquares);

function createSquares(container, numOfSquares) {
  if (numOfSquares === 0) {
    console.log('Number of squares must be greater than zero.');
    return;
  }

  for (let i = 0; i < numOfSquares; i++) {
    // Create a square
    const square = document.createElement('div');
    // Add a square to the container
    container.append(square);
    // Add style to square
    square.classList.add('square');
  }
}
