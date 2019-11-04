const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DirectorSchema = new Schema({
  
  name: {
    type: String,
    required: [true, "`{PATH}` alanı zorunludur."]
  },
  surname: {
    type:String,
    required:[true, "`{PATH}` alanı zorunludur."]
  },
  bio: {
    type:String,
    required:[true, "`{PATH}` alanı zorunludur."]
  },
  createdAt: {
      type:Date,
      default:Date.now
  }
});

module.exports=mongoose.model('director',DirectorSchema);