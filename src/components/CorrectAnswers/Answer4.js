/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { CodeContext } from "../CodeContext/CodeContext";
import { useContext } from "react";

const Answer4 = () => {
  const { input, data } = useContext(CodeContext);
  return (
    <div css={styles}>
      <a
        href=""
        onClick={(e) => e.preventDefault()}
        style={{ textDecoration: input === data[3].answer ? "none" : null }}
      >
        Remove underline
      </a>
    </div>
  );
};

const styles = css`
  width: 100%;
  display: flex;
  justify-content: center;
  a {
    font-size: 1rem;
    color: #000;
    border: 1px solid #000;
    padding: 10px 20px;
    background: #fff;
  }
`;

export default Answer4;
