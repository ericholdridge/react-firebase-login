/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "../CodeContext/CodeContext";

const Answer3 = () => {
  const {input, data} = useContext(CodeContext);
    return(
        <div css={styles}>
          <p style={{marginTop: input === data[2].answer ? "80px" : null}}>Hello</p>
        </div>
    );
};

const styles = css`
  width: 100%;
  border: 2px solid #000;
  p {
    border: 2px solid red;
    font-size: 1rem;
  }
`

export default Answer3;