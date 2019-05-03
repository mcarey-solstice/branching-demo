/**
 * @author mcarey-solstice
 */

'use strict';

const fs = require('fs')
const express = require('express')

const port = process.env.PORT || 3000
const version = fs.readFileSync('VERSION').toString().trim()

let app = express()

app.get('/', function (req, res, next) {
  return res.send({"message": "hello world"})
})

app.get('/version', function(req, res, next) {
  return res.send({"version": version})
});

app.get('/port', function(req, res, next) {
  return res.send({"port": port})
})

app.listen(port)
