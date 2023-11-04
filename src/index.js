import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import React, { useEffect, useState } from "react";
import './App.css';
import { StrictMode } from "react";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
