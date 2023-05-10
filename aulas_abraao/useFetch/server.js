//const express = require('express')
import express from 'express'
const app = express()

app.get('/', function (req, res) {
  console.log(res);
})

app.listen(3000)