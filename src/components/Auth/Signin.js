/** @jsx jsx */
import { css, jsx } from "@emotion/core";
// Context
import React, { useContext } from "react";
import { AuthContext } from "./Auth";
// Components
import Navbar from "../Navbar/Navbar";
import Container from "../ReusableComponents/Container";
import Input from "../ReusableComponents/Input";

const Signin = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    hasAccount,
    setHasAccount,
    handleUserSignIn,
    handleUserSignup,
    signupError,
    setSignupError,
    loginError,
    setLoginError
  } = useContext(AuthContext);

  return (
    <section css={styles} className="signin">
      <Navbar />
      <Container>
        <div className="signin-form">
          <div className="form">
            <label htmlFor="email">Email</label>
            <Input
              inputType="email"
              inputPlaceholder="example@example.com"
              inputVal={email}
              setInputVal={setEmail}
            />
            <label htmlFor="password">Password</label>
            <Input
              inputType="password"
              inputPlaceholder="*************"
              inputVal={password}
              setInputVal={setPassword}
            />
            <div className="wrap">
              {hasAccount ? (
                <React.Fragment>
                  <div className="signupError">
                    <p>{loginError}</p>
                  </div>
                  <div className="wrapper">
                    <button onClick={handleUserSignIn}>Login</button>
                    <p onClick={() => setHasAccount(!hasAccount)}>
                      Don't have an account, <span>Signup</span>
                    </p>
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className="signupError">
                    <p>{signupError}</p>
                  </div>
                  <div className="wrapper">
                    <button onClick={handleUserSignup}>Sign up</button>
                    <p onClick={() => setHasAccount(!hasAccount)}>
                      Have an account, <span>Login</span>
                    </p>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
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
          font-size: 0.9rem;
        }
      }
      .form {
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
          p {
            font-size: 0.9rem;
            color: #fff;
            span {
              color: #84a9ac;
              text-decoration: underline;
            }
          }
          .signupError {
            p {
              padding: 12px 0;
            }
          }
          .wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
      }
    }
  }
`;

export default Signin;
