"use strict";

// setTimeout()
const id = setTimeout(() => {
  console.log("setTimeout");
}, 2000);

// I changed my mind
clearTimeout(id);

const myFunction = (firstParam, secondParam) => {
  console.log("2000 >>> ", firstParam, secondParam);
};

// runs after 3 seconds
setTimeout(myFunction, 3000, "Hello ", "Peter");

setTimeout(() => {
  console.log("after ");
}, 0);
console.log("before ");

// setInterval
const intervalId = setInterval(() => {
  // runs every 2 seconds
  console.log("2000");
  clearInterval(intervalId);
}, 2000);

// Recursive setTimeout
const myFunction2 = (num) => {
  if (num < 2) {
    console.log(num);
    num++;
    setTimeout(myFunction2, 1000, num);
  }
};
setTimeout(myFunction2, 1000, 0);

// setImmediate
setImmediate(() => {
  console.log("setImmediate");
});
