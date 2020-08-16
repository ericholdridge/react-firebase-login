/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "../CodeContext/CodeContext";

const Answer10 = () => {
  const {input, data} = useContext(CodeContext);

    return(
        <div css={styles} style={{borderRadius: input === data[9].answer ? "50%" : null}}>
          <p>Change the border radius</p>
        </div>
    );
};

const styles = css`
  width: 100%;
  max-width: 200px;
  height: 100%;
  max-height: 200px;
  margin: 0 auto;
  border: 2px solid black;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1rem;
  }
`

export default Answer10;