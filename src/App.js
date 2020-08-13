import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import "./App.css";

// Components
import Hero from "./components/Hero/Hero";
import Signin from "./components/Signin";
import Courses from "./components/Courses";
import { AuthContext } from "./components/Auth/Auth";
import Playground from "./components/Playground";

const App = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="App">
      {/* Check if user is logged in */}
      {/* {currentUser ? <Route exact path="/courses" component={Courses} /> : <Redirect to="/" />} */}
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/" component={Hero} />
      <Route path="/signin" component={Signin} />
      {currentUser ? <Route path="/courses/css/:number" component={Playground} /> : <Redirect exact to="/" />}
    </div>
  );
};

export default App;
