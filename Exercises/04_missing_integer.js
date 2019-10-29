'use strict';

function solution(A) {
  const N = A.length + 1;
  const rejectedAnswers = new Array(N);
  for (const n of A) {
    if (0 < n && n <= N) {
      rejectedAnswers[n - 1] = true;
    }
  }
  for (let i = 0; i < N; i++) {
    if (!(i in rejectedAnswers)) return i + 1;
  }
}

module.exports = { solution };
