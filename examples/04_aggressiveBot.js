function bot(board, player) {
  const enemy = player === "R" ? "B" : "R";
  const moves = [];

  for (let i = 0; i < 10; i++)
    for (let j = 0; j < 10; j++)
      if (board[i][j] === ".") {
        const neigh =
          (board[(i+1)%10][j] === enemy) +
          (board[(i+9)%10][j] === enemy) +
          (board[i][(j+1)%10] === enemy) +
          (board[i][(j+9)%10] === enemy);

        moves.push({ move: { type:"put", i, j }, score: neigh });
      }

  moves.sort((a,b)=>b.score-a.score);
  return moves[0].move;
}
