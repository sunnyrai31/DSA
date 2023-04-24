let info;
const nameInfo = {
  firstName: "sunny",
  lastName: "rai",
};
const printInfo = function () {
  const space = " ";
  this.info =
    "Hi" +
    space +
    this.firstName +
    space +
    this.lastName +
    space +
    "i am living in" +
    space +
    this.city +
    space +
    "state" +
    space +
    this.state;
  console.log(this.info);
};

// const ref = printInfo.call(nameInfo);

Function.prototype.mybind = function (refObject, ...arg) {
  const callingMethod = this;
  return function (...innerarg) {
    callingMethod.apply(refObject, [...arg, ...innerarg]);
  };
};

const printAddressInfo = function (...arg) {
  const space = " ";
  console.log(arg);

  this.info =
    "Hi" +
    space +
    this.city +
    space +
    "state" +
    space +
    this.state +
    space +
    arg.join(" ");
  console.log(this.info);
};
const addressinfo = {
  state: "karnataka",
  city: "bangalore",
};
const printAddressRef1 = printAddressInfo.mybind(addressinfo);
printAddressRef1("Sunny Rai", 31, "this is code test");
