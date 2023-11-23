import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDdRr3KkQG7zq-1YprZ8y3aK2VyCCAVDmU",
    authDomain: "mymoney-a1c61.firebaseapp.com",
    projectId: "mymoney-a1c61",
    storageBucket: "mymoney-a1c61.appspot.com",
    messagingSenderId: "735624588579",
    appId: "1:735624588579:web:f3806c3a0f69210140b096"
  }

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init service
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  export { projectFirestore, projectAuth }