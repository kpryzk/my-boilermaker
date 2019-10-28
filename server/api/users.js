const router = require('express').Router()

router.get('/', async(req, res, next) => {
  return "users"
})

module.exports = router
