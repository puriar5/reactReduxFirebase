import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBztOtprtzS2u_icBNi4XeIXDw42mk8csc",
    authDomain: "net-rup-projectman.firebaseapp.com",
    databaseURL: "https://net-rup-projectman.firebaseio.com",
    projectId: "net-rup-projectman",
    storageBucket: "",
    messagingSenderId: "666661770059",
    appId: "1:666661770059:web:cda87127cd5a22a8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;