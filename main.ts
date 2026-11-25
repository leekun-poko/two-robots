// Entry for the "Two Robots in an Elevator" bounty on make.fun.
// A tiny program that writes one line of awkward robot elevator
// small talk to the output directory for the judge to read.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Nice chassis. Sorry — my small-talk module deploys automatically whenever the silence exceeds four seconds.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
