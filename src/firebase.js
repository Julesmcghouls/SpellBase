// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBpYG0ac053g00f3vVPHH88gexl5QdrwBw",
authDomain: "spellbaseserv-47978.firebaseapp.com",
projectId: "spellbaseserv-47978",
storageBucket: "spellbaseserv-47978.appspot.com",
messagingSenderId: "1050261446711",
appId: "1:1050261446711:web:e964fb74cc43509f19dfb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const database = getDatabase(app);

