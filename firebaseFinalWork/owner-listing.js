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

function redirectingLogout() {
  window.location.href="http://localhost:3000/";
}
const signingOut = async () => {
  await auth.signOut();
  redirectingLogout();
};

function redirectingNext() {
  window.location.href="http://localhost:3000/posts/listed";
}
const databaseAddSpots = async () => {
  await db.collection('spots').add({
    address: address.value,
    latitude: latitude.value,
    longitude: longitude.value,
    price: price.value,
    time: time.value,
    distance: distance.value
  });
  address.value = '';
  latitude.value = '';
  longitude.value = '';
  price.value = '';
  time.value = '';
  distance.value = '';
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

export default function ownerListing() {
    return (
      
      <><main>
            {/* SharkPark on the browser tab*/}
              
                  <title>SharkPark</title>
        <center>

            {/* SharkPark Logo on the page */}
            
            <Image src={IMG_0885} height = {250} width= {300}/>
            <p>
              Please go to
              <a href="https://www.latlong.net/convert-address-to-lat-long.html" target="_blank"> latlong.net </a>
              to find your lat/long coords.
            </p>
            <p>
            
              {/* Location textbox */}
              
              {/*
              <input class = "fileButton" type="button" value= "Upload Proof of Ownership"></input>
              <input className = "card" type="text" name="Uname" placeholder="Spot Address"></input>
              <input class = "picButton" type="button" value="Upload Image"></input>
              */}

              {/* Number of Spots textbox */}
              
              <input className="card" type="text" id="address" placeholder="Spot Address"></input>
              <input className="card" type="text" id="latitude" placeholder="Latitude"></input>
              <input className="card" type="text" id="longitude" placeholder="Longitude"></input>
              <input className="card" type="text" id="price" placeholder="Price per Hour"></input>
              <input className="card" type="text" id="time" placeholder="Hours Available"></input>
              <input className="card" type="text" id="distance" placeholder="Number of Spots"></input>

              <button id="spot" onClick={() => {databaseAddSpots();}}>{" "} Submit </button>
              <button id="spot" onClick={() => {signingOut();}}>{" "} Logout </button>
            </p>

        </center>
      
      
      
      
      
    <style>{`
    .picButton {
      position: absolute;
      right: 500px;
      
      top: 445px;
      bottom: 0px;
      height: 42px;
      width: 100px;
      padding: 5px;
      border-radius: 1px;
      line-height: 20px;
      border: 1.5px solid gray;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
      
      }
      .picButton:hover {
        border: 3px solid gray;
    }
    .fileButton {
      position: absolute;
      right: 400px;
      
      top: 300px;
      bottom: 0px;
      bottom: 0px;
      height: 42px;
      width: 200px;
      padding: 0px  5px 30px 5px;
      border-radius: 1px;
      line-height: 38px;
      border: 1.5px solid gray;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
      
      }
      .fileButton:hover {
          border: 3px solid gray;
      }
    
    .title {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            margin: 2rem;
      }
    .card {
      display: block;
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
            width:20rem;
    }
    .proof {
      display: block;
      margin: 2rem;
      flex-basis: 45%;
      padding: 0px  5px 30px 5px;
      align-items: center;
      justify-content: left;
      text-align: center;
      color: inherit;
      text-decoration: none;
      border: 1.5px solid white;
      border-radius: 5px;
      transition: color 0.15s ease, border-color 0.15s ease;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            width:5rem;
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
    width: 4rem;
    }
    .Button:hover {
        border: 3px solid gray;
   
    }
  
    `}</style>

    
    </main></>
    )
  }