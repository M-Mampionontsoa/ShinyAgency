import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import Header from "../features/Header";
import { act, useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../utils/style/colors/color.js";
import { Loader } from "../utils/Atoms.jsx";
import Footer from "../features/Footer.jsx";
import { useAnswer } from "../features/Context/AnswerProvider.jsx";

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`;

const QuestionContent = styled.span`
  margin: 30px;
`;

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`;

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.75;
    border: solid ${colors.primary};
  }
`;

const ReplyContainer = styled.div`
  display:flex;
  justify-content;space-between;
  gap:7px;

`;

export default function Survey() {
  const { questionNumber } = useParams();
  const questionNumbers = parseInt(questionNumber);

  const [activePrec, setActivePrec] = useState(false);
  const [activeSuiv, setActiveSuiv] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { saveAnswer } = useAnswer();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8000/survey/");

        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const result = await response.json();

        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchdata();
  }, [questionNumbers]);

  useEffect(() => {
    if (questionNumbers > 1) {
      setActivePrec(true);
    } else {
      setActivePrec(false);
    }

    if (questionNumbers < 7) {
      setActiveSuiv(true);
    } else {
      setActiveSuiv(false);
    }
  }, [questionNumbers]);

  if (questionNumbers === 7) {
    return (
      <>
        <Link to="/result">Result</Link>
      </>
    );
  }

  if (error) return <div>Erreur: {error}</div>;
  if (!data) return <div>Aucune donnée</div>;

  return (
    <>
      <Header />
      <SurveyContainer>
        <LinkWrapper>
          <NavLink
            to={`/questions/${questionNumbers - 1} `}
            style={
              activePrec
                ? { color: "black" }
                : { color: "grey", pointerEvents: "none" }
            }
          >
            Précédent
          </NavLink>
          <NavLink
            to={`/questions/${questionNumbers + 1}`}
            style={
              activeSuiv
                ? { color: "black" }
                : { color: "grey", pointerEvents: "none" }
            }
          >
            Suivant
          </NavLink>
        </LinkWrapper>
        <QuestionTitle>Question numero {questionNumbers} </QuestionTitle>
        {loading ? (
          <Loader />
        ) : (
          <QuestionContent>{data.surveyData[questionNumbers]}</QuestionContent>
        )}
        <ReplyContainer>
          <ReplyBox
            onClick={() => {
              saveAnswer("Oui", questionNumbers);
              navigate(`/questions/${questionNumbers + 1}`);
            }}
          >
            Oui
          </ReplyBox>
          <ReplyBox
            onClick={() => {
              saveAnswer("Non", questionNumbers);
              navigate(`/questions/${questionNumbers + 1}`);
            }}
          >
            Non
          </ReplyBox>
        </ReplyContainer>
      </SurveyContainer>
      <Footer />
    </>
  );
}
