/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "../CodeContext/CodeContext";
import { useParams, Link } from "react-router-dom";

const Questions = () => {
  const {data} = useContext(CodeContext);
  const { number } = useParams(1);
    return(
        <div css={styles}>
          <span>Challenge task {number} of 10</span>
          {number === "1" && <p>{data[0].question}</p>}
          {number === "2" && <p>{data[1].question}</p>}
          <Link to={`/courses/${parseInt(number, 10) + 1}`}>Next Question</Link>
        </div>
    );
};

const styles = css`
  width: 100%;
  border: 1px solid red;
  padding: 25px 0;
  span {
    font-size: 1.1rem;
    font-weight: 600;
    color: #ccc;
  }
  p {
    font-size: 1.8rem;
  }
`

export default Questions;