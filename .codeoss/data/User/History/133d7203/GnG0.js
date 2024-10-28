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

const db = require("./firebaseConfig");

async function testConnection() {
  try {
    const docRef = db.collection("testCollection").doc("testDoc");
    await docRef.set({ message: "Hello, Firebase!" });
    console.log("Conexión exitosa: Documento agregado");
  } catch (error) {
    console.error("Error al conectar con Firebase:", error);
  }
}

testConnection();

