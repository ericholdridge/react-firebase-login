/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Navbar from "./Navbar/Navbar";
import Container from "./ReusableComponents/Container";
import Questions from "./Questions/Questions";
import CodeEditor from "./CodeEditor";
import UsersOutput from "./UsersOutput";

const Playground = () => {
  return (
    <section css={styles} className="playground">
      <Navbar />
      <Container>
        <Questions />
        <div className="wrapper">
          <CodeEditor/>
          <UsersOutput />
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
    flex-direction: column;
    justify-content: center;
    .wrapper {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default Playground;
