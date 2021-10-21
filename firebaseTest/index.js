//import { initializeApp } from 'firebase/app';
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";

//import { getAuth } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";

//import { getAuth } from 'firebase/auth';
//import { getFirestore } from 'firebase/firestore';
//import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyA-Cm528w-sxWkeP6TxFWFDQ4AbqP1q31I",
    authDomain: "sharkpark-9b579.firebaseapp.com", 
    projectId: "sharkpark-9b579", 
    storageBucket: "sharkpark-9b579.appspot.com",
    messagingSenderId: "565602639536",
    appId: "1:565602639536:web:3771ee87e03643b6db2575",
    measurementId: "G-ZM3JYBW45T"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const analytics = getAnalytics(app);
//const app = initializeApp(firebaseConfig);
//const auth = getAuth(firebaseApp);

function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
}

//sign in function
function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message)); 
}
  
//sign out function
function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
}

//active user to homepage
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
})

//const db = getFirestore(firebaseApp);
//db.collection('todos').getDocs();
//const todosCol = collection(db, 'todos');
//const snapshot = await getDocs(todosCol);

//const analytics = getAnalytics(app);
 


