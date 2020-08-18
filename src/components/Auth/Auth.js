import React, { useState, createContext } from "react";
import fire from "../../config/fire";
import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState("");
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [signupError, setSignupError] = useState("");
  const [loginError, setLoginError] = useState("");


  // Handle user sign up
  const handleUserSignup = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        // If the email or password are invalid
        if(error.code === "auth/invalid-email") {
          setSignupError("*Invalid email or password. Please try again.");
        } else {
          return;
        }
      })
  };

  // Handle user log in
  const handleUserSignIn = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
         // If the email or password are invalid
         if(error.code === "auth/user-not-found") {
          setLoginError("*User not found. Try again.");
        } else {
          return;
        }
      })
  };

  // Handle user log out
  const handleFirebaseLogout = () => {
    setEmail("");
    setPassword("");
    fire.auth().signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        email,
        setEmail,
        password,
        setPassword,
        hasAccount,
        signupError,
        setSignupError,
        loginError,
        setLoginError,
        setHasAccount,
        handleUserSignIn,
        handleUserSignup,
        handleFirebaseLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
