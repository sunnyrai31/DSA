Array.prototype.myFlat = function (level) {
  const _arr = this;
  const _res = [];

  reusableCode = (_arr, level = 1) => {
    for (let index = 0; index < _arr.length; index++) {
      if (!Array.isArray(_arr[index])) {
        _res.push(_arr[index]);
      } else if (Array.isArray(_arr[index])) {
        if (level > 1) {
          reusableCode(_arr[index], --level);
        } else {
          _res.push(..._arr[index]);
          break;
        }
      }
    }
  };
  reusableCode(_arr, level);
  console.log("yaha pe ", _res);
  return _res;
};

// const flatArr = [1, 2, [3, 4, [5, 6, [7, 8]]]].flat(2);
const flatArr = [1, 2, [3, 4, [5, 6, [7, 8]]]].myFlat(1);
console.log("flat code test", flatArr);
/**
 *
 *
 */
