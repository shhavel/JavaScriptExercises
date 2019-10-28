'use strict';

function solution(X, A) {
  const N = A.length;
  const T = new Array(X);
  for (let t = 0; t < N; t++) {
    if (0 < A[t] && A[t] <= X) {
      T[A[t] - 1] = T[A[t] - 1] || t;
    }
  }
  if (T.includes(undefined)) return -1;
  return T.reduce((max, t) => Math.max(max, t));
}


module.exports = { solution };
