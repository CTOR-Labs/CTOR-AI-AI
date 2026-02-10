function bot(board, player) {
  // Получаем легальные ходы с учётом лимитов
  const moves = game.getLegalMoves(player);
  if (moves.length === 0) return null;

  let best = null;
  let bestDist = Infinity;

  for (const m of moves) {
    if (m.type === "put") {
      const d = Math.abs(m.i - 5) + Math.abs(m.j - 5);
      if (d < bestDist) {
        bestDist = d;
        best = m;
      }
    }
  }

  return best;
}
