'use strict';

// M = { i : A ≤ i ≤ B, i mod K = 0 }
// Returns |M|
function solution(A, B, K) {
  const N = B - A + 1;
  const r = A % K;
  return r === 0 ? Math.ceil(N / K) : Math.ceil((N + r) / K) - 1;
}

module.exports = { solution };
