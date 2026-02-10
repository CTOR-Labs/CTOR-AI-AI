
---

# ✅ 2. New `myBot_template.js` 

File ready to use

```js
// myBot_template.js
// Starter template for writing a CTOR bot manually.
// This template supports the full CTOR turn model:
// - up to 2 PUT operations
// - up to 2 MOVE operations
// - autoEat after each operation
// - automatic turn termination by the engine

function bot(board, player) {
  // Get all legal moves for this turn
  const moves = game.getLegalMoves(player);

  // If no moves are available — pass
  if (moves.length === 0) return null;

  // ---------------------------------------------------------
  // INSERT YOUR STRATEGY HERE
  //
  // Example: choose the first legal move
  // Replace this with your own heuristic logic.
  // ---------------------------------------------------------

  return moves[0];
}
