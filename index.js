const express = require('express')
const app = express()
const port = 3000

app.use("/public", express.static('assets'))

app.get('/', (req, res) => {
  res.sendFile("/assets/html/main.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})