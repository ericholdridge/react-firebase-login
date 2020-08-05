import React, { useState, createContext } from "react";
import fire from "../../config/fire";
import { useEffect } from "react";

export const SignupLoginContext = createContext();

export const SignupLoginState = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    authListener();
  }, []);

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  // Handle user sign up
  const handleUserSignup = (email, password) => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log("Error" + err);
      });
  };

  // Handle user log in
  const handleUserSignIn = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <SignupLoginContext.Provider
      value={{
        user,
        setUser,
        email,
        setEmail,
        password,
        setPassword,
        handleUserSignup,
        handleUserSignIn,
        authListener,
      }}
    >
      {children}
    </SignupLoginContext.Provider>
  );
};

// {user ? <Home /> : <Signup />}
