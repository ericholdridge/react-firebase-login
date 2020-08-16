/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link, useHistory} from "react-router-dom";
// Components
import Container from "../ReusableComponents/Container";
import { useContext } from "react";
import { AuthContext } from "../Auth/Auth";

const Navbar = () => {
  const { user, handleFirebaseLogout} = useContext(AuthContext);
  const history = useHistory();

  // Log the user out of the account if the log out button is clicked
  const handleUserLogout = () => {
    handleFirebaseLogout();
    history.push("/");
  }

  return (
    <nav css={styles} className="nav">
      <Container>
        <div className="nav-logo">
          <Link to="/">LearnWebDevelopment</Link>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {user ? (
              <li>
                <Link to="/courses">
                  Courses
                </Link>
              </li>
            ) : null}
            {user ? (
              <li>
                <Link to="/" onClick={handleUserLogout}>
                  Log out
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/signin">Sign in</Link>
              </li>
            )}
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
