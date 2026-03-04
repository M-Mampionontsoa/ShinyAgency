import styled from "styled-components";
import Header from "../features/Header";
import error from "../asset/404.svg";

const H1 = styled.h1`
  font-family: Trebuchet MS;
  font-weight: 700;
  font-size: 31px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #2f2e41;
`;

const IMG = styled.img`
  width: 875;
  height: 476;
  margin-left: 17vw;
  angle: 0 deg;
  opacity: 1;
`;

function Error() {
  return (
    <>
      <Header />
      <div>
        <H1>Oups...</H1>
        <IMG src={error} alt="error" />
        <H1>Il semblerait qu'il ai un problème</H1>
      </div>
    </>
  );
}

export default Error;
