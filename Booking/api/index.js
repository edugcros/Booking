const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
dotenv.config();

const URL = process.env.MONGO

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
});

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use('/Images', express.static('./Images'));


app.use("/api/auth", require ("./routes/auth.js") );
app.use("/api/users", require("./routes/users.js"));
app.use("/api/hotels", require ("./routes/hotels.js"));
app.use("/api/rooms", require ("./routes/rooms.js"));

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(3000, () => {
  console.log("Connected to backend.");
});
