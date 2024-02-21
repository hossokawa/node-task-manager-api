const mongoose = require("mongoose");

const connStr =
  "mongodb+srv://hossokawa:B47f5pq91@cluster0.jvzpmfu.mongodb.net/NodeTaskManager?retryWrites=true&w=majority";

const connectDB = (uri) => {
  return mongoose.connect(uri);
};

module.exports = connectDB;
