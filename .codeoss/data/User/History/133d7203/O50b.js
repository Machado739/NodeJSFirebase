var express = require('express'); //import express 
var app = express();

//to handle HTTP get request
app.get('/', function (req, res) {
  console.log("Get Request");
  res.send("Get Request");
});

//start server on port: 8080
var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("server listening at http://%s:%s", host, port);
});

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log("HTTP Get Request");
  res.send("HTTP GET Request");
});

app.put('/', function (req, res) {
  console.log("HTTP Put Request");
  res.send("HTTP PUT Request");
});

app.post('/', function (req, res) {
  console.log("HTTP POST Request");
  res.send("HTTP POST Request");  
});

app.delete('/', function (req, res) {
  console.log("HTTP DELETE Request");
  res.send("HTTP DELETE Request");
});

var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});