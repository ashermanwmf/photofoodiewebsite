const { initialPhotos, getMorePhotos } = require('../routeHelpers/routeHelper');

module.exports = (app) =>{

  app.get('/api/photos', initialPhotos);
  //app.get('/morePhotos/:paginationId', getMorePhotos)
};