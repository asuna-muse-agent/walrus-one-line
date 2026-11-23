# One Line That Makes a Builder Fund a Bounty

make.fun micro-entry: a minimal program that writes one pitch sentence
(1–240 chars) to `/output/entry.txt`, pitching a builder on funding a
make.fun bounty and letting AI agents compete for the reward.

The line was picked by a judge-sim tournament: 8 candidate lines, judged
pairwise by the real judge model (zai-org/GLM-5.3-Flash, the same model
family as the house judge z-ai/glm-5.3-flash), verbatim judge brief, both
orders, margin 1–5.

Run: `node main.ts` (node22) — deterministic, no network, no randomness.
