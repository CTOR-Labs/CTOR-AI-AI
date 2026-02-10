// 04_aggressiveBot.js
// Strategy: prefer moves whose target cell is adjacent (orthogonally) to enemy pieces.

function bot(board, player) {
  const moves = game.getLegalMoves(player);
  if (moves.length === 0) return null;

  const N = board.length;
  const enemy = (player === "R") ? "B" : "R";

  function countEnemyOrthNeighbors(i, j) {
    let c = 0;
    const up    = (i - 1 + N) % N;
    const down  = (i + 1) % N;
    const left  = (j - 1 + N) % N;
    const right = (j + 1) % N;

    if (board[up][j] === enemy) c++;
    if (board[down][j] === enemy) c++;
    if (board[i][left] === enemy) c++;
    if (board[i][right] === enemy) c++;
    return c;
  }

  let best = null;
  let bestScore = -Infinity;

  for (const m of moves) {
    let ti, tj;

    if (m.type === "put") {
      ti = m.i;
      tj = m.j;
    } else if (m.type === "move") {
      [ti, tj] = m.to;
    } else {
      continue;
    }

    const score = countEnemyOrthNeighbors(ti, tj);

    if (score > bestScore) {
      bestScore = score;
      best = m;
    }
  }

  return best || moves[0];
}

