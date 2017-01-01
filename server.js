const express           = require('express');
const bodyParser        = require('body-parser');
const fallback          = require('express-history-api-fallback');
const webpackMiddleWare = require('./webpackMiddleWare/config.js');
const routes            = require('./routes/route.js');
const app               = express();

const root = `${__dirname}/src/client/public`;

app.set('port', 3000);

if(process.env.NODE_ENV !== 'test'){
  webpackMiddleWare(app); 
}

// middle ware for parsing data and serving public files
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(root)); 

routes(app);

app.use(fallback('index.html', {root}));

app.listen(app.get('port'), () =>{
  console.log(`listening on port: ${app.get('port')}`);
});
