let players = ['x', 'o'];
let activePlayer = 0;
let board = [];


function startGame() {
  board = [["", "", ""], ["", "", ""], ["", "", ""]];
  activePlayer = 0;
  renderBoard(board);
};

function click(row, col) {
  board[row][col] = players[activePlayer];
  renderBoard(board);

  for (let i = 0; i < board.length; i++) {
    if (board[i][0] === players[activePlayer] && board[i][1] === players[activePlayer] && board[i][2] === players[activePlayer]) {
      showWinner(activePlayer);
    };
    if (board[0][i] === players[activePlayer] && board[1][i] === players[activePlayer] && board[2][i] === players[activePlayer]) {
      showWinner(activePlayer);
    };

    if (board[0][0] === players[activePlayer] && board[1][1] === players[activePlayer] && board[2][2] === players[activePlayer]) {
      showWinner(activePlayer);

    };
    if (board[2][0] === players[activePlayer] && board[1][1] === players[activePlayer] && board[0][2] === players[activePlayer]) {
      showWinner(activePlayer);
    };
  };

  if (activePlayer === 1) {
    activePlayer = 0;
  } else {
    activePlayer = 1;
  };
};