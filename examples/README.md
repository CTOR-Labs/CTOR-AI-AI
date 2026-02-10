# CTOR Browser Edition — Example Bots

This folder contains reference bots for the CTOR Browser Edition platform.

## Included Bots

| File | Description |
|------|-------------|
| 01_randomBot.js | Pure random placement |
| 02_centerBot.js | Prefers central positions |
| 03_borderAvoidBot.js | Avoids edges of the board |
| 04_aggressiveBot.js | Plays next to enemy pieces |
| 05_defensiveBot.js | Avoids dangerous positions |

## Templates

| File | Purpose |
|------|---------|
| myBot_template.js | Starting point for student‑written bots |
| LLM_bot_prompt_template.js | Prompt template for generating bots with AI |

All bots follow the CTOR Browser Edition API:

function bot(board, player) { ... }

Code

No exports, no imports, no modules.

Students may freely modify these bots or use them as inspiration for their own strategi

Example Bots — Algorithm Explanations
This folder contains several reference bots for CTOR Browser Edition.
Each bot demonstrates a different heuristic idea and can be used as a learning tool for students.


Below is a detailed explanation of the algorithm behind each example bot.

1. 01_randomBot.js — Pure Random Strategy
Idea
This bot selects a random empty cell and places a piece there.

Algorithm
Scan the board for all empty cells (".").

Collect them into a list.

Choose one at random.

Strengths
Extremely simple.

Useful as a baseline for testing.

Weaknesses
No strategy.

Easily defeated by any heuristic bot.

2. 02_centerBot.js — Center‑Seeking Strategy
Idea
The bot prefers positions closer to the center of the board (5,5).

Algorithm
For each empty cell, compute Manhattan distance to the center.

Choose the cell with the smallest distance.

Strengths
Central control is often advantageous in toroidal games.

More stable than random play.

Weaknesses
Predictable.

Ignores opponent positions.

3. 03_borderAvoidBot.js — Edge‑Avoidance Strategy
Idea
The bot avoids placing pieces near the edges of the board.

Algorithm
Only consider empty cells with coordinates 1 ≤ i ≤ 8 and 1 ≤ j ≤ 8.

Choose randomly among these “safe” cells.

Strengths
Avoids positions that are more vulnerable to being surrounded.

Good for beginners to understand positional safety.

Weaknesses
Ignores the opponent.

Ignores the center.

4. 04_aggressiveBot.js — Enemy‑Proximity Strategy
Idea
The bot tries to place pieces next to enemy pieces to apply pressure.

Algorithm
For each empty cell, count how many enemy pieces are adjacent orthogonally.

Choose the cell with the highest enemy adjacency score.

Strengths
Good for aggressive, tactical play.

Can trigger auto‑eat situations.

Weaknesses
Sometimes overextends.

Can place pieces into dangerous clusters.

5. 05_defensiveBot.js — Danger‑Avoidance Strategy
Idea
The bot avoids positions where many enemy pieces are nearby.

Algorithm
For each empty cell, count enemy pieces in the 3×3 neighborhood.

Choose the cell with the lowest danger score.

Strengths
Very stable defensive play.

Harder to surround or auto‑eat.

Weaknesses
Passive.

Does not pressure the opponent.

6. myBot_template.js — Student Starter Template
Purpose
A clean, minimal template for students to implement their own strategy.

Contains
Basic structure of a CTOR bot.

Example of a legal move.

Comments explaining where to insert logic.

7. LLM_bot_prompt_template.js — Prompt Template for AI‑Generated Bots
Purpose
A ready‑to‑use prompt for ChatGPT, Copilot, Claude, etc.

Contains
Exact API requirements.

Strict formatting rules.

Instructions to return only JavaScript code.
