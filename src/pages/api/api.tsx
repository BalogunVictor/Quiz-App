import { shuffleArray } from "@/components/utils/utils";

export type Question = {
  category: string;
  correct_answer:string;
  difficulty:string;
  incorrect_answers:string[];
  question:string;
  type:string;
}

export type QuestionState = Question & {answers: string[]};

export enum Difficulty {
  EASY = 'easy',
  MEDIUM ='medium',
  HARD = 'hard'
}


export const fetchQuizQuestion = async (
  amount:number,
   difficuty:Difficulty
   ) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficuty}&type=multiple`;
   const data = await (await fetch(endpoint)).json();
   return data.results.map((question:Question) => (
     {
       ...question,
       answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
     }))
  }
