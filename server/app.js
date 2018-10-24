'use strict';

var express = require('express');
var router = express.Router();
var app = express();
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');
var data = require('./data.js');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/dates/:id', function (req, res) {
	res.json(data.List().find(x => x.id == req.params.id));
})

app.get('/dates', function (req, res) { 
  res.json(data.List());
})

app.listen(1337, function () {
  console.log("API running on http://localhost:1337");
  console.log("API documentation on http://localhost:1337/api-docs");
  console.log("run npm test for unit testing");
})

module.exports = router;