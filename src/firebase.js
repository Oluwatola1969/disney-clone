// import firebase from 'firebase';
import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAh0MmQDFkCo3aJcquEW7b9bP5XBJBtRgw",
  authDomain: "disneyplus-clone-oluwatola.firebaseapp.com",
  projectId: "disneyplus-clone-oluwatola",
  storageBucket: "disneyplus-clone-oluwatola.appspot.com",
  messagingSenderId: "304484774773",
  appId: "1:304484774773:web:de537b2ee6c1393416593c",
  measurementId: "G-GH93MET1ER"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const provider = new GoogleAuthProvider(); 
// const storage = firebase.storage();
// const db = app.firestore();

export{auth, provider};
// export default db;