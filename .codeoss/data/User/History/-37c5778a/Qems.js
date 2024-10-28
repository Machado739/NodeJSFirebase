const firebase = require('firebase');
const express = require('express');
const app = express();

const config = {
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
const database = firebase.database();

app.get('/', (req, res) => {
    console.log("HTTP Get Request");
    database.ref('/TestMessages').set({ TestMessage: 'GET Request' });
    res.send("HTTP GET Request");
});

app.put('/', (req, res) => {
    console.log("HTTP Put Request");
    res.send("HTTP PUT Request");
});

app.post('/', (req, res) => {
    console.log("HTTP POST Request");
    res.send("HTTP POST Request");
});

app.delete('/', (req, res) => {
    console.log("HTTP DELETE Request");
    res.send("HTTP DELETE Request");
});

const server = app.listen(8080, () => {
    console.log("App listening at http://localhost:8080");
});
