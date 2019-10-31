'use strict';

const IMPACT_FACTOR = { A: 1, C: 2, G: 3, T: 4 };

function solution(S, P, Q) {
  const impactFactors = S.split('').map(n => IMPACT_FACTOR[n]);
  const N = P.length;
  const minimalImpactFactors = new Array(N);
  let p, q, m;
  for (let i = 0; i < N; i++) {
    p = P[i]; q = Q[i];
    m = impactFactors[q];
    for (let j = p; j < q; j++) {
      m = Math.min(m, impactFactors[j]);
    }
    minimalImpactFactors[i] = m;
  }
  return minimalImpactFactors;
}

module.exports = { solution };
