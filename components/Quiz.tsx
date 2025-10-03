"use client";

import React, { useState } from "react";
import { Check, X } from "lucide-react";

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface QuizProps {
  title: string;
  questions: QuizQuestion[];
}

export default function Quiz({ title, questions }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(
    new Array(questions.length).fill(false)
  );

  const handleAnswerClick = (answerIndex: number) => {
    if (answeredQuestions[currentQuestion]) return;

    setSelectedAnswer(answerIndex);
    setShowResult(true);

    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestion] = true;
    setAnsweredQuestions(newAnsweredQuestions);

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Array(questions.length).fill(false));
  };

  const renderTitle = (t: string): React.ReactNode => {
    const match = t.match(/^Quiz(?::)?\s*(.*)$/i);
    if (match) {
      const rest = match[1];
      return (
        <>
          <span className="bg-gradient-secondary bg-clip-text text-transparent uppercase font-extrabold tracking-wide">QUIZ</span>
          {rest ? `: ${rest}` : ""}
        </>
      );
    }
    return t;
  };

  const isQuizComplete = currentQuestion === questions.length;

  if (isQuizComplete) {
    const percentage = (score / questions.length) * 100;
    const isPassed = percentage >= 66;

    return (
      <div className="bg-gradient-secondary rounded-xl p-1">
        <div className="bg-white rounded-xl p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{renderTitle(title)}</h3>
        <div className="text-center py-8">
          <div
            className={`inline-block rounded-full p-6 mb-4 ${
              isPassed ? "bg-gradient-correct" : "bg-gradient-wrong"
            }`}
          >
            <div className="text-4xl font-bold text-white">
              {score}/{questions.length}
            </div>
          </div>
          <h4 className="text-2xl font-semibold text-gray-900 mb-2">
            {isPassed ? "Gut gemacht! 🎉" : "Weiter üben! 💪"}
          </h4>
          <p className="text-gray-600 mb-6">
            Du hast {percentage.toFixed(0)}% der Fragen richtig beantwortet.
          </p>
          <button
            onClick={handleRestart}
            className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Quiz wiederholen
          </button>
        </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="bg-gradient-secondary rounded-xl p-1">
      <div className="bg-white rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">{renderTitle(title)}</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            Frage {currentQuestion + 1} von {questions.length}
          </span>
          <div className="bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700">
            {score}/{questions.length}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-lg text-gray-900 font-medium mb-4">
          {question.question}
        </p>

        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectAnswer = index === question.correctAnswer;
            const showCorrect = showResult && isCorrectAnswer;
            const showWrong = showResult && isSelected && !isCorrect;

            return (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={answeredQuestions[currentQuestion]}
                className={`
                  w-full text-left p-4 rounded-lg border-2 transition-all
                  ${
                    showCorrect
                      ? "border-correct-end bg-gradient-correct text-white"
                      : showWrong
                      ? "border-wrong-end bg-gradient-wrong text-white"
                      : isSelected
                      ? "border-primary-start bg-primary-start/10"
                      : "border-gray-200 hover:border-primary-start hover:bg-gray-50"
                  }
                  ${
                    answeredQuestions[currentQuestion]
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>
                  {showCorrect && (
                    <Check className="h-5 w-5 text-white flex-shrink-0" />
                  )}
                  {showWrong && (
                    <X className="h-5 w-5 text-white flex-shrink-0" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {showResult && (
        <div
          className={`rounded-lg p-4 mb-4 ${
            isCorrect
              ? "bg-correct-start/10 border border-correct-end/20"
              : "bg-wrong-start/10 border border-wrong-end/20"
          }`}
        >
          <div className="flex items-start gap-3">
            {isCorrect ? (
              <Check className="h-6 w-6 text-correct-end flex-shrink-0 mt-0.5" />
            ) : (
              <X className="h-6 w-6 text-wrong-end flex-shrink-0 mt-0.5" />
            )}
            <div>
              <p
                className={`font-semibold mb-1 ${
                  isCorrect ? "text-correct-end" : "text-wrong-end"
                }`}
              >
                {isCorrect ? "Richtig!" : "Leider falsch!"}
              </p>
              {question.explanation && (
                <p className="text-gray-700 text-sm">{question.explanation}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {showResult && currentQuestion < questions.length - 1 && (
        <button
          onClick={handleNextQuestion}
          className="w-full bg-gradient-primary text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Nächste Frage
        </button>
      )}

      {showResult && currentQuestion === questions.length - 1 && (
        <button
          onClick={handleNextQuestion}
          className="w-full bg-gradient-secondary text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Ergebnisse anzeigen
        </button>
      )}
      </div>
    </div>
  );
}
