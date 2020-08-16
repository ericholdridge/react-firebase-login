/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "../CodeContext/CodeContext";

const Answer8 = () => {
  const {input, data} = useContext(CodeContext);

    return(
        <div css={styles}>
          <p style={{fontSize: input === data[7].answer ? "25px" : null}}>Change font size</p>
        </div>
    );
};

const styles = css`
  width: 100%;
  text-align: center;
  p {
    font-size: 1rem;
  }
`

export default Answer8;