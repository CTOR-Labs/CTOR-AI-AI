NEW examples/README.md (Markdown, English, GitHub‑ready)
markdown
# CTOR Browser Edition — Example Bots

This folder contains reference bots for the **CTOR Browser Edition** platform.  
These examples demonstrate different heuristic ideas and serve as learning tools for students.

All bots in this folder follow the CTOR Browser Edition Bot API:

```js
function bot(board, player) { ... }
No imports, no exports, no modules — each bot is a standalone .js file.

📁 Included Example Bots
File	Description
01_randomBot.js	Pure random placement
02_centerBot.js	Prefers central positions
03_borderAvoidBot.js	Avoids edges of the board
04_aggressiveBot.js	Plays next to enemy pieces
05_defensiveBot.js	Avoids dangerous positions
📁 Templates
File	Purpose
myBot_template.js	Starter template for manually written bots
LLM_bot_prompt_template.js	Prompt template for generating bots using AI (LLM)
Students may freely modify these templates or use them as inspiration.

🧠 Algorithm Explanations for Example Bots
Below is a short explanation of the strategy behind each example bot.

01_randomBot.js — Pure Random Strategy
Idea
Select a random empty cell and place a piece there.

Algorithm
Scan the board for all empty cells ".".

Collect them into a list.

Choose one at random.

Strengths
Extremely simple

Useful as a baseline for testing

Weaknesses
No strategy

Easily defeated by any heuristic bot

02_centerBot.js — Center‑Seeking Strategy
Idea
Prefer positions closer to the center of the board (5,5).

Algorithm
For each empty cell, compute Manhattan distance to the center.

Choose the cell with the smallest distance.

Strengths
Central control is often advantageous

More stable than random play

Weaknesses
Predictable

Ignores opponent positions

03_borderAvoidBot.js — Edge‑Avoidance Strategy
Idea
Avoid placing pieces near the edges of the board.

Algorithm
Consider only empty cells with 1 ≤ i ≤ 8 and 1 ≤ j ≤ 8.

Choose randomly among these “safe” cells.

Strengths
Avoids vulnerable edge positions

Good for learning positional safety

Weaknesses
Ignores opponent

Ignores center control

04_aggressiveBot.js — Enemy‑Proximity Strategy
Idea
Place pieces next to enemy pieces to apply pressure.

Algorithm
For each empty cell, count orthogonally adjacent enemy pieces.

Choose the cell with the highest adjacency score.

Strengths
Encourages tactical, aggressive play

Can trigger auto‑eat situations

Weaknesses
Sometimes overextends

Can move into dangerous clusters

05_defensiveBot.js — Danger‑Avoidance Strategy
Idea
Avoid positions where many enemy pieces are nearby.

Algorithm
For each empty cell, count enemy pieces in the 3×3 neighborhood.

Choose the cell with the lowest danger score.

Strengths
Very stable defensive play

Harder to surround or auto‑eat

Weaknesses
Passive

Does not pressure the opponent

📄 Templates
myBot_template.js — Starter Template for Students
A clean, minimal template for writing a bot manually.

Contains:

the required function structure

an example of a legal move

comments showing where to insert logic

LLM_bot_prompt_template.js — Prompt Template for AI‑Generated Bots
A ready‑to‑use prompt for ChatGPT, Copilot, Claude, etc.

Contains:

exact CTOR Bot API requirements

strict formatting rules

instructions to return only JavaScript code

guidance for generating a valid bot using an LLM
