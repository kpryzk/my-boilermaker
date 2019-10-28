const router = require('express').Router()

router.use('/users', require('./users'))

router.use((req, res, next) => {
  const err = new Error('Not found')
  err.staus = 404
  next(err)
})

module.exports = router
