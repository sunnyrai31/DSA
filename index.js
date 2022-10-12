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

// const d = new Date();
// console.log(d, typeof d)
