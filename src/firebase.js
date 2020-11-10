import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBjYlwEMMLcMXVMGv30qdvd4kd5T5KM8cI",
    authDomain: "facebook-clone-6684c.firebaseapp.com",
    databaseURL: "https://facebook-clone-6684c.firebaseio.com",
    projectId: "facebook-clone-6684c",
    storageBucket: "facebook-clone-6684c.appspot.com",
    messagingSenderId: "734334976611",
    appId: "1:734334976611:web:140621e940b4e8f1b5ae56",
    measurementId: "G-B72BH4CF1X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;