/** @jsx jsx */
import { css, jsx } from "@emotion/core";

// Components
import Container from "../ReusableComponents/Container";
import Navbar from "../Navbar/Navbar";

// Images
import HeroImage from "../../images/heroImage.jpg";

const Hero = () => {
  return (
    <section css={styles} className="hero">
      <Navbar />
      <Container>
        <div className="hero-content">
          <a href="">Get Started</a>
        </div>
      </Container>
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
    .hero-content {
      width: 100%;
      text-align: center;
      h3 {
        font-size: 1.6rem;
      }
      h1 {
        font-size: 1.8rem;
      }
      a {
        display: inline-block;
        text-align: center;
        background: #84a9ac;
        padding: 12px 6px;
        border-radius: 4px;
        margin: 20px 0 0 0;
        color: #fff;
        font-size: 1rem;
        text-decoration: none;
      }
    }
  }
`;

export default Hero;
