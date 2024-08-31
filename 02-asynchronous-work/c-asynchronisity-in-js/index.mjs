import fs from "node:fs";

// Synchronous JS code.
const a = 1;
const b = 2;
const c = a * b;
console.log(c);
doSomething();

function doSomething() {
  console.log("Do something");
}

// Callbacks
setTimeout(() => {
  // runs after 2 seconds
  console.log("Do something after 2 seconds");
}, 2000);

// Handling errors in callbacks using error-first callbacks
fs.readFile("./file.json", "utf-8", (err, data) => {
  if (err) {
    // handle error
    console.log(err);
    return;
  }
  // no errors, process data
  console.log(data);
});

// The problem with callbacks
fs.readFile("./file.json", "utf-8", (err, data) => {
  setTimeout(() => {
    // runs after 3 seconds
    console.log("Do something after 3 seconds to show callback hell");
    setTimeout(() => {
      // runs after 4 seconds
      console.log("Do something after 4 seconds to show callback hell again");
      setTimeout(() => {
        // runs after 5 seconds
        console.log("Do something after 5 seconds to show callback hell again");
      }, 1000);
    }, 1000);
  }, 3000);
});
