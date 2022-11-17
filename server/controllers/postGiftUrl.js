const Gift = require('../../database/models/gift.js');
const axios = require('axios')
const xpath = require('xpath');
const dom = require('xmldom').DOMParser

const postGiftUrl = async (req, res) => {
  const { data } = await axios.get(req.body.url)
  const pageXml = new dom().parseFromString(data)
  let priceElement, item, photo
  if (req.body.url.includes('www.amazon.com')) {
    priceElement = xpath.select1('//span[@id="priceblock_ourprice"]/span[@class="a-size-medium a-color-price"]/text()', pageXml)
    if (!priceElement) {
      priceElement = xpath.select1('//span[@class="a-offscreen"]/text()', pageXml)
    }
    item = xpath.select1('//span[@id="productTitle"]/text()', pageXml).nodeValue.trim()
    photo = xpath.select1('//div[@id="imgTagWrapperId"]/img/@src', pageXml).value
  }
  const gift = {
    ...req.body,
    item,
    photo,
    price: Number(priceElement.nodeValue.split('$')[1]),
    url: req.body.url,
    gifted:false
  }
  console.log(gift)
  let existingGift = await Gift.findOne({
    nickName: req.body.nickName,
    occassion: req.body.occassion,
    item
  })
  if (!existingGift) {
    existingGift = await Gift.create(gift)
  }
  res.send(existingGift, 201);
};
module.exports = postGiftUrl;
