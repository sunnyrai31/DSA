const twoSum = (arr, target) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const reminder = target - arr[i];
    const findReminderAt = arr.findIndex((item) => item === reminder);
    if (
      findReminderAt >= 0 &&
      findReminderAt != i &&
      target === arr[i] + reminder
    ) {
      res.push(i, findReminderAt);
      break;
    }
  }
  return res;
};

// twoSum([2, 3, 5, 7], 9);
console.log(twoSum([2, 3, 5, 7], 9));

// console.log(twoSum([2, 3, 4, 5, 6, 7, 8, 9], 9));
// link : https://leetcode.com/problems/two-sum/solutions/4806399/two-sum-javascript-sunny/
