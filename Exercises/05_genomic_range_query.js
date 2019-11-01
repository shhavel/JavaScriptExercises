'use strict';

const IMPACT_FACTOR = { A: 1, C: 2, G: 3, T: 4 };

function solution(S, P, Q) {
  const impactFactors = S.split('').map(n => IMPACT_FACTOR[n]);
  const N = impactFactors.length;
  const prefMaxAInxs = new Array(N);
  const prefMaxCInxs = new Array(N);
  const prefMaxGInxs = new Array(N);
  let maxAIdx = -1, maxCIdx = -1, maxGIdx = -1, i, p, q;
  for (i = 0; i < N; i++) {
    if (impactFactors[i] === 1) {
      maxAIdx = i;
    } else if (impactFactors[i] === 2) {
      maxCIdx = i;
    } else if (impactFactors[i] === 3) {
      maxGIdx = i;
    }
    prefMaxAInxs[i] = maxAIdx;
    prefMaxCInxs[i] = maxCIdx;
    prefMaxGInxs[i] = maxGIdx;
  }
  const I = P.length;
  const minimalImpactFactors = new Array(I);
  for (i = 0; i < I; i++) {
    p = P[i]; q = Q[i];
    // Find minimum value in a range.
    if (prefMaxAInxs[q] >= p) {
      minimalImpactFactors[i] = 1;
    } else if (prefMaxCInxs[q] >= p) {
      minimalImpactFactors[i] = 2;
    } else if (prefMaxGInxs[q] >= p) {
      minimalImpactFactors[i] = 3;
    } else {
      minimalImpactFactors[i] = 4;
    }
  }
  return minimalImpactFactors;
}

module.exports = { solution };
