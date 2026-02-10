// 05_defensiveBot.js
// Strategy: avoid dangerous cells; prefer moves with fewer enemy pieces in the 3×3 neighborhood.

function bot(board, player) {
  const moves = game.getLegalMoves(player);
  if (moves.length === 0) return null;

  const N = board.length;
  const enemy = (player === "R") ? "B" : "R";

  function countEnemyIn3x3(i, j) {
    let c = 0;
    for (let di = -1; di <= 1; di++) {
      for (let dj = -1; dj <= 1; dj++) {
        if (di === 0 && dj === 0) continue;
        const ni = (i + di + N) % N;
        const nj = (j + dj + N) % N;
        if (board[ni][nj] === enemy) c++;
      }
    }
    return c;
  }

  let best = null;
  let bestDanger = Infinity;

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

    const danger = countEnemyIn3x3(ti, tj);

    if (danger < bestDanger) {
      bestDanger = danger;
      best = m;
    }
  }

  return best || moves[0];
}
