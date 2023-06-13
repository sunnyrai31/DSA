// console.log("SHOULD BE UNDEFINED", b); // b is not defined here
// function foo() {
//   var b = 1; // `b` not formally declared
// }
// foo();
// console.log("here is value of b", b);

function foo() {
  var a = 1;
  if (a >= 1) {
    let b = 2;
    while (b <= 5) {
      let c = b * 2;
      b++;
      console.log(a + c);
    }
  }
  console.log("b", b);
}
foo();
