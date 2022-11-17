const Gift = require('../../database/models/gift.js');

const getOccassions = async (req, res) => {
  const result = await Gift.find({}).distinct('occassion')
  res.send(result);
};
module.exports = getOccassions;
