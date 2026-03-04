import Header from "../features/Header";
import { StyledLink } from "../features/Header";
import homeIllustration from "../asset/home-illustration.svg";
import styled from "styled-components";
import Footer from "../features/Footer";
import { useThem } from "../features/Context/ThemProvider";

const HomeWrapper = styled.main`
  background-color: "#F9F9FC";
  margin-top: 200px;
  margin-left: 65px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const P = styled.p`
  font-family: Trebuchet MS;
  font-weight: 700;
  font-size: 50px;
  leading-trim: NONE;
  line-height: 161%;
  letter-spacing: 0%;
  color: ${(props) => (props.theme === "light" ? "#2f2e41;" : "#ffff;")};
`;

export default function HomePage() {
  const { theme } = useThem();
  return (
    <>
      <Header />
      <HomeWrapper>
        <section>
          <P theme={theme}>
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </P>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </section>
        <img src={homeIllustration} alt="home" />
      </HomeWrapper>
      <Footer />
    </>
  );
}
