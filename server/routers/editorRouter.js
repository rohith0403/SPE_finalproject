const router = require("express").Router();
const auth = require("../middleware/auth");
// const storage = require('node-persist');
const EditorContent = require("../models/contentModel")

router.post("/", async (req, res) => {
    try {
        
        let getContent = await EditorContent.findOne({userId:req.body.userId});
        // console.log("Get content is " + getContent);
        if(getContent){
            // console.log("boohoo");
           const updatedContent = await EditorContent.findOneAndUpdate({userId:req.body.userId}, req.body, 
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
            await EditorContent.create(req.body);      
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
        const editorContent = await EditorContent.findOne({userId:req.query.userId});
        // console.log("editor content is " + editorContent);
        if(editorContent === null){
            res.status(200).send()
        }
        else{
            // console.log("asdasdad");
            res.json(editorContent.content);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send();        
    }
});

module.exports = router;


