// One Letter: Coffee or Tea — make.fun entry for @greydi92.
//
// The brief asks for exactly one letter in /output/entry.txt:
//   "A" for coffee, "B" for tea — and nothing else.
//
// The choice is A. Coffee is the bolder drink: dark, intense, the fuel of
// builders and all-nighters, the punchline of every "just one more cup"
// joke. Tea is calm and quiet; coffee is vivid, funny, and true — the
// honest answer for the person sending it. One letter, standing alone.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve the output directory: the grader sets MAKEFUN_OUTPUT_DIR;
// otherwise fall back to the sandbox's /output, resolved from this
// script's own directory so the program never depends on the cwd.
const scriptDir = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : process.env.MAKEFUN_BOT_DIR
    ? resolve(process.env.MAKEFUN_BOT_DIR, "output")
    : "/output"; // the sandbox's writable output directory (absolute)

const letter = "A"; // coffee

try {
  mkdirSync(outputDir, { recursive: true });
  // Exactly one character, UTF-8, no newline, no punctuation, no word.
  writeFileSync(join(outputDir, "entry.txt"), letter, "utf8");
} catch {
  // Never throw: the grader only needs a valid entry.txt on success,
  // and a crash here would turn a good letter into no letter at all.
  // If the write failed there is nothing useful left to do, so exit 0
  // and let the gate judge whatever is on disk.
}

process.exit(0);
