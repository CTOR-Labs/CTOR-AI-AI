CTOR GAME — Student Assignment Guide
Short Edition (2–3 pages) — Updated for CTOR AI-AI PC Edition
📘 Overview of Required Tasks
Each student must complete all three mandatory assignments:

Task	Description	Deliverables
1	Download and test the CTOR GAME platform locally	Bug report (if bugs found)
2	Create an AI‑generated bot using an LLM	Bot file + prompt
3	Implement your own JavaScript bot manually	Bot file + short description
🧩 Task 1 — Download and Test the Platform
✔ What You Must Do
Visit the CTOR GAME GitHub repository.

Download the platform (entire repo or just index.html).

Run it locally by opening index.html in any modern browser.

Test the following:

built‑in bots (random, greedy)

uploading example bots

board rendering and controls

match runner (Start, Next Move, Auto, Stop)

correct turn switching and game termination

✔ If You Find Bugs
Prepare a bug report including:

clear description of the issue

steps to reproduce

screenshots (optional)

browser + OS

any console error messages

If no bugs are found, submit:

“No bugs detected during testing.”

🤖 Task 2 — Create an AI‑Generated Bot (LLM Bot)
In this task, you will:

Design your own heuristic strategy for CTOR.

Describe it as a prompt for an AI model (ChatGPT, Copilot, Claude, etc.).

Use the model to generate a JavaScript bot.

Test the bot in the CTOR Browser Edition.

✔ Requirements for AI‑Generated Bots
Your bot must implement:

js
function bot(board, player) { ... }
And must follow the CTOR Bot API:

use game.getLegalMoves(player)

return exactly one legal move

return null if no moves are available

do not modify the board directly

do not perform multiple operations per turn

do not generate arrays of moves

✔ File Naming Format
Code
LastName_FirstName_AlgorithmName_Version_AI.js
Example:

Code
Ivanov_Petr_GreedyHeuristic_v1_AI.js
✔ What to Submit
the AI‑generated bot file

the exact prompt used to generate it

📌 Recommended Prompt Template for LLM Bots
Students may use the following template:

Code
You are generating a CTOR GAME bot for the CTOR Browser Edition.

The bot must implement:
function bot(board, player) { ... }

Rules:
- board is a 10×10 array containing "R", "B", or "."
- player is "R" or "B"
- You must call: const moves = game.getLegalMoves(player)
- If moves.length === 0 → return null
- Return exactly ONE move object from the list
- A move is either:
  { type: "put", i, j }
  or
  { type: "move", from:[i,j], to:[i2,j2] }
- Do NOT modify the board directly
- Do NOT generate multiple moves
- Do NOT perform more than one operation per turn

Your task:
Implement the heuristic described below:

[STUDENT INSERTS THEIR STRATEGY HERE]

Return only the final JavaScript code.
🛠 Task 3 — Implement Your Own Bot Manually (JavaScript Bot)
In this task, you must:

write your own bot manually in JavaScript

implement a heuristic or algorithmic strategy

follow the CTOR Bot API

test your bot locally

✔ Requirements for Manual Bots
Your bot must:

implement function bot(board, player)

use game.getLegalMoves(player)

return null if no moves are available

return exactly one legal move

not modify the board

not perform multiple operations per turn

✔ File Naming Format
Code
LastName_FirstName_AlgorithmName_Version_P.js
Example:

Code
Ivanov_Petr_BlockingStrategy_v2_P.js
✔ What to Submit
the manually written bot file

a short description of your algorithm (3–10 sentences)

📌 JavaScript Bot Template (Correct & Fully Compatible)
Students should use this template:

js
function bot(board, player) {
  // Get legal moves (respects CTOR turn limits)
  const moves = game.getLegalMoves(player);

  // If no moves available — pass
  if (moves.length === 0) return null;

  // Example strategy: choose the first legal move
  // (students replace this with their own logic)
  return moves[0];
}
This template ensures:

correct turn behavior

no infinite move loops

compatibility with the CTOR Browser Edition

📤 Submission Checklist
Each student must submit:

✔ Task 1
bug report (if applicable)

✔ Task 2
AI‑generated bot file

the prompt used to generate it

✔ Task 3
manually written bot file

short algorithm description

After review, selected bots may be added to the official CTOR GAME repository.

🧠 Tips for Success
Test your bots against built‑in and example bots.

Start with simple heuristics and refine them.

Ensure your bot always returns a legal move.

Use the templates provided in this guide.

Keep your code clean and readable.

Document your strategy clearly.
