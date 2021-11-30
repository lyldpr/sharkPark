import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBktSIE9SmOZV50CHGXe4vF8fBiUl7qHr8",
    authDomain: "sharkpark-9b579.firebaseapp.com", 
    projectId: "sharkpark-9b579", 
    storageBucket: "sharkpark-9b579.appspot.com",
    messagingSenderId: "565602639536",
    appId: "1:565602639536:web:3771ee87e03643b6db2575",
    measurementId: "G-ZM3JYBW45T"
};

firebase.initializeApp(firebaseConfig);

//const app = initializeApp(firebaseConfig);
export default firebase;
//const db = getFirestore(app);
