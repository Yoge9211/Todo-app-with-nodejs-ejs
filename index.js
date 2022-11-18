const express = require('express')

// set up app and server
const app = express()
const port = 3000

// middlewares
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.urlencoded())

//  accesing static files
app.use(express.static('assets'))

// USING ROUTES
app.use('/', require('./routes'))

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in server is:${err}`)
  } else {
    console.log(`Server is running on port:${port}`)
  }
})
