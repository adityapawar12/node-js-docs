const EventEmitter = require("node:events");

const eventEmitter = new EventEmitter();

// add a callback function that's going to be executed when the event start is triggered
eventEmitter.on("start", () => {
  console.log("started");
});

// used to trigger an event start
eventEmitter.emit("start");

// You can pass arguments to the event handler by passing them as additional arguments to emit()
eventEmitter.on("start-new", (start, end) => {
  console.log(`started from ${start} to ${end}`);
});
eventEmitter.emit("start-new", 1, 100);
