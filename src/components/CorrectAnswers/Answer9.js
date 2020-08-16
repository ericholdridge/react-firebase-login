/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "../CodeContext/CodeContext";

const Answer9 = () => {
  const {input, data} = useContext(CodeContext);
    return(
        <div css={styles} style={{border: input === data[8].answer ? "2px solid #000" : null}}>
          <p>Add a black border</p>
        </div>
    );
};

const styles = css`
  width: 100%;
  max-width: 300px;
  background: #fff;
  text-align: center;
  margin: 0 auto;
  padding: 20px 0;
  p {
    font-size: 1rem;
  }
`

export default Answer9;