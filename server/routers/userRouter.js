const router = require ("express").Router();
const User = require ("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const log4js = require("log4js");
log4js.configure({
    appenders: { Mylogger: { type: "file", filename: "Logging.log" } },
    categories: { default: { appenders: ["Mylogger"], level: "INFO" }}
});

const logger = log4js.getLogger("Mylogger");

// register

router.post("/", async (req, res) => {
    // res.send("test");
    // console.log(req.body);
    try{
        const{username, password} = req.body;

        if (!username || !password){
            logger.error("Please enter all required fields.")
            alert("Please enter all fields")
            return res
                .status(400)
                .json({ errorMessage: "Please enter all required fields." });
        }
          
  
        if (password.length < 6){
            logger.error("Please enter a password of at least 6 characters.")
            return res.status(400).json({
            errorMessage: "Please enter a password of at least 6 characters.",
            });
        }
        const existingUser = await User.findOne({ username });
        if (existingUser){
            logger.error("username already exists "+username)
            return res.status(400).json({
            errorMessage: "An account with this username already exists.",
            });
        }
        logger.info("logged in "+username);
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        // console.log(passwordHash);

        // save users to database

        const newUser = new User({
            username, passwordHash
        });
        
        const savedUser = await newUser.save();

        //sign the token
        const token = jwt.sign(
            {
            user : savedUser._id
            },
             process.env.JWT_SECRET
        );

        console.log(token);
        
        // send the token in a HTTP-only cookie
        
        res.cookie("token", token, {
            httpOnly: true,
        }).send(savedUser);

        

    }
    catch(err){
        console.log(err);
        res.status(500).send();
    }
});


// login

router.post("/login", async (req, res) => {
    try{
        const{username, password} = req.body;
        
        // validate
        if (!username || !password){
            logger.error("Please enter all required fields.")
        return res
          .status(400)
          .json({ errorMessage: "Please enter all required fields." });
        }    
        const existingUser = await User.findOne({ username });
        if (!existingUser){
            logger.error(username +" user does not exist")
            return res.status(401).json({
            errorMessage: "Wrong username or password!!!",
            });
        }
        const passwordCorrect = await bcrypt.compare(password, existingUser.passwordHash);
        if (!passwordCorrect){
            logger.error("Wrong password for "+username)
            return res.status(401).json({
            errorMessage: "Wrong username or password!!!",
            });
        }
        // console.log("Reached above looged in");
        logger.info("Logged in "+ username);
        // sign the token

        const token = jwt.sign(
            {
            user : existingUser._id
            },
            process.env.JWT_SECRET
        );

        // send the token in a HTTP-only cookie
        
        res.cookie("token", token, {
            httpOnly: true,
            
        }).send(existingUser._id);
    }
    catch(err){
        console.log(err);
        res.status(500).send();
    }
});

router.get("/logout", (req, res) =>{
    //need to add username it is showing error some how
    logger.info("logged out ");
    res.cookie("token", "", {
        expires : new Date(0)
    })
    .send();
});

router.get("/loggedIn", (req, res) =>{
    try {
        const token = req.cookies.token;
        if (!token) return res.json(false);
        jwt.verify(token, process.env.JWT_SECRET);
        res.json(true);

      } catch (err) {
        logger.error("Login failed")
        console.error(err);
        res.json(false);
        }
    });
    

module.exports = router;

