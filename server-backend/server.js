const express = require('express');
const mongoose = require('mongoose');
const userRouter = require("./routes/userRouter.js");
const cors = require("cors");
const dotenv = require("dotenv");
const { spawn } = require('child_process');

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

app.post('/addiction',  (req, res) => {
  const {
    missedSchoolOrWork = parseInt(req.body.missedSchoolOrWork),
    liedAboutTime = parseInt(req.body.liedAboutTime),
    prioritizedHygiene = parseInt(req.body.prioritizedHygiene),
    physicalSymptoms = parseInt(req.body.physicalSymptoms),
    playFrequency = parseInt(req.body.playFrequency),
    playDuration = parseFloat(req.body.playDuration).toFixed(1),
    spending = parseFloat(req.body.spending).toFixed(2),
    thinkingFrequency = parseInt(req.body.thinkingFrequency),
    timeLossFrequency = parseInt(req.body.timeLossFrequency),
    negativeConsequences = parseInt(req.body.negativeConsequences),
  } = req.body;

  const inputData = [
      missedSchoolOrWork,
      liedAboutTime,
      prioritizedHygiene,
      physicalSymptoms,
      playFrequency,
      playDuration,
      spending,
      thinkingFrequency,
      timeLossFrequency,
      negativeConsequences,
  ];

  const oneDArray = [];
  oneDArray.push(...inputData);
  const twoDInput = [oneDArray];

  const python = spawn('python', ['module_loader.py']);

  python.stdout.on('data', function (data) {
    console.log(data.toString());
    res.send(data.toString());
  });

  python.stdin.write(JSON.stringify(twoDInput));
  python.stdin.end();

  python.on('error', function (err) { 
    console.log(err);
  });

  python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
  })   
});

connectDB();

app.listen(port, () => {
  console.log("Server started on port " + port);
});
