"use client";

import React, { useState, ReactNode } from "react";
import Link from "next/link";

interface ModuleLayoutProps {
  children: ReactNode;
  examPath?: string;
  examTitle?: string;
  examQuestionCount?: number;
  testSectionId?: string;
}

export const ModuleLayout: React.FC<ModuleLayoutProps> = ({
  children,
  examPath,
  examTitle = "Abschlusstest",
  examQuestionCount,
  testSectionId = "abschlusstest",
}) => {
  const [quizMode, setQuizMode] = useState(false);

  return (
    <div className="relative space-y-12">
      {/* Quiz Mode Toggle & Test Button */}
      <div className="absolute -top-2 -right-2 z-50 flex gap-2">
        <button
          onClick={() => setQuizMode(!quizMode)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg ${
            quizMode
              ? "bg-gradient-primary text-white"
              : "bg-gradient-secondary text-white hover:opacity-90"
          }`}
        >
          {quizMode ? "Theorie anzeigen" : "Nur QUIZ anzeigen"}
        </button>
        {examPath && (
          <button
            onClick={() => {
              const testSection = document.getElementById(testSectionId);
              if (testSection) {
                testSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="bg-gradient-primary text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg hover:opacity-90"
          >
            Zum Test
          </button>
        )}
      </div>

      {/* Content with quizMode context */}
      <ModuleContext.Provider value={{ quizMode }}>
        {children}
      </ModuleContext.Provider>

      {/* Exam Section - Only if examPath is provided */}
      {examPath && (
        <section>
          <h2 id={testSectionId} className="scroll-mt-24 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Abschlusstest
          </h2>
          <div className="bg-gradient-to-r from-secondary-start/10 to-secondary-end/10 rounded-xl p-8">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                {examTitle}
              </h3>
              <p className="text-gray-700 mb-6">
                Teste dein Wissen mit diesem umfassenden Abschlusstest.
                {examQuestionCount && ` Der Test enthält ${examQuestionCount} Fragen aus allen Themenbereichen.`}
              </p>
              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">📋 Testformat:</h3>
                <ul className="text-left text-gray-600 space-y-2">
                  {examQuestionCount && <li>• {examQuestionCount} Multiple-Choice-Fragen</li>}
                  <li>• Eine Frage pro Seite</li>
                  <li>• Navigation mit Zurück-Button (ein Schritt)</li>
                  <li>• Detaillierte Ergebnisübersicht am Ende</li>
                  <li>• Mindestens 66% für das Bestehen erforderlich</li>
                </ul>
              </div>
              <Link
                href={examPath}
                className="inline-block bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Test starten
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

// Context for quizMode
export const ModuleContext = React.createContext<{ quizMode: boolean }>({ quizMode: false });

// Hook to use quizMode in child components
export const useQuizMode = () => {
  const context = React.useContext(ModuleContext);
  if (!context) {
    throw new Error('useQuizMode must be used within ModuleLayout');
  }
  return context.quizMode;
};
