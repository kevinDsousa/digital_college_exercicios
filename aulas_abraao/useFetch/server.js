//const express = require('express')
import express from 'express'
const app = express()

const PORT = 9000;

app.get('/', function (req, res) {
  console.log(`Server in running: ${PORT}`);
  res.send('home')
})

app.get('/teste', function (req, res) {
  res.send('teste')
})

app.use(function(err, req, res, next) {
  err ? (console.error(err.stack), res.status(500).send('Something broke!')) : next()
});


app.listen(PORT)