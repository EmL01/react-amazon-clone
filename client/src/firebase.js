import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDARwuUwRBQpTJ4Jj5LDTs42h140GhHCJI',
  authDomain: 'clone-1dcdf.firebaseapp.com',
  projectId: 'clone-1dcdf',
  storageBucket: 'clone-1dcdf.appspot.com',
  messagingSenderId: '37420938324',
  appId: '1:37420938324:web:8e4f2f1d707e2c736da9c1',
  measurementId: 'G-W84WL906EM',
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }