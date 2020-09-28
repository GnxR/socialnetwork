'use strict'

var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.sendFile('/profile/index.html', { root: __dirname  });
})


module.exports = router;