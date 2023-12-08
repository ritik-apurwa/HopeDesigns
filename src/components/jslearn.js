// console.log(undefined > 0);
// console.log(undefined === 0);
// console.log("2" === 2);
// console.log("2" === 2);
// Primitive data types are compared by their values.
// 1. String, Number, Boolean, undefined, null, Symbol, BigInt

// ******** Reference data types are compared by their reference.********

// 1. Object, Array, Function, Date, RegExp, Map, Set

// const score = 1000
// const isLoggedIn = false
// const OutSideTemp = null
// let userEmail = "ztejd@example.com"
// const id = Symbol("123")
// const anotherid = Symbol("123")
// console.log(id === anotherid)
// const BigNumber = 32323232323222222n

// // console.log(typeof BigNumber)

// const heroes = [ "Shaktiman", "Batman", "Spiderman", "Ironman", "doga"  ]
// let myObj = {
//   name: "ritik" ,
//   password: 1234,
// };
// // console.log(typeof myObj)

// const myFunc = function(){
//   console.log(2+2)
// }

// console.log(typeof myFunc)
// Non Premietive data types are objects and functions data types are called functions objects

//  ************************ Memories **************************

// 1. Stack
//  Stack ( primitives ) , Heap ( non primitives )

// let myYoutubeName = "Ritik"
// let anotherYoutubeName = myYoutubeName
// anotherYoutubeName = "chaiaurcode"
// console.log(anotherYoutubeName)
// console.log(myYoutubeName)

// let user = {
//   name: "ritik" ,
//   age: 23,
//   email: "ritikapurwa@gmail.com",
//   bank: "ritik@sbi",
//   password: "ritik@123"
// }

// let usertwo = user
// usertwo.email = "ritikapurwa3500@gmail.com "
// console.log(user.email)
// console.log(usertwo.email)

//  primietive data types are copied by their value.
// non primitive data types are copied by their reference.
//  primitive data types are stored in stack and non primitive data types are stored in heap.

//  ************************* String *************************
// const name = "Ritik"
// const surname = "Apurwa"
// const fullName = name + " " + surname // old style
// console.log(fullName)
// console.log(`hello my name is ${name} and my surname is ${surname}. therefor my complete name is ${fullName} `) // new style with string interpolation.

// let username = String("ritikapurwa");
// let spacestring = String("   ritikapurwa   ");
// let surname = " apurwa ";

// console.log(username[0])

// console.log(username.__proto__) // __proto__ is a hidden property of object. and it is used to get the prototype of an object.

// console.log(username.length) // to find the length of string.

// console.log(username.toUpperCase()) // to change string to upper case.

// console.log(username.toLowerCase()) // to change string in lower case.

// console.log(username.indexOf("a")) // to find the index of a character.

// console.log(username.lastIndexOf("t")) // to check last index of a character.

// console.log(username.charAt("10")) to check the character at the index number of our choice.

// console.log(username.endsWith("a")) to check the string ends with a or not and result will come in boolean.

// console.log(username.includes("a")) // to check if the string containes the substring or not and result will come in boolean.

// console.log(username.repeat(10)) // repeat the string according to the number we give.

// console.log(username.split("")) //  to split the string and return the array. array mean collection of values, and values are seperated by comma.

// console.log(username.slice(0,3)) // to slice the string first give starting index and then ending index. note: ending index is not included and mean it will give index 1, index 2, and index 3 note: index counting  starts from 0. it accepts negative indexing.

// console.log(username.substring(3,6))  // give start number and end number and it will return the substring which is between the start and end number.

// console.log(username.substr(3,6)) // give start number and length and it will return the substring which is between the starting number  and length you give in this example you give (6) , diffrence between substr and substring , is that substr is not inclusive and inclusive mean

// console.log(spacestring.replace("a","b")) // to replace the character.

// console.log(username.replaceAll(("a","b")) // to replace all a characters with b  character.

// console.log(username.concat("",surname)) // to concatenate the string and here first commas represents the space between the two strings.

// console.log(username.anchor("")) // to add space between the string.)
// console.log(username.blink()) // to blink the string and blink mean it blink the string according to the number of times you give.

// console.log(spacestring.fontcolor("red")) // to change the font color of the string.)

// console.log(spacestring.trim()) // to trim the white spaces.

// console.log(username.trimStart() // to trim the white spaces from start and

// console.log(username.trimEnd()) // to trim the white spaces from end.

// console.log(username.padStart(4,"x")) // to pad and pad mean to add the character in the string.
// const str1 = '0000';

// console.log(str1.padStart(6, '1'));

//  padStart(targetLength, padString ) if we give 6 argument to target length and will make our output string length 6 and and change all indexing with given padString but not change the value of string,in the padEnd(targetLenght, padString) if we give 6 argument to target length and it will make out string with the lengt of six and we giv padString 2 and it will change all ending string values with 1 from end

// const fullNumber = '2681992';
// const last4Digits = fullNumber.slice(-2);
// const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
// console.log(maskedNumber)

// console.log(username.padStart(12,"x")) // to pad the string from end.

// console.log(username.charAt(username.length-2)) // to get the last character of string. if we give value -1 if we give value -2 it will give second last character of string.

// console.log(username.charCodeAt(username.length-1)) // to get the unicode of character.

// console.log(username.split("")) // to split the string.

// console.log(username.split("").reverse().join("")) // to reverse the string all characters in this situation

// console.log(username.split("").sort().join("")) // to sort the string.

// ************************* Numbers and Math *************************

// let score =  400
let newscore = new Number(400);
let precisescore = 113.1422;
let precisescore2 = 10.14;
const hundred = 1000000;
// console.log(typeof score)
// console.log(typeof newscore)
// console.log(newscore)
// console.log(score)

