'use strict';

function solution(A) {
  let x;
  let c = 0;
  A.sort((x, y) => x - y);
  for (const y of A) {
    if (y !== x) {
      c++;
      x = y;
    }
  }
  return c;
}

module.exports = { solution };
