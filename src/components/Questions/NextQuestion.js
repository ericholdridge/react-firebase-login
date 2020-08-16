/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "../CodeContext/CodeContext";
import { useParams, Link } from "react-router-dom";

const NextQuestion = () => {
  const { clearInputValue } = useContext(CodeContext);
  const { number } = useParams(1);
  return (
    <Link
      onClick={clearInputValue}
      to={
        number >= 10 ? "/courses" : `/courses/css/${parseInt(number, 10) + 1}`
      }
    >
      Next Question
    </Link>
  );
};

export default NextQuestion;
