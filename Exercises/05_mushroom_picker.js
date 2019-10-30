'use strict';

function prefixSums(A) {
  const N = A.length;
  const prefixSums = new Array(N);
  prefixSums[0] = A[0];
  for (let i = 1; i < N; i++) {
    prefixSums[i] = prefixSums[i - 1] + A[i];
  }
  return prefixSums;
}

function intervalSum(pref, l, r) {
  const leftPref = l > 0 ? pref[l - 1] : 0;
  return pref[Math.min(r, pref.length - 1)] - leftPref;
}

function solution(A, k, m) {
  const pref = prefixSums(A);
  let maxSum = 0;
  let p, q, sum;
  for (p = 0; p <= m; p++) {
    q = m - 2 * p;
    sum = intervalSum(pref, (q > 0 ? k - q : k), k + p);
    maxSum = Math.max(maxSum, sum);
  }
  for (p = 0; p <= m; p++) {
    q = m - 2 * p;
    sum = intervalSum(pref, k - p, q > 0 ? k + q : k);
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}

module.exports = { solution };
