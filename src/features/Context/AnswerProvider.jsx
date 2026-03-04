import { createContext, useContext, useState } from "react";

export const AnswerContext = createContext();

export default function AnswerProvider({ children }) {
  const [answer, setAnswer] = useState([]);

  const saveAnswer = (newAnswer, questionNumber) => {
    setAnswer((prevAnswer) => {
      const doublon = prevAnswer.findIndex(
        (response) => response.questionNumber === questionNumber,
      );

      if (doublon != -1) {
        const newAnswers = [...newAnswer];
        newAnswers[doublon] = {
          questionNumber: questionNumber,
          answer: newAnswer,
        };

        return newAnswers;
      } else {
        const newAnswers = [
          ...prevAnswer,
          {
            questionNumber: questionNumber,
            answer: newAnswer,
          },
        ];

        return newAnswers;
      }
    });
  };

  return (
    <AnswerContext.Provider value={{ answer, saveAnswer }}>
      {children}
    </AnswerContext.Provider>
  );
}

export function useAnswer() {
  const contextAnswer = useContext(AnswerContext);

  return contextAnswer;
}
