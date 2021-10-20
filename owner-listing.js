import Image from 'next/image'
import IMG_0885 from '/pages/posts/IMG_0885.jpeg'
import React, { useState } from 'react';

export default function ownerListing() {
    return (
      
      <><main>
            {/* SharkPark on the browser tab*/}
              <Head>
                  <title>SharkPark</title>
              </Head>
        

        <center>
          
            {/* SharkPark Logo on the page */}
            
            <Image src={IMG_0885} height = {250} width= {300}/>

            <p>
              {/* Location textbox */}
              
              <input className = "card" type="text" name="Uname" placeholder="Location"></input>
              
              {/* Number of Spots textbox */}
              
              <input className = "card" type="text" name="Pword" placeholder="Number of Spots"></input>
              
              {/* List button with link to a page that says listed, obv needs to have more */}
                
                <a href="http://localhost:3000/posts/listed">
              <input class= "Button" type="button" value="List"></input>
                </a>

            </p>

        </center>
      
      
      
      
      
    <style>{`
    
    .title {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            margin: .5px;
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