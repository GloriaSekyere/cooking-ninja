import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAOXMvZZDWxtiSb3HU4sjSfr3C2O7YueX0",
  authDomain: "cooking-ninja-site-6d4f1.firebaseapp.com",
  projectId: "cooking-ninja-site-6d4f1",
  storageBucket: "cooking-ninja-site-6d4f1.appspot.com",
  messagingSenderId: "386970998242",
  appId: "1:386970998242:web:c7cb162e272e577aa455bb"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const database = firebase.firestore()

export { database }