/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "../CodeContext/CodeContext";
import { useParams, Link } from "react-router-dom";

const Questions = () => {
  const { data, input } = useContext(CodeContext);
  const { number } = useParams(1);
  return (
    <div css={styles}>
      <span>Challenge task {number} of 10</span>
      {number === "1" && <p>{data[0].question}</p>}
      {number === "2" && <p>{data[1].question}</p>}
      {number === "3" && <p>{data[2].question}</p>}
      {number === "4" && <p>{data[3].question}</p>}
      {number === "5" && <p>{data[4].question}</p>}
      {number === "6" && <p>{data[5].question}</p>}
      {number === "7" && <p>{data[6].question}</p>}
      {number === "8" && <p>{data[7].question}</p>}
      {number === "9" && <p>{data[8].question}</p>}
      {number === "10" && <p>{data[9].question}</p>}
      <Link to={`/courses/css/${parseInt(number, 10) + 1}`}>Next Question</Link>
    </div>
  );
};

const styles = css`
  width: 100%;
  padding: 25px 0;
  span {
    font-size: 1.1rem;
    font-weight: 600;
    color: #ccc;
  }
  p {
    font-size: 1.8rem;
  }
`;

export default Questions;
