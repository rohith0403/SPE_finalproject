const express = require ("express");
const mongoose = require ("mongoose");
const dotenv = require ("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require('body-parser');
const storage = require('node-persist');

dotenv.config();

const app = express();

const PORT = 5000;

app.listen(PORT, () => console.log(`server started on port : ${PORT}`));

storage.init({
  dir: 'data',
  stringify: JSON.stringify,
  parse: JSON.parse,
  encoding: 'utf8',
}).then(() => {
  console.log('storage initialized');
}).catch((e) => {
  console.log('storage initialization failed');
  console.error(e);
});

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
    origin: ["http://localhost:3000"],
    credentials: true,
}));

app.get("/", (req, res) => {
        res.send("It works");
})

// routes

app.use("/auth", require("./routers/userRouter"));
app.use("/customer", require("./routers/custRouter"));
app.use("/editor", require("./routers/editorRouter"));
