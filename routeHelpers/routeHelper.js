const request                     = require('axios');
const { CLIENT_ID, ACCESS_TOKEN } = require('../instaConfig/config.js');

module.exports = {
  initialPhotos(req, res, next) {
    request.get(`https://api.instagram.com/v1/users/${CLIENT_ID}/media/recent/?access_token=${ACCESS_TOKEN}`)
      .then((data) =>{
        console.log('number of query calls left: ', data.headers['x-ratelimit-remaining']);
        res.send(data.data);
      })
      .catch((err) =>{
        res.status(404).send(new Error("data not found at this time"));
      });
  },
  getMorePhotos(req, res, next) {
    console.log(req.params, ' paramaters to find more info');
  },
  accountInfo(req, res, next) {
    request.get(`https://api.instagram.com/v1/users/${CLIENT_ID}/?access_token=${ACCESS_TOKEN}`)
      .then((data) =>{
        console.log('number of query calls left: ', data.headers['x-ratelimit-remaining']);
        res.send(data.data);
      })
      .catch((err) =>{
        res.status(404).send(new Error("data not found at this time"));
      });
  }
};
