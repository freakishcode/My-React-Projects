import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// TODO using REACT ROUTER (External library)
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
