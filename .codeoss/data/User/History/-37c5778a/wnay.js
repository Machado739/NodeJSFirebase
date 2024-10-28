var express = require('express');
var app = express();

app.get('/', function (req, res) {
  
    console.log("HTTP Get Request");
    res.send("HTTP GET Request");
    //Insert key,value pair to database
    firebase.database().ref('/TestMessages').set({TestMessage: 'GET Request'});
    
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


var firebase = require('firebase');
var config = {
    apiKey: "AIzaSyBuzUKNRzl57yEgIjWgDt5r8HY7Z-eTKls",
    authDomain: "nodejs-af02a.firebaseapp.com",
    databaseURL: "https://nodejs-af02a-default-rtdb.firebaseio.com",
    projectId: "nodejs-af02a",
    storageBucket: "nodejs-af02a.appspot.com",
    messagingSenderId: "260422704295",
    appId: "1:260422704295:web:c301687e39272142384f82",
    measurementId: "G-TQP9KRB9Q6"
};
firebase.initializeApp(config);