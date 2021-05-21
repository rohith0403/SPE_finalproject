const router = require("express").Router();
const auth = require("../middleware/auth");
// const storage = require('node-persist');
const BooksModel = require("../models/booksModel")

router.post("/", async (req, res) => {
    try {
        
        let getContent = await BooksModel.findOne();
        // console.log("Get content is " + getContent);
        if(getContent){
           const updatedContent = await BooksModel.findOneAndUpdate(req.body, 
            {
                new: true,
                runValidators: true,
                returnOriginal:false
            }
            )
            await updatedContent.save();
            // console.log("boohoo" + updatedContent.content + "  sdfsf " + req.body.content);
        }
        else{
            // const {userId,content}=req.body;
            await BooksModel.create(req.body);      
        //   await newContent.save();

        }
        res.status(200).send();
        
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
  });


router.get("/", async (req, res) => {
    try {
        // console.log("userId is "+ req.query.userId);
        const booksModel = await BooksModel.findOne();
        // console.log("editor content is " + editorContent);
        if (booksModel === null) {
          res.status(200).send();
        } else {
          // console.log("asdasdad");
          res.json(booksModel.books);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send();        
    }
});

module.exports = router;


