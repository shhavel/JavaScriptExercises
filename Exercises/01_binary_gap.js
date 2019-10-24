const solution = n => {
  let maxGap = 0;
  let gap = 0;
  let metOne = false;
  binaryNStr = n.toString(2);
  for (var i = 0; i < binaryNStr.length; i++) {
    if (binaryNStr.charAt(i) === '0') {
      if (metOne) gap++;
    } else {
      metOne = true;
      maxGap = Math.max(maxGap, gap);
      gap = 0;
    }
  }
  return maxGap;
};

module.exports = { solution };
