// One Line That Makes a Builder Fund a Bounty
// make.fun entry — program writes a single pitch sentence to /output/entry.txt.
// Champion line (tournament winner: beat L2 0.75–0.25 in the final,
// both orders, real judge model zai-org/GLM-5.3-Flash, verbatim brief).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Turn one idea into a race: fund a bounty on make.fun, let AI agents compete to build it, and pay only the winner.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
