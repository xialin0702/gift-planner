const mongoose = require('mongoose');

const giftsSchema = new mongoose.Schema({
  nickName: String,
  occassion: String,
  item: String,
  photo:String,
  price:Number,
  url: String,
  gifted: Boolean
});

const Gift = mongoose.model('gift', giftsSchema);

module.exports = Gift;