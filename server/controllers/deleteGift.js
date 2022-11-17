const Gift = require('../../database/models/gift.js');

const deleteGift = async (req, res) => {
  const result = await Gift.deleteOne({_id: req.body._id});
  res.send(null, 200);
};
module.exports = deleteGift;
