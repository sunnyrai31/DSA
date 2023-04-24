function Test() {
  console.log(a);
}

var a = 100;
Test();

/***
 * GEC
 * [Memory allocation phase]
 *  {
 * obj : undefined
 * Test: function(){}
 * }
 *
 *
 *
 */
