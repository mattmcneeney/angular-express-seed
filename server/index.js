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

/* Routing - API */
app.use('/api', router);

/* Routing - Static client files */
app.use('/js', express.static(path.join(__dirname, '../client/js')));
app.use('/images', express.static(path.join(__dirname, '../client/images')));
app.use('/css', express.static(path.join(__dirname, '../client/css')));
app.use('/views', express.static(path.join(__dirname, '../client/views')));

/* Routing - Always serve index.html since we're using AngularJS */
app.all('/*', function(request, response) {
   response.sendFile('index.html', { root: path.join(__dirname, '../client') });
});

/* Start the server */
app.listen(config.port, function() {
   console.log('Server listening on port %s', config.port);
});
