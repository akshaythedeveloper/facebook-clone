import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzyRyo6MpnrgsF3CMJ0iBowoZnn07c6dE",
  authDomain: "facebook-clone-78688.firebaseapp.com",
  projectId: "facebook-clone-78688",
  storageBucket: "facebook-clone-78688.appspot.com",
  messagingSenderId: "104477555499",
  appId: "1:104477555499:web:555ad7e05fb779d852e36e",
  measurementId: "G-S7RDH0WMKF",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebaseapp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
