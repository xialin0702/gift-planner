const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const db = require('../database/index.js')
const {
  getGifts,
  postGifts,
  postGiftUrl,
  getOccassions,
  getUsers,
  deleteGift,
  putGifted
} = require('./controllers/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/gifts',getGifts);

app.post('/gifts', postGifts);

app.post('/gift', postGiftUrl);

app.get('/occassions', getOccassions);

app.get('/users', getUsers);

app.delete('/gift', deleteGift);

app.put('/gift', putGifted);


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
