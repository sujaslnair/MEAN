const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/ProductDb');
const Schema = mongoose.Schema;
const doctorSchema = new Schema({
    // name:String,
    // email:String,

    email: {
        type: String,
        required: true,
        unique: true
   },
   name: {
     type: String,
     required: true,
    //  unique: true
   },

    id:String,
    mno:Number,
    address:String,
    place:String,   
    pwd:String,   
    special:String,
    timing:String,
    slot1:String,
    slot2:String,
    slot3:String,
    slot4:String,
    date:String,
    username:String

});

module.exports= mongoose.model('doctor',doctorSchema,'doctors');