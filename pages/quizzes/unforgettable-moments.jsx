import QuizPage from '@/components/QuizPage';
import { QuizContext } from '@/context/quizContext';
import { useContext } from 'react';

export default function oscars2025() {
  const { selectedQuiz } = useContext(QuizContext);

  if (!selectedQuiz) {
    return <div>No quiz selected</div>;
  }

  return <QuizPage quiz={selectedQuiz} />;
}
