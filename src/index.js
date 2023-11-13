import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import React, { useEffect, useState } from "react";
import { StrictMode } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import './App.css';

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
