"use client";

import React from "react";
import { ModuleLayout } from "@/components/ModuleLayout";
import { ModuleSection } from "@/components/ModuleSection";
import Quiz from "@/components/Quiz";
import { useQuizQuestions } from "@/lib/utils/quizLoader";

// Import quiz data
import introQuizRaw from "@/quiz/design-thinking/intro.json" assert { type: "json" };
// ... import other quizzes

export const DesignThinkingContent = () => {
  // Load quiz questions
  const introQuiz = useQuizQuestions(introQuizRaw);
  
  return (
    <ModuleLayout
      examPath="/exam/design-thinking"
      examTitle="Abschlusstest: Design Thinking"
      examQuestionCount={27}
      testSectionId="abschlusstest"
    >
      {/* Section 1: Einführung */}
      <ModuleSection
        id="einfuhrung"
        title="Einführung in Design Thinking"
        quiz={
          <div className="pt-6">
            <Quiz title="Quiz: Einführung" questions={introQuiz} />
          </div>
        }
      >
        <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent mb-3">
          Was ist Design Thinking?
        </h3>
        <div className="text-gray-700 space-y-4 mb-6">
          <p>
            Design Thinking lässt sich als eine Philosophie und ein Werkzeugkasten 
            zur kreativen Problemlösung definieren...
          </p>
          {/* Rest of content */}
        </div>
      </ModuleSection>

      {/* Section 2: Prinzipien */}
      <ModuleSection
        id="prinzipien"
        title="Design Thinking Prinzipien"
        quiz={
          <div className="pt-6">
            <Quiz title="Quiz: Prinzipien" questions={[]} />
          </div>
        }
      >
        {/* Content */}
      </ModuleSection>

      {/* More sections... */}
    </ModuleLayout>
  );
};
