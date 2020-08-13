/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link } from "react-router-dom";

const StartButton = ({ buttonText }) => {
  return (
    <div css={styles} className="courseButton">
      <Link to="courses/css/1">{buttonText}</Link>
    </div>
  );
};

const styles = css`
  background: #112d4e;
  display: inline-block;
  border-radius: 4px;
   a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    font-size: .8rem;
    padding: 8px 26px;
    display: block;
   }
`;

export default StartButton;
