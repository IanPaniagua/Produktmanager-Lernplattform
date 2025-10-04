"use client";

import React, { useEffect } from "react";
import FinalExam from "@/components/FinalExam";
import introQuizRaw from "@/quiz/effektivität-effizience/Einführung-Effektivität-und-Effizienz-als-PM.json" assert { type: "json" };
import kommunikationQuizRaw from "@/quiz/effektivität-effizience/kommunikation.json" assert { type: "json" };
import zeitmanagementQuizRaw from "@/quiz/effektivität-effizience/zeitmanagement.json" assert { type: "json" };
import priorisierungQuizRaw from "@/quiz/effektivität-effizience/priorizierung-aufgaben.json" assert { type: "json" };
import storytellingQuizRaw from "@/quiz/effektivität-effizience/storytelling.json" assert { type: "json" };
import slidesQuizRaw from "@/quiz/effektivität-effizience/slides.json" assert { type: "json" };
import finalQuizRaw from "@/quiz/effektivität-effizience/quiz-effectivität-efficience.json" assert { type: "json" };

type QuizJson = {
  questions: Array<{
    question: string;
    options: Array<{ text: string; rationale?: string }>;
    correct_answer: string;
  }>;
};

export default function EffektivitaetEffizienzExamPage() {
  useEffect(() => {
    // Prevent accidental page close during exam
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Combine all quiz questions
  const allQuizzes = [
    introQuizRaw,
    kommunikationQuizRaw,
    zeitmanagementQuizRaw,
    priorisierungQuizRaw,
    storytellingQuizRaw,
    slidesQuizRaw,
    finalQuizRaw
  ] as QuizJson[];

  // Map all questions to FinalExam format
  const allQuestions = allQuizzes.flatMap((quiz) =>
    quiz.questions.map((q) => {
      const optionTexts = q.options.map((o) => o.text);
      const correctIndex = optionTexts.findIndex(
        (t) => t.trim() === q.correct_answer.trim()
      );
      const explanation = q.options[correctIndex]?.rationale || "";

      return {
        question: q.question,
        options: optionTexts,
        correctAnswer: Math.max(0, correctIndex),
        explanation: explanation,
      };
    })
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <FinalExam
          title="Abschlusstest: Persönliche Effektivität & Effizienz"
          questions={allQuestions}
        />
      </div>
    </div>
  );
}
