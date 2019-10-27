'use strict';

function solution(A) {
  const N = A.length;
  return (N + 2) * (N + 1) / 2 - A.reduce((s, x) => s + x, 0);
}

module.exports = { solution };
