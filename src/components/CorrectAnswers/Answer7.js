/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "../CodeContext/CodeContext";

const Answer7 = () => {
  const {input, data} = useContext(CodeContext);
    return(
        <div css={styles}>
          <p style={{color: input === data[6].answer ? "orange" : null}}>Hello</p>
        </div>
    );
};

const styles = css`
  width: 100%;
  p {
    text-align: center;
    font-size: 1rem;
  }
`

export default Answer7;