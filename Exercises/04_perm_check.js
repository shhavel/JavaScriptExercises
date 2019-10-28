'use strict';

function solution(A) {
  const N = A.length;
  const C = new Array(N);
  C.fill(0);
  A.forEach(a => {
    if (0 < a && a <= N) {
      C[a - 1]++;
    }
  });
  return C.every(c => c === 1) ? 1 : 0;
}

module.exports = { solution };
