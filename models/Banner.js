const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema(
{
    title:{
        type:String,
        required:true
    },

    subtitle:{
        type:String
    },

   //

    buttonText:{
        type:String
    },

    buttonLink:{
        type:String
    },

    active:{
        type:Boolean,
        default:true
    }

},{timestamps:true});

module.exports = mongoose.model("Banner",bannerSchema);
