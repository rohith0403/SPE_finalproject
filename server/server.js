const express = require ("express");
const path = require('path');

const app = require("./app");
const PORT = 5000;

var log4js = require("log4js");



// dotenv.config();

// app = express();

// const PORT = 5000;




app.listen(PORT, () => console.log(`server started on port : ${PORT}`));

// app.use(express.static(path.resolve(__dirname, 'build')));


// // All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'build', 'index.html'));

//   });
