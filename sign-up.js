import Image from 'next/image'
import IMG_0885 from '/pages/posts/IMG_0885.jpeg'
import React, { useState } from 'react';

export default function signUp() {
    return (
      
      

    <><main>
        <center>
        
        <Head>
            <title>SharkPark</title>
        </Head>

            {/* SharkPark logo */}
            <Image src={IMG_0885} height = {250} width= {300}/>
            
        <p>
            <h2 class="title"> Create an Account </h2>
          
         
            <input className = "card" type="text" name="Uname" placeholder="First Last" ></input>
            <input className = "card" type="text" name="Ema" placeholder="Email"></input>
            <input className = "card" type="text" name="Usr" placeholder="Username"></input>
            <input className = "card" type="text" name="Pword" placeholder="Password"></input>
            <input className = "card" type="text" name="PwordC" placeholder="Confirm Password"></input>
            <input className = "card" type="text" name="car" placeholder="Vehicle Make/Model"></input>
            <input className = "card" type="text" name="lpn" placeholder="License Plate Number"></input>


          
            <a href="http://localhost:3000/posts/enter-location">
                <input class= "Button" type="button" value="Create Account"></input>
            </a>
     
     
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