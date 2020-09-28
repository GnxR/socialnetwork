
'use strict'

var express = require('express');
var router = express.Router();
//const controller = require('../controller/registration')


/registration/

router.use(function(req, res, next) {
    // do logging
    console.log('Something.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get("/", (req, res) => {
    res.sendFile('/ignes/index.html', { root: __dirname  });
})


module.exports = router;

