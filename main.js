// Part 1: Coding Questions:

// 1 ) Convert the string "123" to a number and add 7.
// • Output Example: 130

let x = "123";
let result = Number(x) + 7;
console.log(result);

// -------------------------------------------------------------

// 2 ) Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
// • Input Example: 0
// • Output Example: "Invalid"

// let x = 0
// if (Boolean(x) == false) {
//     console.log("Invalid");

// }

// -------------------------------------------------------------

// 3 ) Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
// • Output Example:1, 3, 5, 7, 9

// for (let i = 0; i < 11; i++) {

//     if (i % 2 ==0 ) {
//         continue
//     }
//     console.log({i});

// }

// -----------------------------------------------------------------

// 4 ) Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
// • Input Example: [1, 2, 3, 4, 5]
// • Output Example: [2,4]

// let arr = [1, 2, 3, 4, 5];
// let i = 0;
// let result = arr.filter((ele) => {
//      return ele % 2 == 0
// })
//  console.log(result);

// --------------------------------------------------------------

// 5 ) Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
// • Input Example: [1, 2, 3], [4, 5, 6]
// • Output Example: [1, 2, 3, 4, 5, 6]

// let x = [1, 2, 3];
// let y = [4, 5, 6];
// let z = [...x, ...y];
// console.log({z});

// ------------------------------------------------------

// 6 ) Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday). (0.5 Grade)
// • Input Example: 2
// • Output Example: “Monday”

// let day = 2 ;
// switch (day) {
//     case 1:
//         console.log("Sunday");

//         break;
//     case 2:
//         console.log("Monday");

//         break;
//     case 3:
//         console.log("Tuesday");

//         break;
//     case 4:
//         console.log("wednsday");

//         break;
//     case 5:
//         console.log("Thursday");

//         break;

//     default:
//         console.log("Weekend");

//         break;
// }

// --------------------------------------------------------

// // 7 ) Create an array of strings and return their lengths using map method (0.5 Grade)
// // • Input: ["a", "ab", "abc"]
// // • Output Example: [1, 2, 3]

// let arr = ["a", "ab", "abc"];
// let result = arr.map((ele) => {
//     return ele.length
// })
// console.log({result});

// -----------------------------------------------------------------

// 8 ) Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
// • Input Example: 15
// • Output Example: “Divisible by both”

// function divisible(i) {
//     if (i % 3 ==0 & i % 5 ==0) {
//         console.log('Divisible by both');
//     } else {
//         console.log("The number isn't divisible by 3 and 5");

//     }
// }
// divisible(15)

// --------------------------------------------------------------

// 9 ) Write a function using arrow syntax to return the square of a number (0.5 Grade)
// • Input Example: 5
// • Output Example: 25

// const square = (x) => {
//     return x*x
// }
// console.log(square(5));

// ---------------------------------------------------------------

// 10 ) Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
// • Input Example: const person = {name: 'John', age: 25}
// • Output Example: 'John is 25 years old'

// const person = { name: "John", age: 25 };
// let { name, age } = person
// console.log(`${name} is ${age} years old`);

// -----------------------------------------------------------------------

// 11 ) Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
// • Input Example: 1, 2, 3, 4, 5
// • Output Example: 15

// function multiplying(...arr) {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
//   }
//   return result;
// }

// console.log(multiplying(1, 2, 3, 4, 5));

// OR

// function multiplying(...arr) {
//     let result = arr.reduce((accu, currentValue) => {
//       return accu + currentValue
//   }, 0 )
//   return result;
// }

// console.log(multiplying(1, 2, 3, 4, 5));

// -------------------------------------------------------------------

// 12 ) Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
// • Output Example: “Success”

// function waitSuccess() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Success");
//     }, 3000);
//   });
// }

// waitSuccess().then((msg) => console.log(msg)).catch((error)=>console.log(error));

// ---------------------------------------------------------------------

// 13 ) Write a function to find the largest number in an array. (0.5 Grade)
// • Input Example: [1, 3, 7, 2, 4]
// • Output Example: 7

// const largestNum = (arr) => {
//   let newArr = arr.sort();
//   return newArr[arr.length - 1];
// };
// console.log(largestNum([1, 3, 7, 2, 4]));

// ---------------------------------------------------------------------

// 14 ) Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
// • Input Example: name: "John", age: 30}
// • Output Example: ["name", "age"]

