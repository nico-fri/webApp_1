import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBXCeo97LRqOlyjCAVvCftV-6l8sNLOjbE',
  authDomain: 'sensorapp-34237.firebaseapp.com',
  databaseURL: '',
  projectId: 'sensorapp-34237',
  storageBucket: 'sensorapp-34237.appspot.com',
  messagingSenderId: '5306592248',
  appId: '1:5306592248:web:7df48ce2a3ab8bb87ac40d',
})

export const auth = app.auth()
export default app
