const Gift = require('../../database/models/gift.js');

const getUsers = async (req, res) => {
  const result = await Gift.find({}).distinct('nickName')
  res.send(result);
};
module.exports = getUsers;
