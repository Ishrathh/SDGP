const express = require('express');
const mongoose = require('mongoose');
const userRouter = require("./routes/userRouter.js");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const uri = process.env.MONGO_URI;
const port = process.env.PORT || 8000;

const app = express();

app.use(cors());

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

app.use(express.json({ limit: '10mb'}))
app.use('/user', userRouter)

connectDB();

app.listen(port, () => {
  console.log("Server started on port " + port);
});
