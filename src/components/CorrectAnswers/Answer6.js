/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { CodeContext } from "../CodeContext/CodeContext";
import { useContext } from "react";

const Answer6 = () => {
  const {input, data} = useContext(CodeContext);
    return(
        <div css={styles} style={{backgroundColor: input === data[5].answer ? "#7F7FFF" : null}}>
          <p>Change the background color</p>
        </div>
    );
};

const styles = css`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  p {
    font-size: 1rem;
  }
`

export default Answer6;