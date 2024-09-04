const express = require("express");
const hostname = "127.0.0.1";
const app = express();
app.use(express.json());
const path = require("path");
const flashRoutes = require("./Routes/flashcardroutes")
const cors = require("cors")
app.use(cors({
    origin: 'http://localhost:5173',
  }));
const dotenv = require("dotenv").config();
app.use(express.static(path.join(__dirname, "dist")));
const mongoose = require("mongoose");
app.use("/",flashRoutes)
mongoose.connect(process.env.MONGO_URL,{dbName:"Flash-Card"});
const database = mongoose.connection;
database.once("open",()=>{
    console.log("Connected to Mongodb");
});
app.listen(process.env.PORT, hostname, () => {
    console.log("Listening to port :" + process.env.PORT);
});