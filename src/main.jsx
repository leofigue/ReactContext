import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import JsonContextProvider from "./context/JsonContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <JsonContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </JsonContextProvider>
    
  </React.StrictMode>
);
