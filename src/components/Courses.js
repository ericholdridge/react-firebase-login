/** @jsx jsx */
import { css, jsx } from "@emotion/core";

// Components
import Navbar from "./Navbar/Navbar";
import Container from "./ReusableComponents/Container";
import Questions from "./Questions/Questions";
import { useContext } from "react";
import { CodeContext } from "./CodeContext/CodeContext";
import CodeSandbox from "./CodeSandbox";
import Course from "./Courses/Course";

const Courses = () => {
  const { data, setData } = useContext(CodeContext);
  return (
    <section css={styles} className="courses">
      <Navbar />
      <Container>
        <Course
          courseLength="30 Minutes"
          courseTitle="Cascading Style Sheets"
          courseInfo="In this course, you will learn the fundamentals of CSS and how to apply custom styles to HTML elements."
        />
        {/* <Questions />
        <CodeSandbox /> */}
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

export default Courses;
