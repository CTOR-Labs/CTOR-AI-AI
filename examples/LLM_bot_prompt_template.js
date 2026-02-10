// LLM_bot_prompt_template.js
// Use this prompt with ChatGPT, Copilot, Claude, or any LLM
// to generate a valid CTOR bot for the Browser Edition.

const prompt = `
You are generating a CTOR GAME bot for the CTOR Browser Edition.

The bot must implement:
function bot(board, player) { ... }

API Rules:
- board is a 10×10 array containing "R", "B", or "."
- player is "R" or "B"
- You MUST call: const moves = game.getLegalMoves(player)
- You MUST return exactly ONE move from this list
- If moves.length === 0 → return null
- A move is always one of:
    { type: "put", i, j }
    { type: "move", from:[i,j], to:[i2,j2] }
- Do NOT modify the board directly
- Do NOT generate multiple moves
- Do NOT perform more than one operation per turn
- Do NOT invent moves — only use moves from getLegalMoves

Your task:
Implement the heuristic described below:

[INSERT STUDENT STRATEGY HERE]

Return ONLY the final JavaScript code.
`;

console.log(prompt);
