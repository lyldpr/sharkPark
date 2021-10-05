import * as React from "react";
import TextField from '@mui/material/TextField';
import IMG_0885 from "./artifacts/IMG_0885.jpeg";
import { DrizzleContext } from "@drizzle/react-plugin"
import Greeter from "./artifacts/Greeter.json"
import * as ReactDOM from "react-dom";
import {useState} from "react";
          
import { Drizzle } from "@drizzle/store";
// eslint-disable-next-line
import { LoadingContainer} from "@drizzle/react-components"



const drizzleOptions = {
	contracts: [Greeter]
}

const drizzle = new Drizzle(drizzleOptions);
function App() {
	const styleObj = {
	fontSize: 45,
	textAlign: "center",
}
 
	
  return (
    <DrizzleContext.Provider drizzle = {drizzle}>

	
      <div style= {styleObj}> Welcome to SharkPark!</div>
	  
	<input type = "text" name="Uname" placeholder="Username"></input>  
	<input type = "text" name="Pword" placeholder="Password"></input>
	<input type= "button" value = "Login" onclick= "msg()"></input>
	<input type= "button" value = "Sign Up" onclick= "msg()"></input>
	
    </DrizzleContext.Provider>  
);
  }


export default App;