// const person = { name: "John", age: 30 }
// let keys = []
// for (const key in person) {
//   keys.push(key)
// }
// console.log(keys);

// --------------------------------------------------------------------

// 15 ) Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
// • Input: "The quick brown fox"
// • Output: ["The", "quick", "brown", "fox"]

// const str = "The quick brown fox";
// const arr = str.split(" ")
// console.log(arr);

// ----------------------------------------------------------------------
// -----------------------------------------------------------------------

// Part 2: Essay Questions:

// 1 ) What is the difference between forEach and for...of? When would you use each?

// forEach => executes a callback function once for each element in an array
// let data = [10, 20, 5, 4];
// data.forEach((elem, index) => {
//     console.log({elem, index, time:Date.now()});
// })
//  هنا تقريبا كلهم هيخرجوا في نفس الوقت وده لأن ال forEach بتشتغل Asynchronous يعني مفيش عنصر بيستنى التاني كله بيخرج في نفس الوقت

// for ... of => loops over the values of any iterable, such as arrays, strings
// لو طبقنا عليها نفس المثال اللي في ال forEach هنلاحظ أن في فرق في الوقت ملحوظ بين كل عنصر والتاني وده لأن ال for  ..of بتشتغل async ...await

// for (const [index, elem] of data.entries()) {
//       console.log({ elem, index});
//       const result = await ( function return promise )
//       console.log ( {result})
// }
// في المثال ده هي كل مره هتطبع { elem, index} وتستنى لما ال func تخلص وبعدين تدخل على العنصر التاني

// forEach => Asynchronous
// هستخدمها لو هرفع حاجات مش مهم في الترتيب زي صور مثلا
// for ... of => async .... await
// هستخدمها لو حاجه مهم فيها الترتيب يعني مش عايزاه يدخل على الخطوه التانيه غير لما الأولى تحصل

// ----------------------------------------------------------------------------

//  2 ) What is hoisting and what is the Temporal Dead Zone (TDZ)?

// Hoisting :This concept means move on the declaration of variables and functions to the top of scope
// Ex:
// hoisting ( var x ;)
// console.log(x);  = >   undefined
// لأن هي بالنسباله موجوده ولكن ملهاش قيمه
// var x = 5;
// console.log(x);   = >    5

// The Temporal Dead Zone (TDZ) :
// It  refers to the period which variables declared with let or const exist within their scope but cannot be accessed or used until they are initialized.
// يعني بيكون معمول لل variables ديه hoisting بس مش بيكون ليا أي access عليها
// ولو حاولت أعمل log لل variable هيظهرلي It can't access before initialization
// Ex:
// console.log(x);  => x can't access before initialization

// ➡️  TDZ  ⬅️

// let x = 5;
// console.log(x); => 5

// ---------------------------------------------------------------

// 3 ) What are the main differences between == and ===?

// == compares values only with type conversion
// === compares both value and type

// Ex:
// let x = 5
// let y ='5'
// console.log ( x == y )  => true
// console.log ( x === y )  => false

// ---------------------------------------------------------------------

// 4 ) Explain how try-catch works and why it is important in async operations.

//Ex:
// function waitSuccess() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Success");
//     }, 3000);
//   });
// }

// async function handleResult() {
//   try {
//     const result = await waitSuccess();
//     console.log("Result:", result);
//   } catch (err) {
//     console.log("Error:", err);
//   }
// }

// handleResult();

// try بيحصل فيها ال execution لل code ولكن لو حصلت مشكله في line معين كده كله هيقف وهيدخل على ال catch

//Try-catch is important to handle errors in async operations, and it is considered clean code

// ----------------------------------------------------------------------

// 5 ) What’s the difference between type conversion and coercion? Provide examples of each.

// Type conversion : It refers to the ability of changing the data type of a variable

// Ex 1:
// let age = 25
// age = String (age)
// console.log(typeof age);   => string

// Ex2:
// let age = 25
// age = Boolean (age)
// console.log(typeof age);  => true

// Type coercion : JavaScript changes the data type of a variable by default to excute the code

//Ex 1 :
// let x = 5 +'5'
// console.log(x) => 55
// JS = >  ( let x = String (5) + '5' )
// ال JS حولت القيمه الأول ل string علشان تقدر تعمل concatenation
// +  means concatenate
