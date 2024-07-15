const cells = document.querySelectorAll('.cell');
const winnerDisplay = document.getElementById('winner');
const newGameButton = document.getElementById('new-game');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let board = Array(9).fill(null);
let gameActive = true;

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

newGameButton.addEventListener('click', newGame);
resetButton.addEventListener('click', resetGame);

function handleClick(event) {
    const index = event.target.getAttribute('data-index');

    if (board[index] !== null || !gameActive) {
        return;
    }

    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;

    if (checkWin()) {
        winnerDisplay.textContent = `${currentPlayer} wins!`;
        gameActive = false;
        return;
    }

    if (board.every(cell => cell !== null)) {
        winnerDisplay.textContent = "It's a draw!";
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
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

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] !== null && board[a] === board[b] && board[a] === board[c];
    });
}

function newGame() {
    board.fill(null);
    cells.forEach(cell => cell.textContent = '');
    winnerDisplay.textContent = '';
    currentPlayer = 'X';
    gameActive = true;
}

function resetGame() {
    board.fill(null);
    cells.forEach(cell => cell.textContent = '');
    winnerDisplay.textContent = '';
    currentPlayer = 'X';
    gameActive = true;
}
