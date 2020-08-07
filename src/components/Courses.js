/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import {useContext} from 'react';
import fire from "../config/fire";
import { AuthContext } from "./Auth/Auth";
import { useHistory } from "react-router-dom";

const Courses = () => {
  const { setEmail, setPassword } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    setEmail('');
    setPassword('');
    fire.auth().signOut();
    history.push("/");
  }

  return (
    <div>
      <h1>Courses</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
};

export default Courses;
