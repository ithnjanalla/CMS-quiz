import axios from "axios";
import { useEffect, useState } from "react";
import Question from "../../Components/Question/Question";
import "./Test.css";

const Test: React.FC = () => {
  const [questions, setQuestions] = useState<Array<string>>([]);
  useEffect(() => {}, []);

  return (
    <div className="test">
      {questions.length > 0 ? (
        <>
          {questions.map((question: any, index: number) => (
            <Question question={question} index={index} key={question._id} />
          ))}
        </>
      ) : (
        <div className="no-records">No Records! Try adding new Records</div>
      )}
      <button type="submit" className="submit-test">
        Submit Test
      </button>
    </div>
  );
};

export default Test;
