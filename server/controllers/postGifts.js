const Gift = require('../../database/models/gift.js');

const postGifts = async (req, res) => {
  console.log(req.body);
  const newGift = new Gift(req.body);
  await newGift.save();
  res.send(201);
};
module.exports = postGifts;