// console.log(newscore.toString().length) // to see the length of number.
// console.log(newscore.toFixed(5)) // to give the number in fixed decimal form.
// console.log(precisescore.toPrecision(5)) // to give the number in fixed decimal form. like we have 113.12 we give precission value 4 and get 113.1
// console.log(precisescore2.toPrecision(4)) // to give the number in fixed decimal form.

// console.log(hundred.toLocaleString("en-IN")) // to convert the number into indian currency format.
//  if we write Number. we get Max_value , Min_value epsilon and NaN , isIfinite and isInteger and Min_value etc.

//  ***************************** Math *****************************
// console.log(Math.PI) // to get the value of PI.

// conole.log(Math.abs)  it gives us the absolute value of number like if we give -10 it will give 10.

// console.log(Math.round(10.5)) // to round the number it means if we give 10.5 it will round to 11 and if we give 10.4 it will round to 10.

// console.log(Math.ceil(10.1)) // to round the number to the nearest higher integer.

// console.log(Math.floor(10.9)) // to round the number to the nearest lower integer. like if we have 10.9 it will round to 10.

// console.log(Math.trunc(10.9)) // to remove the decimal part of number if we give 10.9 it will remove the decimal part and give 10.

// console.log(Math.random() ) // to get the random number. and random number comes between 0 to 1.

// console.log(Math.random() * 10) to get the random number between 0 to 10. this is how we get values , if we want to get values between 0 to 100 we have to multiply with 100.
// console.log(Math.floor(Math.random() * 10)) // to get the random number betweenb 0 to 10 perfect values like 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
// console.log(Math.floor(Math.random() * 10 ))

// const min = 1000

// const max = 2000
// const MinMax = Math.floor(Math.random() * (max-min+1)) + min
// console.log(MinMax)

// ***************************** Date *****************************

// here Date is a constructor function, and we can create object of Date. Date function is important for creating date and time for hotel booking.
// let newDate = new Date()

// console.log(newDate.getDay()) // to get the day of the week.
// console.log(newDate.getFullYear()) // to get the year of the date.
// console.log(newDate.getMonth() + 1 ) // to get the month of the date.
// console.log(newDate.getDate()) // to get the date of the date.
// console.log(newDate.getHours()) // to get the hours of the date.
// console.log(newDate.getMinutes()) // to get the minutes of the date.
// console.log(newDate.getSeconds()) // to get the seconds of the date.
// console.log(newDate.getMilliseconds()) // to get the milliseconds of the date.
// console.log(newDate.setDate(1)) // to set the date of the date.
// console.log(newDate.setFullYear(2023)) // to set the year of the date.
// console.log(newDate.setMonth(0)) // to set the month of the date.
// console.log(newDate.setHours(10)) // to set the hours of the date.
// console.log(newDate.setMinutes(10)) // to set the minutes of the date.
// console.log(newDate.setSeconds(10)) // to set the seconds of the date.
// console.log(newDate.setMilliseconds(10)) // to set the milliseconds of the date.

// Create a new date object representing the current date and time
// const currentDate = new Date();
// const options = { timeZone: 'Asia/Kolkata' };
// const IndianTime = currentDate.toLocaleString('en-US', options);

// // Get the year, month, day, hours, minutes, seconds, and milliseconds
// const year = currentDate.getFullYear();
// const month = currentDate.getMonth(); // Note: Months are zero-indexed (0-11)
// const day = currentDate.getDate();
// const hours = currentDate.getHours();
// const minutes = currentDate.getMinutes();
// const seconds = currentDate.getSeconds();
// const milliseconds = currentDate.getMilliseconds();

// // Output the date and time components
// console.log(`Year: ${year}`);
// console.log(`Month: ${month + 1}`); // Adding 1 to the month to display it in the usual 1-12 format
// console.log(`Day: ${day}`);
// console.log(`Hours: ${hours}`);
// console.log(`Minutes: ${minutes}`);
// console.log(`Seconds: ${seconds}`);
// console.log(`Milliseconds: ${milliseconds}`);
// console.log('Current date and time in Indian Standard Time (IST):',IndianTime);

// let newDate = new Date()

// newDate.toLocaleString(
//   "default",
//   {
//     weekday:"long"

//   }
// )

// *************************** Array **********************************

// JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)

// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.

// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.

// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create.
// shallow copies share the same underlying memory, so any changes made to one are reflected in the other.

// deep copies properties do not copy the same refrence

// let myArr =  [ 2, 3, 4, 5, 6, 7, 8, 9, 10, "ritik" , "rahul" , "raj", "nagaur" , "jodhpur" , ];
// let heroes = [ 1, 2, 3, 4, 5, 6 ];
// let myArr2 = new Array ( 1, 2, 3, 4,);


// console.log(myArr[0]);
// console.log(myArr2[3]);
// console.log(heroes[2]);

// Array Methods 

// heroes.push(3); // this element is used for adding the element in the last of array.

// heroes.pop() // this method is used for removing the last element of array.


// heroes.unshift(3); // this method is used for adding the element in the first of array.

// heroes.shift(); // this method is used for removing the first element of array. 

// let myArr = [1,2, 3, 4, 5, ]
// let myArr2 = [6, 7, 8, 9, 10]
// let newArr = myArr.join()
// // console.log(newArr)
// // console.log(typeof newArr)
// console.log("A" , myArr)
// let myn1 = myArr.slice (1,3)
// let myn2 = myArr.splice(1,3)

// console.log(myn1)
// console.log(typeof myn1)



