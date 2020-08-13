/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import StartButton from "./StartButton";
const Course = ({courseTitle, courseInfo, courseLength}) => {
  return (
    <div css={styles} className="course">
      <div className="courseBanner">
        <i className="fab fa-css3-alt"></i>
        <span>{courseLength}</span>
      </div>
      <div className="courseInfo">
        <span>Course</span>
        <h3>{courseTitle}</h3>
        <p>{courseInfo}</p>
        <StartButton buttonText="Start" />
      </div>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  .courseBanner {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background: #112d4e;
    i {
      color: #84a9ac;
      font-size: 2rem;
    }
    span {
      color: #fff;
      font-size: .7rem;
    }
  }
  .courseInfo {
    padding: 34px 12px;
    span {
      font-weight: 600;
      font-size: .8rem;
      color: #ccc;
    }
    h3 {
      font-size: 1.1rem;
    }
    p {
      font-size: .8rem;
      padding: 12px 0 18px 0;
    }
  }
`;

export default Course;
