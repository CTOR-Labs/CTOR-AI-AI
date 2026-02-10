function bot(board, player) {
  let best = null;
  let bestDist = Infinity;

  for (let i = 0; i < 10; i++)
    for (let j = 0; j < 10; j++)
      if (board[i][j] === ".") {
        const d = Math.abs(i - 5) + Math.abs(j - 5);
        if (d < bestDist) {
          bestDist = d;
          best = { type: "put", i, j };
        }
      }

  return best;
}
