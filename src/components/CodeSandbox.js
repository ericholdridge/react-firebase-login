/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const CodeSandbox = () => {
    return(
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
          
        </div>
    );
};

const styles = css`
  width: 100%;
  background: #112d4e;
  .sandboxNumbers {
    display: flex;
    flex-direction: column;
    span {
      padding: 10px 0 10px 6px;
      font-size: .9rem;
      font-weight: 600;
      color: #84a9ac;
    }
  }
`

export default CodeSandbox;