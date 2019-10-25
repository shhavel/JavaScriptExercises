const solution = N => {
  const binaryN = N.toString(2);
  let maxGap = 0;
  let gap = 0;
  let metOne = false;
  for (const d of binaryN) {
    if (d === '0') {
      if (metOne) gap++;
    } else if (metOne) {
      maxGap = Math.max(maxGap, gap);
      gap = 0;
    } else {
      metOne = true;
    }
  }
  return maxGap;
};

module.exports = { solution };
