/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "./CodeContext/CodeContext";
import { useParams} from "react-router-dom";
// Components
import Answer1 from "./CorrectAnswers/Answer1";
import Answer2 from "./CorrectAnswers/Answer2";
import Answer3 from "./CorrectAnswers/Answer3";
import Answer4 from "./CorrectAnswers/Answer4";
import Answer5 from "./CorrectAnswers/Answer5";
import Answer6 from "./CorrectAnswers/Answer6";
import Answer7 from "./CorrectAnswers/Answer7";
import Answer8 from "./CorrectAnswers/Answer8";
import Answer9 from "./CorrectAnswers/Answer9";
import Answer10 from "./CorrectAnswers/Answer10";

const UsersOutput = () => {
  const { number } = useParams(1);
  return (
    <div css={styles} className="usersOutput">
      {number === "1" && <Answer1 />}
      {number === "2" && <Answer2 />}
      {number === "3" && <Answer3 />}
      {number === "4" && <Answer4 />}
      {number === "5" && <Answer5 />}
      {number === "6" && <Answer6 />}
      {number === "7" && <Answer7 />}
      {number === "8" && <Answer8 />}
      {number === "9" && <Answer9 />}
      {number === "10" && <Answer10 />}
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 550px;
  background: #84a9ac;
  display: flex;
  align-items: center;
`;

export default UsersOutput;
