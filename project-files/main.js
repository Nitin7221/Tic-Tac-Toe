// Select all cells with the class 'cell'
const cells = document.querySelectorAll('.cell');

// Select the element that displays the winner message
const winnerDisplay = document.getElementById('winner');

// Select the New Game button
const newGameButton = document.getElementById('new-game');

// Select the Reset button
const resetButton = document.getElementById('reset');

// Initialize the current player to 'X'
let currentPlayer = 'X';

// Initialize the game board as an array with 9 null values
let board = Array(9).fill(null);

// Set a flag to keep track of whether the game is active
let gameActive = true;

// Add a click event listener to each cell
cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

// Add a click event listener to the New Game button
newGameButton.addEventListener('click', newGame);

// Add a click event listener to the Reset button
resetButton.addEventListener('click', resetGame);

// Function to handle cell click events
function handleClick(event) {
    // Get the index of the clicked cell from its data attribute
    const index = event.target.getAttribute('data-index');

    // If the cell is already occupied or the game is not active, return early
    if (board[index] !== null || !gameActive) {
        return;
    }

    // Update the board array with the current player's mark
    board[index] = currentPlayer;

    // Update the cell's text content with the current player's mark
    event.target.textContent = currentPlayer;

    // Check if the current move has resulted in a win
    if (checkWin()) {
        // Display the winning message
        winnerDisplay.textContent = `${currentPlayer} wins!`;

        // Set the game to inactive
        gameActive = false;
        return;
    }

    // Check if the board is full (indicating a draw)
    if (board.every(cell => cell !== null)) {
        // Display the draw message
        winnerDisplay.textContent = "It's a draw!";
        return;
    }

    // Switch the current player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Function to check if the current player has won
function checkWin() {
    // Define the winning patterns
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Check if any of the winning patterns match the current board state
    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] !== null && board[a] === board[b] && board[a] === board[c];
    });
}

// Function to start a new game
function newGame() {
    // Reset the board array to all null values
    board.fill(null);

    // Clear the text content of each cell
    cells.forEach(cell => cell.textContent = '');

    // Clear the winner display message
    winnerDisplay.textContent = '';

    // Set the current player back to 'X'
    currentPlayer = 'X';

    // Set the game to active
    gameActive = true;
}

// Function to reset the game (same as new game in this case)
function resetGame() {
    // Reset the board array to all null values
    board.fill(null);

    // Clear the text content of each cell
    cells.forEach(cell => cell.textContent = '');

    // Clear the winner display message
    winnerDisplay.textContent = '';

    // Set the current player back to 'X'
    currentPlayer = 'X';

    // Set the game to active
    gameActive = true;
}
