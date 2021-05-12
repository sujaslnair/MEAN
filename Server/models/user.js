

const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/ProductDb');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    // uname:String,
    // uemail:String,

    uemail: {
        type: String,
        required: true,
        unique: true
   },



   uname: {
     type: String,
     required: true,
      unique: true
   },

    uid:String,
    umno:Number,
    uplace:String,
    uage:Number,
    upwd:String
});

module.exports= mongoose.model('user',userSchema,'users');