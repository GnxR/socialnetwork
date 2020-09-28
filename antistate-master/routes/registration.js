'use strict'

var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.sendFile('/register/index.html', { root: __dirname  });
})


module.exports = router;