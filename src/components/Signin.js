/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import fire from "../config/fire";
// Context
import { useContext } from "react";
import { SignupLoginContext } from "./SignupLoginContext/SignupLoginContext";

// Components
import Navbar from "./Navbar/Navbar";
import Container from "./ReusableComponents/Container";

const Signin = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleUserSignup,
  } = useContext(SignupLoginContext);

  return (
    <section css={styles} className="signin">
      <Navbar />
      <Container>
        <div className="signin-form">
          <div className="signup-link">
            <h1>Don't have an account?</h1>
            <a href="">Sign up</a>
          </div>
          <form action="">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="example@example.com" />
            <label htmlFor="email">Password</label>
            <input type="email" placeholder="*************" />
            <div className="wrap">
              <button type="submit">Sign in</button>
              <a href="">Forgot password?</a>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  > .container {
    min-height: calc(100vh - 62px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .signin-form {
      width: 100%;
      max-width: 600px;
      background: #112d4e;
      padding: 50px 0;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      display: flex;
      justify-content: center;
      border-radius: 4px;
      flex-direction: column;
      align-items: center;
      .signup-link {
        display: flex;
        align-items: center;
        padding: 0 0 35px 0;
        h1 {
          color: #84a9ac;
          font-weight: 400;
          margin: 0 8px 0 0;
        }
        a {
          color: #fff;
          font-size: .9rem;
        }
      }
      form {
        width: 100%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        label {
          color: #fff;
          font-size: 1rem;
          text-align: left;
          letter-spacing: 0.8px;
        }
        input {
          width: 100%;
          height: 40px;
          border-radius: 4px;
          border: none;
          margin: 8px 0;
          padding: 0 8px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: #ccc;
            letter-spacing: 0.8px;
          }
        }
        .wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 12px 0 0 0;
          button {
            width: 100%;
            max-width: 100px;
            background: #84a9ac;
            border: none;
            border-radius: 4px;
            padding: 12px 0;
            color: #fff;
            letter-spacing: 0.8px;
            cursor: pointer;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
          a {
            color: #fff;
            font-size: <div className= "8" ></div>rem;
          }
        }
      }
    }
  }
`;

export default Signin;
