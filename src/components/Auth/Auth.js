import React, { useState, createContext } from "react";
import fire from "../../config/fire";
import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  useEffect(() => {
    authListener();
  }, []);

  const authListener = () => {
    fire.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setCurrentUser(currentUser);
      } else {
        setCurrentUser("");
      }
    });
  };

  // Handle user sign up
  const handleUserSignup = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log("Error" + error);
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

  // Handle user log out
  const handleFirebaseLogout = () => {
    setEmail("");
    setPassword("");
    fire.auth().signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        email,
        setEmail,
        password,
        setPassword,
        authListener,
        hasAccount,
        setHasAccount,
        handleUserSignIn,
        handleUserSignup,
        handleFirebaseLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
