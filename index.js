'use strict'
const app = require('./server')
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Your server is listening on port ${PORT}`)
})
