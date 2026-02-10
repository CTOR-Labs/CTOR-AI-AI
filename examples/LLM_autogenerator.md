CTOR Browser Edition — LLM Bot Autogenerator
A tool for generating new CTOR bots using AI systems (ChatGPT, Copilot, Claude, etc.)
This guide explains how to use Large Language Models (LLMs) to automatically generate new CTOR bots based on your own heuristic ideas.

The LLM Autogenerator is designed to help students:

turn natural‑language strategy descriptions into working JavaScript bots

rapidly prototype new algorithms

explore different heuristics

compare multiple versions of a strategy

learn prompt engineering

understand how AI systems translate ideas into code

🧠 1. How the LLM Autogenerator Works
The autogenerator is a prompt‑based system:

You describe your strategy in natural language.

You paste the official CTOR Bot API prompt (provided below).

You add your strategy description.

The LLM generates a fully functional JavaScript bot.

You download the code as a .js file.

You upload it into CTOR Browser Edition and test it.

This process can be repeated to generate:

variations of the same strategy

improved versions

hybrid strategies

experimental heuristics

🧩 2. The Official LLM Prompt Template
This is the exact prompt you must give to the LLM.

It guarantees that the generated bot will be compatible with CTOR Browser Edition.

📌 Copy & Paste Prompt
Code
Write a JavaScript bot for CTOR Browser Edition.

Requirements:

1. The file must contain exactly one function:
   function bot(board, player) { ... }

2. Do NOT use export, import, or module.exports.

3. The function must return one move:
   { type: "put", i, j }
   or
   { type: "move", from:[i1,j1], to:[i2,j2] }
   or null.

4. board is a 10×10 array of "R", "B", ".".
   player is "R" or "B".

5. Return only JavaScript code with no explanation.

---

Insert my strategy into the bot. Here is the strategy description:
After this line, you add your own strategy.

🧠 3. How to Describe Your Strategy to the LLM
Here are examples of good strategy descriptions:

✔ Simple heuristic
Code
Prefer empty cells adjacent to enemy pieces. 
Avoid cells where enemy count in the 3×3 neighborhood is ≥ 4.
If no aggressive moves exist, play toward the center.
✔ Defensive strategy
Code
Avoid any cell where the enemy has more than 3 pieces in the 3×3 area.
Prefer cells that maximize distance from enemy clusters.
If multiple moves are equal, choose the one closest to the center.
✔ Hybrid strategy
Code
If the enemy has more than 30 pieces, play defensively.
Otherwise, play aggressively by placing next to enemy pieces.
If no good moves exist, choose a random safe cell.
✔ Experimental strategy
Code
Divide the board into four quadrants.
Prefer the quadrant with the fewest enemy pieces.
Inside that quadrant, choose the cell closest to the center of the quadrant.
🛠 4. Example of a Full Prompt
Here is what a complete prompt looks like:

Code
Write a JavaScript bot for CTOR Browser Edition.

Requirements:

1. The file must contain exactly one function:
   function bot(board, player) { ... }

2. Do NOT use export, import, or module.exports.

3. The function must return one move:
   { type: "put", i, j }
   or
   { type: "move", from:[i1,j1], to:[i2,j2] }
   or null.

4. board is a 10×10 array of "R", "B", ".".
   player is "R" or "B".

5. Return only JavaScript code with no explanation.

---

Insert my strategy into the bot. Here is the strategy description:

Prefer empty cells adjacent to enemy pieces. 
Avoid cells where enemy count in the 3×3 neighborhood is ≥ 4.
If no aggressive moves exist, play toward the center.
Paste this into ChatGPT / Copilot / Claude → get a working bot.

🧪 5. Testing Your Generated Bot
Save the generated code as a .js file.

Open index.html in your browser.

Click Choose File → select your bot.

Click Upload Bot.

Select your bot as Player R or Player B.

Run a match.

Test against:

random

greedy

other students’ bots
