import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyACW3N4a1c3t7z6lPt0-M0xbJ8tcVFxAHI",
    authDomain: "firechat-db515.firebaseapp.com",
    projectId: "firechat-db515",
    storageBucket: "firechat-db515.appspot.com",
    messagingSenderId: "392133501614",
    appId: "1:392133501614:web:73c6116c08a2734973433f",
    measurementId: "G-YEMXQPR056",
})

const db=firebaseApp.firestore()
const auth = firebase.auth()

export {db,auth}