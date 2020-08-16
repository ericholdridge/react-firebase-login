/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "../CodeContext/CodeContext";
import { useParams, Link } from "react-router-dom";
import NextQuestion from "./NextQuestion";

const Questions = () => {
  const { data, input, setInput } = useContext(CodeContext);
  const { number } = useParams(1);

  return (
    <div css={styles}>
      <div className="wrap">
        <span>Challenge task {number} of 10</span>
        {/* If user answers the question correctly, display the "Next button" */}
        {data.map(({ answer }, index) => {
          return input === answer ? <NextQuestion key={index} /> : null;
        })}
      </div>
      <div className="userTask">
        {number === "1" && <p className="definition">{data[0].definition}</p>}
        {number === "1" && <p className="question">{data[0].question}</p>}
        {number === "2" && <p className="definition">{data[1].definition}</p>}
        {number === "2" && <p className="question">{data[1].question}</p>}
        {number === "3" && <p className="definition">{data[2].definition}</p>}
        {number === "3" && <p className="question">{data[2].question}</p>}
        {number === "4" && <p className="definition">{data[3].definition}</p>}
        {number === "4" && <p className="question">{data[3].question}</p>}
        {number === "5" && <p className="question">{data[4].question}</p>}
        {number === "6" && <p className="question">{data[5].question}</p>}
        {number === "7" && <p className="definition">{data[6].definition}</p>}
        {number === "7" && <p className="question">{data[6].question}</p>}
        {number === "8" && <p className="definition">{data[7].definition}</p>}
        {number === "8" && <p className="question">{data[7].question}</p>}
        {number === "9" && <p className="definition">{data[8].definition}</p>}
        {number === "9" && <p className="question">{data[8].question}</p>}
        {number === "10" && <p className="definition">{data[9].definition}</p>}
        {number === "10" && <p className="question">{data[9].question}</p>}
      </div>
    </div>
  );
};

const styles = css`
  width: 100%;
  padding: 25px 0;
  .wrap {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 1rem;
      font-weight: 600;
      color: #ccc;
    }
    a {
      background: #000;
      color: #fff;
      text-decoration: none;
      padding: 8px 20px;
      border-radius: 4px;
      font-weight: 600;
      letter-spacing: 0.8px;
      font-size: 0.7rem;
    }
  }
  .userTask {
    padding: 0.4rem 0 0 0;
    .definition {
      font-size: 1rem;
      font-style: italic;
    }
    .question {
      font-size: 1.4rem;
      font-weight: 600;
    }
  }
`;

export default Questions;
