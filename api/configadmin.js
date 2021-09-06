const admin = require('firebase-admin');



var serviceAccount = require("./desafioalest-58c2a-firebase-adminsdk-jbstv-4e74c56bce.json");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://desafioalest-58c2a.firebaseapp.com'
});


const db = admin.firestore(); 
const usersDb = db.collection('product-list');

module.exports=usersDb;