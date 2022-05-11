const { Router } = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
var cors = require('cors');
//Import routes

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const tasks = require("./routes/tasks");

dotenv.config();
//Connect to DB
mongoose.connect(process.env.DB_CONNECT, () => console.log("connected to db!"));


//Middleware
app.use(express.json());
app.use(cors());


//cores access
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });


//Route Middleware
app.use("", authRoute);
app.use("", userRoute);
app.use("/api/tasks", tasks);
app.listen(3000, () => console.log("le server marche bien "));
