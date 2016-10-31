var express = require('express'),
   router = express.Router(),
   config = require('./config');

// Version check
router.get('/version', function(request, response) {
   response.json({ message: config.version });
});

module.exports = router;
