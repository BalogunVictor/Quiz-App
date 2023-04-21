import { AnswerObject } from '@/pages';
import React from 'react'

type Props = {
  question: string;
  answers:string[];
  callback: (e:React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined; 
  questionNr: number;
  totalQuestions:number;
}

const QuestionCard: React.FC<Props> = ({
  question, 
  answers, 
  callback,
  userAnswer,
  questionNr,
  totalQuestions
}) => {
  return (
    <div>
      <p>
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        { answers.map((answer) => (
          <div key={answer}> 
            <button 
              disabled={userAnswer ? true : false}  
              value={answer} 
              onClick={callback}
            >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionCard