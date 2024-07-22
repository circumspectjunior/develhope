/*
function fullName(name) {
  let nameResult = `"Hello" ${name}`;

  return nameResult;
}

console.log(fullName("Gift Ojo")); */

//This is another way of naming the function witch is called function expression
/*
let fullName = function (name) {
  let nameResult = `Hello ${name}`;

  return nameResult;
};

console.log(fullName("Gift Ojo")); */

//this is an example of a callback function
let log = function (result) {
  console.log("the result is: " + result);
};

function addition(a, b, c) {
  let num = c(a + b);
  return num;
}

console.log(addition(3, 4, log));

//there is another way of writing function which is called Arrow Function it can be writing in one line.
//let log = (result) => console.log("The result is " + result);

let sum = (a, b) => console.log(a + b);

console.log(sum(3, 6));

//example two of a callback function
function sayHelloName(callback) {
  console.log("Hello");
  setTimeout(callback, 4000);
}

let printName = function () {
  console.log("Gift");
};

console.log(sayHelloName(printName));

/*

let rollDice = function () {
  let roll = Math.floor(Math.random() * 10);
  console.log(roll);
};

function callFiveTimes(f) {
  for (let i = 0; i < 5; i++) {
    f();
  }
}

console.log(callFiveTimes(rollDice)); */
