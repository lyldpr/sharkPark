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
// promise.catch(e=>alert(e.message)); const promise = 
//const analytics = getAnalytics(app);

//const db = firebase.firestore();
//const app = initializeApp(firebaseConfig);
//const auth = getAuth(firebaseApp);

var redirect = 0;

function signUp(){
    redirect = 1;
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    auth.createUserWithEmailAndPassword(email.value,password.value);
}
//
// firebase google maps

//sign in function
function signIn(){
    redirect = 2;
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
}
  
//sign out function
function signOut(){
    redirect = 3;
    auth.signOut();
}



//active user to homepage
auth.onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);
      if (redirect == 1) {
        window.location.href="createacc.html";
      } else if (redirect == 2) {
        window.location.href="listview.html";
      } else if (redirect == 3) {
        window.location.href="index.html";
      } else {
        alert("error invalid");
      }
      //window.location.href="createacc.html";
      


    }else{
      alert("No Active user Found")
    }
})




//const db = getFirestore(firebaseApp);
//db.collection('todos').getDocs();
//const todosCol = collection(db, 'todos');
//const snapshot = await getDocs(todosCol);

//const analytics = getAnalytics(app);
 


