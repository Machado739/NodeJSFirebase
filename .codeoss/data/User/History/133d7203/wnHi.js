const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-database-name.firebaseio.com"
});

const db = admin.firestore();

async function testConnection() {
  try {
    await db.collection("testCollection").add({
      name: "Test User",
      email: "testuser@example.com"
    });
    console.log("Conexión a Firebase exitosa.");
  } catch (error) {
    console.error("Error al conectar:", error);
  }
}

testConnection();
