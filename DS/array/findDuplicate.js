function findDuplicate(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) !== index;
  });
}

const res = findDuplicate([1, 2, 3, 3, 4, 4]);
console.log(res);
