import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send("<h1>tenis 1</h1><h1>tenis 2</h1>")

})

app.listen(3000)