var express = require('express'),
   bodyParser = require('body-parser'),
   path = require('path'),
   config = require('./config'),
   router = require('./router');

/* Create the server */
var app = express();

/* Configuration */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));

/* Routing - Static client files */
app.use(express.static(path.join(__dirname, '../client')));

/* Routing - API */
app.use('/api', router);

/* Start the server */
app.listen(config.port, function() {
   console.log('Server listening on port %s', config.port);
});
