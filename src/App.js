import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import "./App.css";

// User signup/login context
import { SignupLoginState } from "./components/SignupLoginContext/SignupLoginContext"; 

// Components
import Hero from "./components/Hero/Hero";
import Signin from "./components/Signin";

const App = () => {
  return (
    <SignupLoginState>
      <div className="App">
        <Router>
          <Route path="/" exact>
            <Hero />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
        </Router>
      </div>
    </SignupLoginState>
  );
};

export default App;
