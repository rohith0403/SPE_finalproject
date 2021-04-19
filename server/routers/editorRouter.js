const router = require("express").Router();
const auth = require("../middleware/auth");
// const storage = require('node-persist');
const EditorContent = require("../models/contentModel")

router.post("/", async (req, res) => {
    try {
        
        let getContent = await EditorContent.findOne({userId:req.body.userId});  
        if(getContent){
           await EditorContent.findOneAndUpdate({userId:req.body.userId}, req.body, {
                new: true,
                runValidators: true,
            })
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
              const editorContent = await EditorContent.findOne({userId:req.body.userId});
              res.json(editorContent.content);
    } catch (err) {
        console.log(err);
        res.status(500).send();        
    }
});

module.exports = router;


