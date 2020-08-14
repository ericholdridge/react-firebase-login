/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "./CodeContext/CodeContext";

const UsersOutput = () => {
  const { data, input } = useContext(CodeContext);
  return (
    <div css={styles} className="usersOutput">
      {input === data[0].answer && console.log("hello")}
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 550px;
  background: #84a9ac;
`;

export default UsersOutput;
