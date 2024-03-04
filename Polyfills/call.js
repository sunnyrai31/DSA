// must visit link : https://medium.com/@vaibhav046/create-your-custom-javascript-functions-call-apply-bind-map-filter-reduce-in-6031f8b006e9

const info = {
  name: "sunny",
};
/**
 * Method print the info , based on its calling method.
 * @param {*} arg
 */
const printInfo = function (arg) {
  console.log("Hi", this.name, ...arg);
};

/**
 * custom call implemntation via call way
 * @param {*} refObject
 * @param  {...any} arg
 *
 */
Function.prototype.customCallViaCall = function (refObject, ...arg) {
  const fn = this;
  this.call(refObject, arg);
};
printInfo.customCallViaCall(info, "call test via call way");

/**
 * custom call implemntation via bind way
 * @param {*} refObject
 * @param  {...any} arg
 */
Function.prototype.customCallViaBind = function (refObject, ...arg) {
  const fn = this;
  this.bind(refObject, arg)();
};
printInfo.customCallViaBind(info, "call test via bind way");

/***
 * custom apply - apply will take argument in array format
 * @param {*} refObject
 * @param  {...any} arg
 * that is the onluy difference between the call and apply
 * via - call
 */
Function.prototype.customApplyViaCall = function (refObject, ...arg) {
  const fn = this;
  this.call(refObject, ...arg);
};
printInfo.customApplyViaCall(info, ["Apply implementation", "via call way"]);

/***
 * custom apply - apply will take argument in array format
 * @param {*} refObject
 * @param  {...any} arg
 * that is the onluy difference between the call and apply
 * via - bind
 */

Function.prototype.customApplyViaBind = function (refObject, ...arg) {
  const fn = this;
  this.bind(refObject, ...arg)(); // this is not required , should be returning this this.bind(refObject, ...arg) and calling should be done by caller.
};

printInfo.customApplyViaBind(info, ["Apply implementation", "via bind way"]);
 