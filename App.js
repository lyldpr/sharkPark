
import TextField from '@mui/material/TextField';
import IMG_0885 from "./artifacts/IMG_0885.jpeg";
import { DrizzleContext } from "@drizzle/react-plugin"
import Park from "./artifacts/Park.json"
import * as ReactDOM from "react-dom";
import {useState} from "react";
          
import { Drizzle } from "@drizzle/store";
// eslint-disable-next-line
import { LoadingContainer, AccountData} from "@drizzle/react-components"



const drizzleOptions = {
	contracts: [Park]
}

const drizzle = new Drizzle(drizzleOptions);

function App() {
  return (
    <DrizzleContext.Provider drizzle = {drizzleOptions}>
        <LoadingContainer>
          <div id="wrapper">
            <div id="container">
                  
                  
                  
            </div>
          </div>

        </LoadingContainer>


	
    </DrizzleContext.Provider>  
);
  }
  
  

export default App;
