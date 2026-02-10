function bot(board, player) {
  const moves = [];
  for (let i = 0; i < 10; i++)
    for (let j = 0; j < 10; j++)
      if (board[i][j] === ".")
        moves.push({ type: "put", i, j });

  if (moves.length === 0) return null;
  return moves[Math.floor(Math.random() * moves.length)];
}
