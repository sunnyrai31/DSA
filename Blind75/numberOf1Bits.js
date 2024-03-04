const hammingWeight = (n) => {
  let count = 0;
  const strArr = n.toString(2).split("");
  console.log("str", strArr);
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "1") count++;
  }
  console.log("count", count);
  return count;
};
// test case - 00000000000000000000000000001011
// test case 2 - 11111111111111111111111111111101
// console.log(hammingWeight(00000000000000000000000000001011));

//https://leetcode.com/problems/number-of-1-bits/
// submission at :
// https://leetcode.com/problems/number-of-1-bits/solutions/4806480/number-of-1-s-bit-javascript-sunny/
