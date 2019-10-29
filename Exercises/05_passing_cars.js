'use strict';

function solution(A) {
  const N = A.length;
  const M = 1000000000;
  let p = 0;
  let e = 0;
  for (let i = 0; i < N; i++) {
    if (A[i] === 0) {
      e++;
    } else {
      p += e;
      if (p > M) return -1;
    }
  }
  return p;
}

module.exports = { solution };
