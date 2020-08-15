/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "./CodeContext/CodeContext";
import { useParams} from "react-router-dom";
// Components
import Answer1 from "./CorrectAnswers/Answer1";

const UsersOutput = () => {
  const { data, input } = useContext(CodeContext);
  const { number } = useParams(1);
  return (
    <div css={styles} className="usersOutput">
      {/* Number is undefined for some reason */}
      {number === "1" && <Answer1 />}
      {number === "2" && console.log("Hello")}
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 550px;
  background: #84a9ac;
`;

export default UsersOutput;
