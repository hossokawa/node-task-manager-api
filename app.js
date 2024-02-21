const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connectDB");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/error-handler");
require("dotenv").config();

//middleware
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(
      process.env.PORT,
      console.log(`Server starting on PORT ${port}...`),
    );
  } catch (err) {
    console.log(err);
  }
};

start();
