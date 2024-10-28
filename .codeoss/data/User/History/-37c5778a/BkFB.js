const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nodejs-af02a-default-rtdb.firebaseio.com"
});

const db = admin.database();

const express = require("express");
const app = express();

app.get('/', (req, res) => {
    db.ref('/TestMessages').set({ TestMessage: 'GET Request' });
    res.send("HTTP GET Request");
});

const server = app.listen(8080, () => {
    console.log("App listening at http://localhost:8080");
});
