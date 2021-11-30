import Image from 'next/image'
import IMG_0885 from '/pages/posts/IMG_0885.jpeg'
import React, { useState } from 'react';

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

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

const auth = firebase.auth();
const db = firebase.firestore();

function signingUp(){
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  auth.createUserWithEmailAndPassword(email.value,password.value);
}

function redirectingLogout() {
  window.location.href="http://localhost:3000/";
}
const signingOut = async () => {
  await auth.signOut();
  redirectingLogout();
};

function redirectingNext() {
  window.location.href="http://localhost:3000/posts/owner-listing";
}
const databaseAddPartner = async () => {
  signingUp();
  await db.collection('partners').add({
    firstLast: firstLast.value,
    username: username.value,
    register: register.value,
    spotLocation: spotLocation.value,
  });
  firstLast.value = '';
  username.value = '';
  register.value = '';
  spotLocation.value = '';
  redirectingNext();
};

auth.onAuthStateChanged((user)=>{
  if(user){
    var email = user.email;
    alert("Active user "+email);
  }else{
    alert("No Active user Found")
  }
})

export default function signUp() {
    return (
    <><main>
        <center>
        
            <title>SharkPark</title>
       
            {/* SharkPark logo */}
            <Image src={IMG_0885} height = {250} width= {300}/>
            
            <h2 className="title"> Create an Account </h2>
        <p>
         
            <input className="card" type="text" id="firstLast" placeholder="First Last"></input>
            <input className="card" type="text" id="email" placeholder="Email"></input>
            <input className="card" type="text" id="username" placeholder="Username"></input>
            <input className="card" type="password" id="password" placeholder="Password"></input>
            <input className="card" type="text" placeholder="Confirm Password"></input>
            <input className="card" type="text" id="register" placeholder="Registration"></input>
            <input className="card" type="text" id="spotLocation" placeholder="Spot Address"></input>

            <button onClick={() => {databaseAddPartner();}}>{" "} SignUp </button>
            <button onClick={() => {signingOut();}}>{" "} Logout </button>
        </p>

        </center>
      
      <style>{`
      .font {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
        sans-serif;
        margin: 2rem;
      }
      .title {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            margin: .5px;
      }
    .card {
      display: table;
      margin: 2rem;
      flex-basis: 45%;
      padding: 1rem;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: inherit;
      text-decoration: none;
      border: 1px solid #eaeaea;
      border-radius: 10px;
      transition: color 0.15s ease, border-color 0.15s ease;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
    }
    
  .Button {
    centered-mode: true;
    height: 40px;
    padding: 0px  10px 35px 10px;
    border-radius: 5px;
    line-height: 38px;
    border: 1.5px solid gray;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
    }
    .Button:hover {
        border: 3px solid gray;
   
    }
  
    `}</style>

    
    </main></>
    )
  }