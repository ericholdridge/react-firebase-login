/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { CodeContext } from "./CodeContext/CodeContext";

const CodeSandbox = () => {
  const { input, setInput } = useContext(CodeContext);
  return (
    <div css={styles} className="codeSandbox">
      <div className="sandboxNumbers">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
      </div>
      <div className="input">
        <div className="wrap">
          <p>.element</p>
          <span>&#123;</span>
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <span>&#125;</span>
      </div>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 650px;
  background: #112d4e;
  display: flex;
  .sandboxNumbers {
    display: flex;
    flex-direction: column;
    span {
      padding: 10px 0 10px 6px;
      font-size: 0.9rem;
      font-weight: 600;
      color: #84a9ac;
    }
  }
  .input {
    width: 100%;
    max-width: 300px;
    height: 30px;
    .wrap {
      display: flex;
      align-items: center;
      margin: 7px 0 0 0;
      p {
        font-size: 1rem;
        color: #fff;
      }
      span {
        display: block;
        margin: 0 0 0 10px;
        color: #fff;
      }
    }
    span {
      margin: 12px 0 0 0;
      display: block;
      color: #fff;
      font-size: 1rem;
    }
    input {
      height: 100%;
      width: 100%;
      outline: none;
      padding: 0 4px;
      margin: 14px 0 0 0;
      background: #84a9ac;
      border: none;
      color: #fff;
      font-size: 1rem;
      letter-spacing: .8px;
    }
  }
`;

export default CodeSandbox;
