import fs from "node:fs";

const startSync = new Date();

const dataSync = fs.readFileSync("./file.txt", "utf-8"); // blocks here until file is read

const endSync = new Date();

const benchmarkSync = endSync.getTime() - startSync.getTime();
console.log("data sync : ", benchmarkSync, dataSync.slice(0, 100));
moreWork(); // will run after console.log

const startAsync = new Date();
fs.readFile("./file.txt", "utf-8", (err, dataAsync) => {
  if (err) throw err;

  const endAsync = new Date();

  const benchmarkAsync = endAsync.getTime() - startAsync.getTime();

  console.log("data async : ", benchmarkAsync, dataAsync.slice(0, 100));
});
moreWork(); // will run before console.log

function moreWork() {
  console.log("Some Moe Wok");
}

// // Wrong way to write async non blocking i/o code.
// // fs.unlinkSync() is likely to be run before fs.readFile(), which would delete file.md before it is actually read
// // We can see that file is deleted even before the console log is fully done printing data.
// fs.readFile("./file.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// fs.unlinkSync("./file.txt");

// Right way to write async non blocking i/o code.
// A better way to write this, which is completely non-blocking and guaranteed to execute in the correct order is
// We can see that file is deleted after the console log is fully done printing data.
fs.readFile("./file.txt", "utf-8", (readFileErr, data) => {
  if (readFileErr) throw readFileErr;
  console.log(data.slice(0, 100));
  fs.unlink("./file.txt", (unlinkErr) => {
    if (unlinkErr) throw unlinkErr;
  });
});
