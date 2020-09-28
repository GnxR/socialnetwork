const { router, get } = require('microrouter')

const index = (req, res) => {
  res.end('Welcome')
}
const pages = (req, res) => {
return JSON.stringify({
  "query":req.query,
  "params": req.params
})
}

module.exports = router(get('/', index),
get('/pages/:sex/*', pages)
  
)