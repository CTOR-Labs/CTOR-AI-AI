/*
  CTOR Browser Edition — Student Bot Template

  Instructions:
  - Rename this file according to assignment rules.
  - Implement your strategy inside the bot() function.
  - Do NOT use export/import.
  - Always return a legal CTOR move.
*/

function bot(board, player) {
  // TODO: implement your strategy here

  // Example: choose the first empty cell
  for (let i = 0; i < 10; i++)
    for (let j = 0; j < 10; j++)
      if (board[i][j] === ".")
        return { type: "put", i, j };

  return null;
}
