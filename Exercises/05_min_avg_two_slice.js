'use strict';

function solution(A) {
  const N = A.length;
  console.log('A', A);
  const pref = new Array(N);
  let i;
  pref[0] = A[0];
  for (i = 1; i < N; i++) {
    pref[i] = pref[i - 1] + A[i];
  }
  console.log('pref', pref);
  let p, q, avg, sum;
  let minP = 0;
  let minAvg = pref[1] / 2;
  for (p = 0; p < N - 1; p++) {
    for (q = p + 1; q < N; q++) {
      sum = p === 0 ? pref[q] : pref[q] - pref[p - 1];
      avg = sum / (q - p + 1);
      console.log(`avg from index ${p} to ${q} equals ${avg}`);
      if (avg < minAvg) {
        minP = p;
        minAvg = avg;
      }
    }
  }
  return minP;
}

module.exports = { solution };
