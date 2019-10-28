'use strict';

function solution(A) {
  const N = A.length;
  if (N === 1) return A[0];
  let r = A.reduce((s, a) => s + a) - (A[0] << 1);
  let d;
  let minD = Math.abs(r);
  for (let i = 1; i < N - 1; i++) {
    r -= (A[i] << 1);
    d = Math.abs(r);
    minD = Math.min(minD, d);
  }
  return minD;
}

module.exports = { solution };
