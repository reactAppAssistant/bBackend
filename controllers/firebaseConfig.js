// firebaseConfig.js
const admin = require('firebase-admin');
const serviceAccount = require('./beni-media-storage-firebase-adminsdk-5vwio-a96567ab4f.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'beni-media-storage.appspot.com',
});

const bucket = admin.storage().bucket();

module.exports = { bucket };
