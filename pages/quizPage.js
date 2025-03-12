import QuizPage from '@/components/QuizPage';
import { QuizContext } from '@/context/quizContext';
import { useContext } from 'react';

export default function quizPage() {
  const { selectedQuiz } = useContext(QuizContext);

  if (!selectedQuiz) {
    return <div>No quiz selected</div>;
  }

  return <QuizPage quiz={selectedQuiz} />;
}
