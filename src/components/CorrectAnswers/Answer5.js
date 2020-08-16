/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "../CodeContext/CodeContext";

const Answer5 = () => {
  const { input, data } = useContext(CodeContext);

  return (
    <div css={styles}>
      <ul style={{ listStyle: input === data[4].answer ? "none" : null }}>
        <li>Milk</li>
        <li>Eggs</li>
        <li>Fruit</li>
      </ul>
    </div>
  );
};

const styles = css`
  width: 100%;
  display: flex;
  justify-content: center;
  ul {
    li {
      font-size: 1rem;
      padding: 6px 0;
    }
  }
`;

export default Answer5;
