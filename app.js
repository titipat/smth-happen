let port = process.env.PORT || 3000

let express = require('express')
let app = express()

app.get('/shouldReturnSuccess', (req, res) => {
  res.json({
    message: 'Success'
  })
})

app.get('/shouldReturnInternalServerError', (req, res) => {
  res.status(500).json({
    message: 'Internal server error'
  })
})

app.use(express.static('public'))

app.listen(port)