// u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a: the program the harness runs
// (`node /bot/main.ts`, node22). It writes one single-line office joke to /output/entry.txt
// and nothing else. Outside a container MAKEFUN_OUTPUT_DIR stands in for /output.
// The joke is a fixed string, so two runs write byte-identical output.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

/** The entry: one line about office life, 108 characters, with the turn in the last words. */
const JOKE =
  "I blocked two hours of focus time on my calendar; three people booked over it to ask when I'm free to focus.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
