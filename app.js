const express = require('express')
const app = express()
const port = 3000
var path = require('path');

app.use("/public", express.static('assets'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'/assets/html/main.html'))})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})