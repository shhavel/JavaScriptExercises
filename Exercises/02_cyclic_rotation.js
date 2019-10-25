'use strict';

function solution(A, K) {
  const N = A.length;
  const k = K % N;
  if (k === 0) return A; // No change to the array.
  const a = [...A]; // Save initial elements position.
  for (let i = 0; i < N; i++) {
    A[(i + k) % N] = a[i];
  }
  return A;
}

module.exports = { solution };
