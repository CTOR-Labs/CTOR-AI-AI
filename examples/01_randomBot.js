// 01_randomBot.js
// Strategy: choose a completely random legal move.

function bot(board, player) {
  const moves = game.getLegalMoves(player);
  if (moves.length === 0) return null;

  const idx = Math.floor(Math.random() * moves.length);
  return moves[idx];
}
