const EventEmitter = require("events");
const celebrity = new EventEmitter();

const spectator = new EventEmitter();

// Sunscribe to the celebrity for Observer 1
celebrity.on("race", (result) => {
  if (result === "win") {
    console.log("Congratulations! You are the best!");
  }
});

// Sunscribe to the celebrity for Observer 2
celebrity.on("race", (result) => {
  if (result === "win") {
    console.log("Boo I could have done better than that!");
  }
});

spectator.on("finish", () => {
  console.log("Good job, you were fast");
});

process.on("exit", (code) => {
  console.log("Process exit event with code: ", code);
});

celebrity.emit("race", "win");
spectator.emit("finish");
