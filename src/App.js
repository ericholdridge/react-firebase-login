import React, { useEffect, useContext } from "react";
import fire from "./config/fire";
import { Route, useHistory } from "react-router-dom";
import "./App.css";

// Components
import Hero from "./components/Hero/Hero";
import Signin from "./components/Auth/Signin";
import Courses from "./components/Courses";
import { AuthContext } from "./components/Auth/Auth";
import Playground from "./components/Playground";

const App = () => {
  const { user, setUser } = useContext(AuthContext);
  const history = useHistory();

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        history.push("/courses");
      } else {
        setUser(null);
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="App">
      <Route exact path="/" component={Hero} />
      {user ? (
        <>
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/courses/css/:number" component={Playground} />
        </>
      ) : (
        <Route path="/signin" component={Signin} />
      )}
    </div>
  );
};

export default App;
