import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../utils/style/colors/color.js";
import logo from "../asset/dark-logo.png";
import { motion, transform } from "framer-motion";

const HeaderWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-right: 5vw;
`;

export const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

const logoVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

function Header() {
  return (
    <HeaderWrapper>
      <motion.img
        variants={logoVariants}
        animate="animate"
        src={logo}
        alt="logo"
      />
      <LinkWrapper>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/questions/1" $isFullLink>
          Faire le test
        </StyledLink>
      </LinkWrapper>
    </HeaderWrapper>
  );
}

export default Header;
