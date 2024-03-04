/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const res = [];
  for (let i = 0; i <= n; i++) {
    const binaryArr = (i >>> 0).toString(2).padStart(3, "0").split("");
    let count = 0;
    for (let j = 0; j < binaryArr.length; j++) {
      count = count + parseInt(binaryArr[j]);
    }
    res.push(count);
  }
  return res;
};

countBits(2);

// https://leetcode.com/problems/counting-bits/description/
