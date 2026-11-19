// News-image 19 November 2026 — handover program (Node 22, stdlib only).
//
// The entry is the newspaper front page beside this file (entry.png,
// 1024x1024, fifteen verified stories from Thursday 19 November 2026:
// the Shenzhen trilateral summit, the Hormuz mine claims, the Crimean
// Bridge, Cyclone Akvan, the GTA VI rollout, and ten more in the ticker).
// This program copies it to the output directory so the gate and the
// judge see exactly those bytes. It runs twice and both runs must
// produce identical bytes: a plain copy, no clock, no randomness,
// no network.
//
// Locally:  MAKEFUN_OUTPUT_DIR=out node main.ts
// The scorer runs it with /output as the destination.

import { mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const dst = join(outDir, 'entry.png');

// The entry must be a whole PNG: check its 8-byte signature before
// copying, so a corrupt or swapped file fails here instead of at the gate.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const buf = readFileSync(src);
if (!buf.subarray(0, 8).equals(PNG_MAGIC)) throw new Error('entry.png is not a PNG file');

mkdirSync(outDir, { recursive: true });
writeFileSync(dst, buf);

// The copy must be byte-identical to the source: same size, same bytes.
const written = readFileSync(dst);
if (!written.equals(buf)) throw new Error('copied entry.png differs from the source');

// The gate takes at most 1 MiB; fail loudly here rather than hand in
// a truncated copy.
const bytes = statSync(dst).size;
if (bytes === 0 || bytes > 1048576) throw new Error(`entry.png is ${bytes} bytes, expected 1..1048576`);

console.log(`Front page handed over to ${outDir} (${bytes} bytes)`);
