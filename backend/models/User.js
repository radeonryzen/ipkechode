const mongoose = require("mongoose")
const Schema = mongoose.Schema;

let User = new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }

    },
    {collection:"Users"}
);
module.exports = mongoose.model("user",User)