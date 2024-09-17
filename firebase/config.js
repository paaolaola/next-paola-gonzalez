// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
export const db = getFirestore(app);
export const storage = getStorage(app);



