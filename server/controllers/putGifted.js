const Gift = require('../../database/models/gift.js');

const putGifted = async (req, res) => {
  const result = await Gift.findOneAndUpdate({_id: req.body.data._id},{gifted:req.body.data.gifted});
  res.send(null, 200);
};
module.exports = putGifted;
