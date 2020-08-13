/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Navbar from "./Navbar/Navbar";
import Container from "./ReusableComponents/Container";
import Questions from "./Questions/Questions";
import CodeSandbox from "./CodeSandbox";

const Playground = () => {
  return (
    <section css={styles} className="playground">
      <Navbar />
      <Container>
        <Questions />
        <CodeSandbox />
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
    align-items: center;
    .codeSandbox {
      border: 1px solid black;
    }
  }
`;

export default Playground;
