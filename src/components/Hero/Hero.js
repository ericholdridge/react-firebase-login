/** @jsx jsx */
import { css, jsx } from "@emotion/core";

// Components
import Navbar from "../Navbar/Navbar";

// Images
import HeroImage from "../../images/heroImage.jpg";

const Hero = () => {
  return (
    <section css={styles} className="hero">
      <Navbar />
    </section>
  );
};

const styles = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  > .container {
    min-height: calc(100vh - 62px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default Hero;
