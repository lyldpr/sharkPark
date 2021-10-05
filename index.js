import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// eslint-disable-next-line
import { Drizzle, generateStore } from "@drizzle/store";
import Greeter from "./artifacts/Greeter.json";

const options = {
	contracts: [Greeter],
	web3: {
	fallback: {
	type: "ws",
	url: "ws://127.0.0.1:7545",
	},
   },
};

const drizzle = new Drizzle(options);


ReactDOM.render(<App drizzle={drizzle} />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
