import { useHistory } from "react-router-dom";
import React, { useState, createContext } from "react";
import fire from "../../config/fire";
import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const history = useHistory();

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
  const handleUserLogout = () => {
    setEmail("");
    setPassword("");
    fire.auth().signOut();
    history.push("/");
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
        handleUserLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
