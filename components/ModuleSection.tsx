"use client";

import React, { ReactNode } from "react";
import { useQuizMode } from "./ModuleLayout";

interface ModuleSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  quiz?: ReactNode;
}

export const ModuleSection: React.FC<ModuleSectionProps> = ({
  id,
  title,
  children,
  quiz,
}) => {
  const quizMode = useQuizMode();

  return (
    <section>
      <h2 id={id} className="scroll-mt-24 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
        {title}
      </h2>
      
      {/* Theory content - hidden in quiz mode */}
      {!quizMode && children}
      
      {/* Quiz - always visible */}
      {quiz}
    </section>
  );
};
