#!/bin/bash

# Script to create a new module with all necessary files
# Usage: ./scripts/create-module.sh module-name "Module Title"

if [ -z "$1" ] || [ -z "$2" ]; then
  echo "Usage: ./scripts/create-module.sh module-name \"Module Title\""
  echo "Example: ./scripts/create-module.sh agile-methoden \"Agile Methoden\""
  exit 1
fi

MODULE_NAME=$1
MODULE_TITLE=$2
MODULE_NAME_CAMEL=$(echo $MODULE_NAME | sed -r 's/(^|-)([a-z])/\U\2/g' | sed 's/-//g')

echo "Creating module: $MODULE_NAME"
echo "Title: $MODULE_TITLE"
echo "Component name: ${MODULE_NAME_CAMEL}Content"
echo ""

# Create quiz directory
mkdir -p "quiz/$MODULE_NAME"
echo "✓ Created quiz directory: quiz/$MODULE_NAME"

# Create sample quiz file
cat > "quiz/$MODULE_NAME/intro.json" << 'EOF'
{
  "questions": [
    {
      "question": "Beispielfrage 1?",
      "options": [
        {
          "text": "Option A",
          "rationale": "Erklärung für Option A"
        },
        {
          "text": "Option B (korrekt)",
          "rationale": "Dies ist die korrekte Antwort weil..."
        },
        {
          "text": "Option C",
          "rationale": "Erklärung für Option C"
        }
      ],
      "correct_answer": "Option B (korrekt)"
    }
  ]
}
EOF
echo "✓ Created sample quiz: quiz/$MODULE_NAME/intro.json"

# Create content file
cat > "lib/content/$MODULE_NAME.tsx" << EOF
"use client";

import React from "react";
import { ModuleLayout } from "@/components/ModuleLayout";
import { ModuleSection } from "@/components/ModuleSection";
import Quiz from "@/components/Quiz";
import { useQuizQuestions } from "@/lib/utils/quizLoader";

// Import quizzes
import introQuizRaw from "@/quiz/$MODULE_NAME/intro.json" assert { type: "json" };

export const ${MODULE_NAME_CAMEL}Content = () => {
  // Load quizzes
  const introQuiz = useQuizQuestions(introQuizRaw);
  
  return (
    <ModuleLayout
      examPath="/exam/$MODULE_NAME"
      examTitle="Abschlusstest: $MODULE_TITLE"
      examQuestionCount={10}
    >
      {/* Einführung */}
      <ModuleSection
        id="einfuhrung"
        title="Einführung in $MODULE_TITLE"
        quiz={
          <div className="pt-6">
            <Quiz title="Quiz: Einführung" questions={introQuiz} />
          </div>
        }
      >
        <div className="bg-gradient-to-r from-secondary-start/10 to-secondary-end/10 rounded-xl p-6 mb-6">
          <p className="text-gray-700">
            Hier kommt der Inhalt für $MODULE_TITLE...
          </p>
        </div>
      </ModuleSection>

      {/* Weitere Sektionen hier hinzufügen */}
    </ModuleLayout>
  );
};
EOF
echo "✓ Created content file: lib/content/$MODULE_NAME.tsx"

# Create exam page directory
mkdir -p "app/exam/$MODULE_NAME"

# Create exam page
cat > "app/exam/$MODULE_NAME/page.tsx" << EOF
"use client";

import React, { useEffect } from "react";
import FinalExam from "@/components/FinalExam";
import { useCombinedQuizzes } from "@/lib/utils/quizLoader";

// Import all quizzes
import introQuizRaw from "@/quiz/$MODULE_NAME/intro.json" assert { type: "json" };

export default function ${MODULE_NAME_CAMEL}ExamPage() {
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  const allQuestions = useCombinedQuizzes([
    introQuizRaw,
    // Add more quizzes here
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <FinalExam
          title="Abschlusstest: $MODULE_TITLE"
          questions={allQuestions}
        />
      </div>
    </div>
  );
}
EOF
echo "✓ Created exam page: app/exam/$MODULE_NAME/page.tsx"

echo ""
echo "✅ Module created successfully!"
echo ""
echo "Next steps:"
echo "1. Add content to lib/content/$MODULE_NAME.tsx"
echo "2. Create more quiz files in quiz/$MODULE_NAME/"
echo "3. Update Sidebar.tsx to add navigation"
echo "4. Update modules.ts to register the module"
echo ""
echo "See docs/MODULE_SYSTEM.md for more details"
