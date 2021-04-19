const mongoose = require("mongoose");

const editorContentSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },    
    content: { type: String, required: true },
});

const EditorContent = mongoose.model("editorContent", editorContentSchema);

module.exports = EditorContent;
