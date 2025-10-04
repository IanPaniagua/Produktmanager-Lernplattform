import { useMemo } from "react";

export type QuizJson = {
  questions: Array<{
    question: string;
    options: Array<{ text: string; rationale?: string }>;
    correct_answer: string;
  }>;
};

export type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
};

/**
 * Hook to load and transform quiz questions from JSON format
 */
export const useQuizQuestions = (quizRaw: unknown): QuizQuestion[] => {
  return useMemo(() => {
    const data = quizRaw as QuizJson;
    return data.questions.map((q) => {
      const optionTexts = q.options.map((o) => o.text);
      const correctIndex = optionTexts.findIndex(
        (t) => t.trim() === q.correct_answer.trim()
      );
      
      return {
        question: q.question,
        options: optionTexts,
        correctAnswer: Math.max(0, correctIndex),
        explanation:
          correctIndex >= 0 && q.options[correctIndex]?.rationale
            ? q.options[correctIndex].rationale
            : undefined,
      };
    });
  }, [quizRaw]);
};

/**
 * Load multiple quizzes and combine them
 */
export const useCombinedQuizzes = (quizzes: unknown[]): QuizQuestion[] => {
  return useMemo(() => {
    return quizzes.flatMap((quizRaw) => {
      const data = quizRaw as QuizJson;
      return data.questions.map((q) => {
        const optionTexts = q.options.map((o) => o.text);
        const correctIndex = optionTexts.findIndex(
          (t) => t.trim() === q.correct_answer.trim()
        );
        
        return {
          question: q.question,
          options: optionTexts,
          correctAnswer: Math.max(0, correctIndex),
          explanation:
            correctIndex >= 0 && q.options[correctIndex]?.rationale
              ? q.options[correctIndex].rationale
              : undefined,
        };
      });
    });
  }, [quizzes]);
};
