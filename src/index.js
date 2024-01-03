import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
// import { AuthContextProvider } from "./context/authContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <React.StrictMode>
     
     <div id="page-wrapper">  
      <App />
     </div> 
    
  </React.StrictMode>
  
);
