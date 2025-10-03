"use client";

import React, { useState } from "react";
import { Check, X, ChevronRight, ChevronLeft, Home } from "lucide-react";
import Link from "next/link";

interface ExamQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface FinalExamProps {
  title: string;
  questions: ExamQuestion[];
}

interface UserAnswer {
  questionIndex: number;
  selectedAnswer: number;
  isCorrect: boolean;
}

export default function FinalExam({ title, questions }: FinalExamProps) {
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setUserAnswers([]);
    setIsComplete(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    const newAnswer: UserAnswer = {
      questionIndex: currentQuestion,
      selectedAnswer,
      isCorrect,
    };

    // Update or add answer
    const existingAnswerIndex = userAnswers.findIndex(
      (a) => a.questionIndex === currentQuestion
    );
    
    let updatedAnswers;
    if (existingAnswerIndex >= 0) {
      updatedAnswers = [...userAnswers];
      updatedAnswers[existingAnswerIndex] = newAnswer;
    } else {
      updatedAnswers = [...userAnswers, newAnswer];
    }
    
    setUserAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      // Load previous answer if exists
      const nextAnswer = updatedAnswers.find((a) => a.questionIndex === currentQuestion + 1);
      setSelectedAnswer(nextAnswer?.selectedAnswer ?? null);
    } else {
      setIsComplete(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      // Load previous answer
      const prevAnswer = userAnswers.find((a) => a.questionIndex === currentQuestion - 1);
      setSelectedAnswer(prevAnswer?.selectedAnswer ?? null);
    }
  };

  const handleRestart = () => {
    setIsStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setUserAnswers([]);
    setIsComplete(false);
  };

  // Start screen
  if (!isStarted) {
    return (
      <section className="bg-gradient-to-r from-secondary-start/10 to-secondary-end/10 rounded-xl p-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            {title}
          </h2>
          <p className="text-gray-700 mb-6">
            Teste dein Wissen über Design Thinking mit diesem umfassenden Abschlusstest. 
            Der Test enthält {questions.length} Fragen aus allen Themenbereichen.
          </p>
          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">📋 Testformat:</h3>
            <ul className="text-left text-gray-600 space-y-2">
              <li>• {questions.length} Multiple-Choice-Fragen</li>
              <li>• Eine Frage pro Seite</li>
              <li>• Detaillierte Ergebnisübersicht am Ende</li>
              <li>• Mindestens 66% für das Bestehen erforderlich</li>
            </ul>
          </div>
          <div className="flex gap-4 justify-center">
            <Link
              href="/design-thinking"
              className="bg-gradient-secondary text-white px-6 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Home className="h-5 w-5" />
              Zurück zur Lernplattform
            </Link>
            <button
              onClick={handleStart}
              className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Test starten
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Results screen
  if (isComplete) {
    const score = userAnswers.filter((a) => a.isCorrect).length;
    const percentage = (score / questions.length) * 100;
    const isPassed = percentage >= 66;

    return (
      <section className="space-y-6">
        <div className="bg-gradient-secondary rounded-xl p-[2px]">
          <div className="bg-white rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Testergebnisse
            </h2>
            
            <div className="text-center mb-8">
              <div
                className={`inline-block rounded-full p-8 mb-4 ${
                  isPassed ? "bg-gradient-correct" : "bg-gradient-wrong"
                }`}
              >
                <div className="text-5xl font-bold text-white">
                  {score}/{questions.length}
                </div>
              </div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                {isPassed ? "Bestanden! 🎉" : "Nicht bestanden 💪"}
              </h3>
              <p className="text-gray-600 text-lg">
                Du hast {percentage.toFixed(0)}% der Fragen richtig beantwortet.
              </p>
              {isPassed ? (
                <p className="text-correct-end font-medium mt-2">
                  Herzlichen Glückwunsch! Du hast den Test bestanden.
                </p>
              ) : (
                <p className="text-wrong-end font-medium mt-2">
                  Wiederhole das Material und versuche es erneut.
                </p>
              )}
            </div>

            <div className="space-y-4 mb-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Detaillierte Auswertung:
              </h4>
              {questions.map((question, index) => {
                const userAnswer = userAnswers.find((a) => a.questionIndex === index);
                const isCorrect = userAnswer?.isCorrect ?? false;
                const selectedIndex = userAnswer?.selectedAnswer ?? -1;

                return (
                  <div
                    key={index}
                    className={`border-2 rounded-lg p-4 ${
                      isCorrect
                        ? "border-correct-end/30 bg-correct-start/5"
                        : "border-wrong-end/30 bg-wrong-start/5"
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      {isCorrect ? (
                        <Check className="h-6 w-6 text-correct-end flex-shrink-0 mt-1" />
                      ) : (
                        <X className="h-6 w-6 text-wrong-end flex-shrink-0 mt-1" />
                      )}
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 mb-2">
                          Frage {index + 1}: {question.question}
                        </p>
                        
                        {!isCorrect && (
                          <div className="space-y-1 mb-2">
                            <p className="text-sm text-wrong-end font-medium">
                              ✗ Deine Antwort: {question.options[selectedIndex]}
                            </p>
                            <p className="text-sm text-correct-end font-medium">
                              ✓ Richtige Antwort: {question.options[question.correctAnswer]}
                            </p>
                          </div>
                        )}
                        
                        {isCorrect && (
                          <p className="text-sm text-correct-end font-medium mb-2">
                            ✓ Richtige Antwort: {question.options[question.correctAnswer]}
                          </p>
                        )}

                        {question.explanation && (
                          <p className="text-sm text-gray-600 mt-2 bg-white rounded p-2">
                            <strong>Erklärung:</strong> {question.explanation}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center flex gap-4 justify-center">
              <Link
                href="/design-thinking"
                className="bg-gradient-secondary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <Home className="h-5 w-5" />
                Zurück zur Lernplattform
              </Link>
              <button
                onClick={handleRestart}
                className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Test wiederholen
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Question screen
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section>
      <div className="bg-gradient-secondary rounded-xl p-[2px]">
        <div className="bg-white rounded-xl p-6">
          {/* Header with progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">
                Frage {currentQuestion + 1} von {questions.length}
              </h3>
              <span className="text-sm text-gray-500">
                {progress.toFixed(0)}% abgeschlossen
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-secondary h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="mb-6">
            <p className="text-xl text-gray-900 font-medium mb-6">
              {question.question}
            </p>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`
                      w-full text-left p-4 rounded-lg border-2 transition-all
                      ${
                        isSelected
                          ? "border-secondary-end bg-secondary-start/10"
                          : "border-gray-200 hover:border-secondary-start hover:bg-gray-50"
                      }
                      cursor-pointer
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option}</span>
                      {isSelected && (
                        <div className="h-5 w-5 rounded-full bg-secondary-end flex items-center justify-center">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all
                ${
                  currentQuestion === 0
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                }
              `}
            >
              <ChevronLeft className="h-5 w-5" />
              Zurück
            </button>
            <div className="text-sm text-gray-500">
              {selectedAnswer === null
                ? "Wähle eine Antwort aus"
                : "Antwort ausgewählt"}
            </div>
            <button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all
                ${
                  selectedAnswer === null
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-secondary text-white hover:opacity-90"
                }
              `}
            >
              {currentQuestion < questions.length - 1 ? "Weiter" : "Beenden"}
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
