/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "../CodeContext/CodeContext";

const Answer2 = () => {
  const { input, data } = useContext(CodeContext);
  return (
    <div
      css={styles}
      style={{ padding: input === data[1].answer ? "50px" : null }}
    >
      <p>Add padding</p>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 280px;
  border: 2px solid red;
  p {
    font-size: 1rem;
    text-align: center;
  }
`;

export default Answer2;
