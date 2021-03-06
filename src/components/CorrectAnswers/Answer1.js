/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "../CodeContext/CodeContext";

const Answer1 = () => {
  const {input, data} = useContext(CodeContext);
    return(
        <div css={styles}>
          <p style={{textAlign: input === data[0].answer ? "center" : null}}>Align this text to the center</p>
        </div>
    );
};

const styles = css`
  width: 100%;
   p {
     font-size: 1rem;
   }
`


export default Answer1;