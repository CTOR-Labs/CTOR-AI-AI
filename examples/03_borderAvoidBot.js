function bot(board, player) {
  const moves = [];
  for (let i = 1; i < 9; i++)
    for (let j = 1; j < 9; j++)
      if (board[i][j] === ".")
        moves.push({ type: "put", i, j });

  if (moves.length === 0) return null;
  return moves[Math.floor(Math.random() * moves.length)];
}
