// Import stylesheets
import './style.css';
import { pipe } from 'rxjs';
// const trim = (str) => str.trim();
// const lowerCase = (str) => str.toLowerCase();
// const wrapDiv = (str) => `<div>${str}</div`;
// const str = ' SUNNY  ';
// const msg = lowerCase(trim(str));
// const newMsg = pipe(trim, lowerCase, wrapDiv);
// console.log(newMsg(str));
// //console.log(msg);

// // custom filter
// Array.prototype.myFilter = function (cbFun) {
//   let res = [];
//   for (let item of this) {
//     if (cbFun(item)) {
//       res.push(item);
//     }
//   }
//   return res;
// };
// const arr = [1, 2, 3, 4, 5];
// const res = arr.myFilter((item) => {
//   return item > 1;
// });
// console.log(
//   arr.filter((item) => {
//     return item > 2;
//   })
// );

// console.log(res);

// const myColor = ['orange', 'blue', 'green'];
// function makeCapital(strArr) {
//   let resArr = [];
//   let lettter = [];
//   for (let color of strArr) {
//     lettter = color.split('');
//     lettter[lettter.length - 1] = lettter[lettter.length - 1].toUpperCase();
//     resArr.push(lettter.join(''));
//   }
//   console.log(resArr);
//   return resArr;
// }
// makeCapital(myColor);

// function isPrime(n) {
//   if (n <= 1) return false;
//   // Check from 2 to n-1
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }
// function primeNumber(range) {
//   let primeNumbers = [];
//   for (let i = 1; i <= range; i++) {
//     if (isPrime(i)) {
//       primeNumbers.push(i);
//     }
//   }
//   return primeNumbers;
// }
// console.log(primeNumber(50));

// //prime - >2 3 5 7 11 13

// function caluculatePastValue(amount, rate, year) {
//   //PV  = FV/ (1+r)^n
//   const pastValue = amount / Math.pow(1 + rate / 100, year);
//   console.log('pastValue', pastValue.toLocaleString());
// }
// function caluculateFutureValue(amount, rate, year) {
//   //FV = PV (1+r)^n
//   const futureValue = amount * Math.pow(1 + rate / 100, year);
//   console.log('futureValue', futureValue.toLocaleString());
// }
// caluculatePastValue(1800000, 6.07, 3);
// caluculateFutureValue(700000, 8, 10);
// console.log('I');
// setTimeout(() => {
//   console.log('love');
// }, 0);
// console.log('JavaScript!');

// let animals = ['eagle', 'osprey', 'salmon'];
// let key = (animal) => animal === 'salmon';
// if (animals.some(key).length === 1) {
//   console.log('swim');
// }
// var cat = { name: 'Athena' };
// function swap(feline) {
//   feline.name = 'Wild';
//   feline = { name: 'Tabby' };
// }
// swap(cat);
// console.log(cat.name);

// let rainForests = ['Amazon', 'Borneo', 'Cerrado', 'Congo'];
// rainForests.splice(0, 2);
// console.log(rainForests);

// var flagsJSON =
//   '{ "countries" : [' +
//   '{ "country":"Ireland" , "flag":"🇮🇪" },' +
//   '{ "country":"Serbia" , "flag":"🇷🇸" },' +
//   '{ "country":"Peru" , "flag":"🇵🇪" } ]}';
// var flagDatabase = JSON.parse(flagsJSON);
// console.log(flagDatabase);

// // let rainForestAcres = 10;
// // let animals = 0;
// // while (rainForestAcres < 13 || animals <= 2) {
// //   rainForestAcres++;
// //   animals += 2;
// // }
// // console.log(animals);
// // let vowels = {"a","e","i","o","u"};
// // for (var k = 0; i < vowels.length; i++) {
// //   console.log(vowels[k]);
// // }

// var sound = 'grunt';
// var bear = { sound: 'roar' };
// function roar() {
//   console.log(this.sound);
// }
// roar();
// function counter() {
//   let count = 0;
//   return (function (count) {
//     count = count + 1;
//     return count;
//   })(count);
// }
// console.log(counter());
// console.log(counter());

// const arr = [1, -2, 3, -4, 5, -6];
// 1: 1, -2 > -2, 1, 3, -4, 5, -6
// -2, -4,  1, 3, [] 5, -6

/**  Arrya rotation ** */
function arrayrotation(arr, n) {
  /* solution using in-build javascript way */
  arr.push(...arr.splice(0, n));
  return arr;
  /*  solutio using native javascript way */
  // let splittedArr = [];
  // for (let i = 0; i <= n; i++) {
  //   splittedArr.push(arr.unshift(i));
  // }
  // console.log(arr, splittedArr);
  // arr.push(...splittedArr);
  // return arr;
}
const res = arrayrotation([1, 2, 3, 4, 5], 3);
console.log(res);

// const d = new Date();
// console.log(d, typeof d)
