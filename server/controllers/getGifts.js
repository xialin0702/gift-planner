const Gift = require('../../database/models/gift.js');

const getGifts = async (req, res) => {
  const result = await Gift.find(req.body);
  res.send(result);
};
module.exports = getGifts;
