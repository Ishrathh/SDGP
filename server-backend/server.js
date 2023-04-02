const express = require("express");
const mongoose = require("mongoose");
const { default: userRouter } = require("./routes/userRouter.js");

dotenv.config();
const uri = "mongodb+srv://test:123@sdgp.nzchh7c.mongodb.net/?retryWrites=true&w=majority";
const port = process.env.PORT || 5000;

const app = express();

app.use((req, res) =>{
  res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With, Content-Type, Authorization'
  );
  next();
})

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

app.use(express.json({ limit: '10mb'}))
app.use('/register', userRouter)
app.use('/', (req, res) => res.json({message:'You have accessed the API'}));
app.use((req, res) =>
  res.status(404).json({success:false, message:'Not found!'})
); 

connectDB();

app.listen(8000, () => {
  console.log("Server started on port 8000");
});