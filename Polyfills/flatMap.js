/**
 * how flat map is differen from the map
 * consider this example:
 */
const arr1 = ["hello", "Sunny"].map((item) => item);
console.log("Map output", arr1);
// output :   [ [ 'h', 'e', 'l', 'l', 'o' ], [ 'S', 'u', 'n', 'n', 'y' ] ]
// its not flaten the map.

// in the other hand: flatMap will flattens all the items and put in into single arr.
// it does flatten the array at single level but not
// lets have a looks into that.
const arr2 = ["hello", "Sunny"].flatMap((item) => item);
console.log("Flat map output", arr2);
/* output : [
  'h', 'e', 'l', 'l',
  'o', 'S', 'u', 'n',
  'n', 'y'
] */

/* Another example of flat Map here */
const arr3 = [["hello", "test2"], ["test"], ["Sunny"]].flatMap((item) => item);
console.log("Flat Map output nested array inside", arr3);

/**
 * let's write the polyfills for flatMap
 */
Array.prototype.myFlatMap = function (callbackFn, args) {
  const _arr = this;
  const _res = [];
  if (!Array.isArray(_arr)) {
    throw new Error("Flat map is being performed on non array item");
  }
  return _arr.map(callbackFn, args).flat();
};
const arr4 = [["hello", "test2"], ["test"], ["Sunny"]].myFlatMap(
  (item) => item
);
console.log("Custom Flat Map output nested array inside", arr4);
