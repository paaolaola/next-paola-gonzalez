// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmUjOGoOy9vYEfH_6HFOTtE1KWGsh3qJI",
  authDomain: "de-gatos-y-perros.firebaseapp.com",
  projectId: "de-gatos-y-perros",
  storageBucket: "de-gatos-y-perros.appspot.com",
  messagingSenderId: "37334186991",
  appId: "1:37334186991:web:8deeafe2464274563b541a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export { db };