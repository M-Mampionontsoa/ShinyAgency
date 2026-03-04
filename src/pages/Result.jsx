import { useParams } from "react-router-dom";
import Header from "../features/Header";
import { useAnswer } from "../features/Context/AnswerProvider";

export default function Result() {
  const { answer } = useAnswer();
  console.log(answer);
  return (
    <>
      <Header />
      <h1>Result</h1>
    </>
  );
}
