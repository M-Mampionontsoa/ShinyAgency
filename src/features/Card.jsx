import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../utils/style/colors/color.js";
import { forwardRef, useState } from "react";
import { motion } from "framer-motion";

const CardLabel = styled.span`
  font-family: Trebuchet MS;
  font-weight: 400;
  font-size: 22px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #5843e4;
`;

const CardImage = styled.img`
  width: 148px;
  height: 148px;
  angle: 0 deg;
  margin-left: 7vw;
  margin-top: 5vh;
  opacity: 1;
  border-radius: 90px;
`;

const Title = styled.span`
  font-family: Trebuchet MS;
  font-weight: 400;
  font-size: 25px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  margin-top: 3vh;
  color: ${colors.primary};
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  position: relative;
  width: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

const Card = forwardRef(({ label, title, picture, onClickCard }, ref) => {
  const [isClicked, setClicked] = useState(false);

  return (
    <CardWrapper
      ref={ref}
      onClick={() => {
        setClicked(!isClicked);
        onClickCard();
      }}
    >
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <Title>{isClicked ? `🌟${title}` : title}</Title>
    </CardWrapper>
  );
});

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export const MotionCard = motion(Card);

export default Card;
