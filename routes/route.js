const { initialPhotos, getMorePhotos, accountInfo } = require('../routeHelpers/routeHelper.js');

module.exports = (app) =>{

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
  
  app.get('/api/photos', initialPhotos);

  app.get('/api/accountInfo', accountInfo);

  app.get('/api/morePhotos/:paginationId', getMorePhotos);
};