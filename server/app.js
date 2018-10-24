'use strict';

var express = require('express');
var router = express.Router();
var app = express();

const datesList = [
  	{ 
      id: 1,
  		date: new Date().setDate(new Date().getDate() - 2),
  		appointments: [
  			{
  				startTime: '08:00',
  				endTime: '09:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '09:00',
  				endTime: '10:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '12:00',
  				endTime: '13:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '15:00',
  				endTime: '19:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '20:00',
  				endTime: '21:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  		]
  	},
  	{ // d.setDate(d.getDate()-5);
      id: 2,
  		date: new Date().setDate(new Date().getDate() - 1),
  		appointments: [
  			{
  				startTime: '08:00',
  				endTime: '09:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '09:00',
  				endTime: '10:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '12:00',
  				endTime: '13:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '15:00',
  				endTime: '19:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '20:00',
  				endTime: '21:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  		]
  	},
  	{ 
      id: 3,
  		date: new Date(),
  		appointments: [
  			{
  				startTime: '08:00',
  				endTime: '09:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '09:00',
  				endTime: '10:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '12:00',
  				endTime: '13:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '15:00',
  				endTime: '19:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '20:00',
  				endTime: '21:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  		]
  	},
  	{ 
      id: 4,
  		date: new Date().setDate(new Date().getDate() + 1),
  		appointments: [
  			{
  				startTime: '08:00',
  				endTime: '09:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '09:00',
  				endTime: '10:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '12:00',
  				endTime: '13:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '15:00',
  				endTime: '19:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '20:00',
  				endTime: '21:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  		]
  	},
  	{ 
      id: 5,
  		date: new Date().setDate(new Date().getDate() + 2),
  		appointments: [
  			{
  				startTime: '08:00',
  				endTime: '09:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '09:00',
  				endTime: '10:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '12:00',
  				endTime: '13:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '15:00',
  				endTime: '19:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  			{
  				startTime: '20:00',
  				endTime: '21:00',
  				subject: 'Test 1',
  				Description: 'This is a test description'
  			},
  		]
  	},
  ];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/dates/:id', function (req, res) {
	res.json(datesList.find(x => x.id == req.params.id));
})

app.get('/dates', function (req, res) { 
  res.json(datesList);
})

app.listen(1337, function () {
  
})

module.exports = router;