'use strict';

function solution(A) {
  const N = A.length;
  if (N < 3) return 0;
  A.sort((x, y) => x - y);
  let a = A[0], b = A[1], c;
  for (let i = 2; i < N; i++) {
    c = A[i];
    if (a > 0 && a + b > c) {
      return 1;
    }
    a = b;
    b = c;
  }
  return 0;
}

module.exports = { solution };
