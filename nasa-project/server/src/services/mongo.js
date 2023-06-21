const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://nasa-api:O29XQ3dPYrH3Q5Jg@cluster0.u8rse9b.mongodb.net/nasa?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  mongoose.connect(MONGO_URL);
}

module.exports = { mongoConnect };
