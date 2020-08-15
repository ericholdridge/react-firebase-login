/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "../CodeContext/CodeContext";

const Answer1 = () => {
  const {input, data} = useContext(CodeContext);
    return(
        <div style={{textAlign: input === data[0].answer ? "center" : null}}>
          <p style={{fontSize: "1rem", padding: "10px 0 0 10px"}}>hello</p>
        </div>
    );
};


export default Answer1;