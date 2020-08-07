import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "./components/Auth/Auth";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <Router>
      <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
