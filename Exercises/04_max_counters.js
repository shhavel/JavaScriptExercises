'use strict';

function solution(N, A) {
  const CS = new Array(N);
  CS.fill(0);
  let inf = 0;
  let m = 0;
  A.forEach(x => {
    if (0 < x && x <= N) {
      CS[x - 1] = Math.max(CS[x - 1], inf) + 1;
      m = Math.max(m, CS[x - 1]);
    } else {
      inf = m;
    }
  });
  return CS.map(c => Math.max(c, inf));
}

module.exports = { solution };
