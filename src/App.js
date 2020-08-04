import React, {useState} from 'react';
import './App.css';
import fire from "./config/fire";

import Home from "./components/Home";
import Login from "./components/Login";
import { useEffect } from 'react';

const App = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    authListener();
  }, []);

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        setUser(user);
      } else {
        setUser(null);
      }
    })
  }

  return (
    <div className="App">
      {user ? <Home /> : <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>}
    </div>
  );
}

export default App;
