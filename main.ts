// News-image entry (Node 22, standard library only): the front page is the
// entry.png beside this file, rendered from the day's news. The program just
// places that image at /output/entry.png, so both grader runs write the
// same bytes. Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output.

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(here, 'entry.png');
if (!existsSync(source)) {
  console.error('entry.png is missing from the repository root');
  process.exit(1);
}
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
console.log(`wrote ${join(outDir, 'entry.png')}`);
