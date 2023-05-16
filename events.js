const EventEmitter = require("events");
const celebrity = new EventEmitter();

// Sunscribe to the celenrity for Observer 1
celebrity.on("race win", () => {
  console.log("Congratulations! You are the best!");
});

// Sunscribe to the celenrity for Observer 2
celebrity.on("race win", () => {
  console.log("Boo I could have done better than that!");
});

celebrity.emit("race win");
