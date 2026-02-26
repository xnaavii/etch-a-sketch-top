// Grid container
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const numberOfSquares = 16;
// Create a 16x16 grid
createSquares(container, numberOfSquares);

// Select all squares
const squares = document.querySelectorAll('.square');

// Attach an event listener to each square
// TODO: Change their background color randomly
squares.forEach((square) => {
  square.addEventListener('mouseover', (e) => {
    console.log(e);
  });
});

function createSquares(container, numOfSquares = 16) {
  if (numOfSquares === 0) {
    console.log('Number of squares must be greater than zero.');
    return;
  }

  const totalSquares = numOfSquares * numOfSquares;
  // Changes Flex's item flex-basis
  // flex-basis calc(100% / var(--num-of-squares))
  // Sets --num-of-squares to numOfSquares and recalculates
  document.documentElement.style.setProperty(
    '--num-of-squares',
    `${numOfSquares}`,
  );

  for (let i = 0; i < totalSquares; i++) {
    // Create a square
    const square = document.createElement('div');
    // Add a square to the container
    container.append(square);
    // Add style to square
    square.classList.add('square');
  }
}
