function bot(board, player) {
  let best = null;
  let bestScore = Infinity;

  for (let i = 0; i < 10; i++)
    for (let j = 0; j < 10; j++)
      if (board[i][j] === ".") {
        let danger = 0;
        for (let di=-1; di<=1; di++)
          for (let dj=-1; dj<=1; dj++)
            if (!(di===0 && dj===0)) {
              const ni = (i+di+10)%10;
              const nj = (j+dj+10)%10;
              if (board[ni][nj] !== "." && board[ni][nj] !== player)
                danger++;
            }

        if (danger < bestScore) {
          bestScore = danger;
          best = { type:"put", i, j };
        }
      }

  return best;
}
