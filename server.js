const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const fs = require('fs');
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(routes);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})