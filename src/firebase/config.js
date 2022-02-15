import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0WZR4XZOaGNTDs-J5ycY6i1DEnKaRAQ4",
    authDomain: "olx-clone-e4172.firebaseapp.com",
    projectId: "olx-clone-e4172",
    storageBucket: "olx-clone-e4172.appspot.com",
    messagingSenderId: "741370508671",
    appId: "1:741370508671:web:17b22435a9369fde92d64a",
    measurementId: "G-R5E3L7HGQ8"
  };

  export default firebase.initializeApp(firebaseConfig)

  