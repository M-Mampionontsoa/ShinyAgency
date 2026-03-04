import { useParams } from "react-router-dom";
import Header from "../features/Header";
import { useAnswer } from "../features/Context/AnswerProvider";

export default function Result() {
  const { answer } = useAnswer();
  return (
    <>
      <Header />
      <h1>Result</h1>
      <ul>
        {answer.map((answer) => (
          <li>
            Question numero {answer.questionNumber}: {answer.answer}
          </li>
        ))}
      </ul>
    </>
  );
}
