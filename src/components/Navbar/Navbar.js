/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link } from "react-router-dom";

// Components
import Container from "../ReusableComponents/Container";

const Navbar = () => {
  return (
    <nav css={styles} className="nav">
      <Container>
        <div className="nav-logo">
          <a href="">LearnWebDevelopment</a>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/signin">Sign in</Link>
            </li>
            <li>
              <Link to="/freetrial">Free Trial</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

const styles = css`
  width: 100%;
  padding: 14px 0;
  background: #112d4e;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-logo {
      a {
        font-size: 1.2rem;
        color: #dbe2ef;
        text-decoration: none;
      }
    }
    .nav-items {
      ul {
        list-style: none;
        display: flex;
        align-items: center;
        li {
          margin: 0 6px;
          padding: 0 10px;
          a {
            font-size: 1rem;
            color: #dbe2ef;
            text-decoration: none;
            transition: color 200ms ease-in-out;
            &:hover {
              color: #84a9ac;
            }
          }
          &:last-child {
            background: #84a9ac;
            border-radius: 3px;
            padding: 6px 20px;
            a {
              transition: none;
              color: #fff;
            }
          }
        }
      }
    }
  }
`;

export default Navbar;
