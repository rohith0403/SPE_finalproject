const express = require ("express");
const mongoose = require ("mongoose");
const dotenv = require ("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
dotenv.config();

const app = express();

const PORT = 5000;

app.listen(PORT, () => console.log(`server started on port : ${PORT}`));

mongoose.connect(process.env.MDB_CONNECT, 
    {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true,
    }, 
    (err) => {
    if(err) return console.error(err)
    console.log("Connected ot MongoDB");
})

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));

app.get("/", (req, res) => {
        res.send("It works");
})

// routes

app.use("/auth", require("./routers/userRouter"));
app.use("/customer", require("./routers/custRouter"));
