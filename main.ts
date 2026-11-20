import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const sourceVideoJson = new URL('./VIDEO.json', import.meta.url);
const destination = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const contents = readFileSync(sourceVideoJson);

mkdirSync(destination, { recursive: true });
writeFileSync(join(destination, 'VIDEO.json'), contents);
