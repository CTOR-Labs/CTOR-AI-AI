// 02_centerBot.js
// Strategy: prefer moves whose target cell is closest to the center (5,5).

function bot(board, player) {
  const moves = game.getLegalMoves(player);
  if (moves.length === 0) return null;

  const centerI = 5;
  const centerJ = 5;

  let best = null;
  let bestDist = Infinity;

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

    const d = Math.abs(ti - centerI) + Math.abs(tj - centerJ);
    if (d < bestDist) {
      bestDist = d;
      best = m;
    }
  }

  // Fallback: if something went wrong, just return the first move
  return best || moves[0];
}
