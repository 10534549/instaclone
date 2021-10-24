const mongoose=require("mongoose");

const PostSchema=mongoose.Schema({
    title:{type:"string",require:true},
    body:{type:"string"},
    image:{type:"string"},
    user:{type:mongoose.Types.ObjectId,ref:"User"}
});

const Post=mongoose.model("Post",PostSchema);

module.exports=Post;