let numberOfSquares = 16;
// Button on top
const button = document.createElement('button');
button.textContent = 'Change number of squares';
document.body.appendChild(button);

// Grid container
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

// Create a 16x16 grid
createSquares(container, numberOfSquares);

button.addEventListener('click', () => {
  numberOfSquares = Number(prompt('Change total number of squares 0 - 100'));
  if (numberOfSquares > 100) {
    return alert('Max number of squares is 100.');
  } else if (numberOfSquares < 0) {
    return alert('Number of squares has to be greater than zero.');
  }

  removeSquares();
  createSquares(container, numberOfSquares);
});

function removeSquares() {
  // Selects squares and removes them
  const squares = document.body.querySelectorAll('.square');
  if (squares) {
    squares.forEach((square) => {
      container.removeChild(square);
    });
  }
}

function getRandomRGB() {
  // Gets random number 0 - 255
  const getRandomNumber = () => Math.floor(Math.random() * 255);

  // Get random color values
  const red = getRandomNumber();
  const green = getRandomNumber();
  const blue = getRandomNumber();

  // Returns css value e.g. rgb(0, 23, 255)
  return `rgb(${red}, ${green}, ${blue})`;
}

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

  // Select all squares
  const squares = document.querySelectorAll('.square');
  // Attach an event listener to each square
  squares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
      const element = e.currentTarget;
      // Sets background to random RBG values
      element.style.backgroundColor = getRandomRGB();
    });
  });
}
