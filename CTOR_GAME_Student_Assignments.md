<div align="center">🎓 CTOR GAME — Student Assignment Guide</div>
<div align="center">Instructions for Completing All Three Required Tasks</div>
This guide describes the three mandatory assignments for working with the CTOR GAME AI‑vs‑AI Platform.
Each student must complete all three tasks and submit the required deliverables.

📘 Overview of the Three Tasks
Task	Description	Deliverable
1	Download and test the CTOR GAME platform locally	Bug report (if bugs found)
2	Design a heuristic algorithm and generate an AI‑written bot	Bot file + the prompt used
3	Implement your own bot manually in JavaScript	Bot file + short algorithm description
🧩 Task 1 — Download and Test the Platform
✔ What you must do
Go to the CTOR GAME GitHub repository.

Download the platform (either the entire repository or just index.html).

Run it locally on your computer:

open index.html in any modern browser

test the built‑in bots (random, greedy)

test uploading example bots

verify that the board, controls, and match runner work correctly

✔ If you find bugs
Prepare a bug report that includes:

a clear description of the issue

steps to reproduce

screenshots (optional but helpful)

your browser and operating system

any error messages from the browser console

Submit the report to the instructors.

If no bugs are found, simply state:

“No bugs detected during testing.”

🤖 Task 2 — Create an AI‑Generated Bot Using a Prompt
In this task, you must:

Design your own heuristic algorithm for playing CTOR.

Describe the algorithm as a prompt for an AI system (e.g., ChatGPT, Copilot, Claude).

Use the prompt to generate a bot in JavaScript.

Ensure the bot follows the CTOR Browser Edition Bot API.

Test the bot locally using the platform.

✔ Naming Requirements
Your bot file must follow this format:

Code
LastName_FirstName_AlgorithmName_Version_AI.js
Where:

AI means the bot was generated using an AI prompt

Version examples: v1, v2, v1.1

✔ Example filename
Code
Ivanov_Petr_GreedyHeuristic_v1_AI.js
✔ What to Submit
The AI‑generated bot file

The exact prompt you used to generate it

Both must be submitted to the instructors.

🛠 Task 3 — Implement Your Own Bot Manually (No AI Tools)
In this task, you must:

Implement your own heuristic or algorithmic strategy by writing JavaScript manually.

Follow the CTOR GAME Bot API exactly.

Test your bot locally using the platform.

✔ Naming Requirements
Your bot file must follow this format:

Code
LastName_FirstName_AlgorithmName_Version_P.js
Where:

P means “Programmed manually” (no AI assistance)

✔ Example filename
Code
Ivanov_Petr_BlockingStrategy_v2_P.js
✔ What to Submit
The manually written bot file

A short description of your algorithm (3–10 sentences)

📤 Submission Requirements
Each student must submit:

✔ From Task 1
Bug report (if bugs found)

✔ From Task 2
AI‑generated bot file

The prompt used to generate it

✔ From Task 3
Manually written bot file

Short algorithm description

Submit all files to the instructors.
After review, your bots may be added to the official CTOR GAME repository.

🧠 Tips for Success
Test your bots against built‑in bots and example bots.

Start with simple heuristics and improve them iteratively.

Make sure your bot always returns a legal move.

Use the myBot_template.js file as a reference.

Keep your code clean, readable, and well‑structured.

Document your heuristic logic clearly.
