const express = require ("express");
const mongoose = require ("mongoose");
const dotenv = require ("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require('body-parser');
const storage = require('node-persist');
const path = require('path');
var log4js = require("log4js");


dotenv.config();

const app = express();

const PORT = 5000;



mongoose.connect(process.env.MDB_CONNECT, 
    {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true,
    }, 
    (err) => {
    if(err) return console.error(err)
    console.log("Connected to MongoDB");
})

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors({
    origin: ["http://localhost:5000"],
    // origin: ["http://localhost:3000"],
    credentials: true,
}));

app.use("/auth", require("./routers/userRouter"));
app.use("/customer", require("./routers/custRouter"));
app.use("/editor", require("./routers/editorRouter"));
app.use("/books", require("./routers/booksRouter"));


module.exports=app