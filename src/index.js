import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthProvider } from "./components/Auth/Auth";
import { CodeState } from "./components/CodeContext/CodeContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CodeState>
        <Router>
          <App />
        </Router>
      </CodeState>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
