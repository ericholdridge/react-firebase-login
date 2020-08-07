/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Input = ({ inputType, inputPlaceholder, inputVal, setInputVal }) => (
  <input
  placeholder={inputPlaceholder}
    css={styles}
    type={inputType}
    value={inputVal}
    onChange={e => setInputVal(e.target.value)}
  />
);

const styles = css`
   outline: none;
`;

export default Input;