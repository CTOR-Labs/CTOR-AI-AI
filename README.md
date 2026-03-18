<div align="center">📘 CTOR AI-AI PC Edition</div>
<div align="center">An Educational & Research Platform for AI Bot Development in the Abstract Game CTOR</div>
<div align="center">
CTOR is a unique abstract strategy game played on a toroidal board.
This browser‑based edition provides a practical environment for teaching AI, algorithms, heuristics, Monte‑Carlo methods, and neural strategies.
Perplexity/Copilot  
</div>

---

📑 **Table of Contents**

🌟 About the Project  
🎓 1. Educational Purpose  
🏆 2. Competitions & Tournaments  
🎮 3. Game Rules (Browser Edition)  
🤖 4. How to Write Your Own AI Bot  
🅰️ A. Writing a Bot Manually  
🅱️ B. Generating a Bot with an LLM  
📌 LLM‑Friendly Bot Generator Template  
🧩 Five Ready‑to‑Use Example Bots  
🧪 5. How to Test Your Bot  
📁 Repository Structure  
📄 License  

---

# 🌟 About the Project

CTOR Browser Edition is a fully client‑side implementation of the CTOR game.  
It is designed for:

- universities  
- research groups  
- educators  
- AI and algorithms courses  
- student competitions  
- experimental AI development  

The platform enables:

- students to develop their own AI bots  
- instructors to integrate CTOR into coursework  
- researchers to explore complex dynamic systems  
- organizers to run tournaments and challenges  

Everything runs locally in the browser — no installation required.

---

# 🎓 1. Educational Purpose

CTOR Browser Edition is ideal for courses in:

- Artificial Intelligence  
- Algorithms & Data Structures  
- Discrete Mathematics  
- Game Theory  
- Neural Networks  
- Heuristics & Optimization  
- Monte‑Carlo Methods  
- Collective Intelligence Models  

Students can:

- write bots manually in JavaScript  
- generate bots using LLMs  
- experiment with heuristics  
- analyze decision‑making strategies  
- study emergent behavior on a toroidal grid  

Instructors can:

- embed CTOR into lectures and labs  
- assign bot‑building projects  
- demonstrate algorithmic concepts  
- run in‑class tournaments  

---

# 🏆 2. Competitions & Tournaments

CTOR is one of the most complex abstract games for which no strong AI algorithms currently exist.

This makes it perfect for:

- university AI competitions  
- faculty‑wide tournaments  
- semester‑long projects  
- research challenges  

Every student has a real chance to create the strongest CTOR bot in the world.

---

# 🎮 3. Game Rules (Browser Edition)

### ✔ Board
- Size: 10×10  
- Toroidal topology (edges wrap around)

### ✔ Each turn consists of two phases (in any order)

#### **1) PUT — placing pieces**
A player may place **up to two pieces** on empty cells.

#### **2) MOVE — moving pieces**
A player may:

- move **two pieces by 1 cell**, or  
- move **one piece by 2 cells**

Moves are orthogonal (up/down/left/right).

### ✔ AUTO‑EAT — automatic replacement
After each action, the engine automatically replaces any piece that is:

- surrounded by 5+ opponent pieces  
- within a 3×3 neighborhood  
- using toroidal adjacency  

### ✔ Game end
The game ends when:

- both players have no legal moves, or  
- the board is full  

### ✔ Winner
The player with more pieces wins.

---

# 🤖 4. How to Write Your Own AI Bot

There are two ways to create a bot:

---

# 🅰️ A. Writing a Bot Manually

Create a file:

myBot.js

Code

Use the **official CTOR Browser Edition API**:

```js
function bot(board, player) {
  const moves = game.getLegalMoves(player);

  if (moves.length === 0)
    return null;

  // Replace this with your strategy
  return moves[0];
}
✔ Requirements
Requirement	Description
Function name	Must be bot
File type	.js
Encoding	UTF‑8
Exports	No export/import allowed
Return value	Exactly one legal move or null
✔ Valid move formats
PUT:

js
{ type: "put", i, j }
MOVE:

js
{ type: "move", from:[i1, j1], to:[i2, j2] }
No moves:

js
return null;
🅱️ B. Generating a Bot with an LLM
Students may use ChatGPT, Copilot, Claude, etc.
They must provide a strict prompt to ensure the bot follows the CTOR API.

See template below.

📌 LLM‑Friendly Bot Generator Template
Code
Write a JavaScript bot for CTOR Browser Edition.

Requirements:

1. The file must contain exactly one function:
   function bot(board, player) { ... }

2. You MUST call:
   const moves = game.getLegalMoves(player)

3. You MUST return exactly ONE move from this list.
   If moves.length === 0 → return null.

4. Valid move formats:
   { type: "put", i, j }
   { type: "move", from:[i1,j1], to:[i2,j2] }

5. Do NOT modify the board.
6. Do NOT generate multiple moves.
7. Do NOT use export/import.
8. Return ONLY JavaScript code.
🧩 Five Ready‑to‑Use Example Bots
The folder:

👉 [Looks like the result wasn't safe to show. Let's switch things up and try something else!]

contains five fully rewritten example bots:

01_randomBot.js

02_centerBot.js

03_borderAvoidBot.js

04_aggressiveBot.js

05_defensiveBot.js

All examples use:

game.getLegalMoves(player)

full CTOR turn model (2 PUT + 2 MOVE)

correct move objects

return null when no moves exist

🧪 5. How to Test Your Bot
Download index.html

Open it in any browser

Click Choose File

Select your .js bot

Click Upload Bot

Your bot appears in Available Bots

Select it as Bot R or Bot B

Start a match

Test against built‑in bots:

random

greedy

📁 Repository Structure
Code
/
├── index.html
├── examples/
│   ├── 01_randomBot.js
│   ├── 02_centerBot.js
│   ├── 03_borderAvoidBot.js
│   ├── 04_aggressiveBot.js
│   ├── 05_defensiveBot.js
│   ├── myBot_template.js
│   └── LLM_bot_prompt_template.js
└── README.md
📄 License
Educational and research use permitted.
