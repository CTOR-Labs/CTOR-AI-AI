// 03_borderAvoidBot.js
// Strategy: avoid edges; prefer moves whose target cell is not on the border.

function bot(board, player) {
  const moves = game.getLegalMoves(player);
  if (moves.length === 0) return null;

  const safeMoves = [];
  const borderMoves = [];

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

    // Board indices: 0..9, "inner" region: 1..8
    const isInner = (ti >= 1 && ti <= 8 && tj >= 1 && tj <= 8);

    if (isInner) {
      safeMoves.push(m);
    } else {
      borderMoves.push(m);
    }
  }

  if (safeMoves.length > 0) {
    const idx = Math.floor(Math.random() * safeMoves.length);
    return safeMoves[idx];
  }

  // If no inner moves exist, fall back to any legal move
  const idx = Math.floor(Math.random() * moves.length);
  return moves[idx];
}
