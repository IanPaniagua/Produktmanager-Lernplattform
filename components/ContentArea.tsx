"use client";

import React from "react";
import { modules } from "@/lib/modules";
import { BookOpen } from "lucide-react";
import { DesignThinkingContent } from "@/lib/content/design-thinking";

interface ContentAreaProps {
  selectedModuleId: string | null;
}

export default function ContentArea({ selectedModuleId }: ContentAreaProps) {
  // Find the selected module or submodule
  const findContent = () => {
    if (!selectedModuleId) return null;

    // Check if it's a main module
    const mainModule = modules.find((m) => m.id === selectedModuleId);
    if (mainModule) return { title: mainModule.title, type: "module", content: null };

    // Check if it's a submodule
    for (const module of modules) {
      const subModule = module.subModules?.find(
        (sm) => sm.id === selectedModuleId
      );
      if (subModule) return { title: subModule.title, type: "submodule", content: subModule.content };
    }

    return null;
  };

  const content = findContent();

  // Render specific content based on content identifier
  const renderContent = (contentId: string | null | undefined) => {
    if (!contentId) {
      return (
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <p className="text-gray-600 text-center">
            Inhalte werden hier angezeigt...
          </p>
        </div>
      );
    }

    switch (contentId) {
      case "design-thinking":
        return <DesignThinkingContent />;
      default:
        return (
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <p className="text-gray-600 text-center">
              Inhalte werden hier angezeigt...
            </p>
          </div>
        );
    }
  };

  if (!content) {
    return (
      <main className="flex-1 bg-gray-50 overflow-y-auto">
        <div className="container mx-auto px-8 py-12">
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="bg-gradient-primary rounded-2xl p-6 mb-6">
              <BookOpen className="h-16 w-16 text-white" />
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">
              Willkommen zur Lernplattform
            </h2>
            <p className="text-gray-600 max-w-md">
              Wählen Sie ein Modul aus der Seitenleiste, um mit dem Lernen zu
              beginnen.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-gray-50 overflow-y-auto">
      <div className="container mx-auto px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="mb-6">
            <div className="inline-block bg-gradient-primary rounded-lg px-4 py-1 mb-4">
              <span className="text-sm font-medium text-white">
                {content.type === "module" ? "Modul" : "Untermodul"}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {content.title}
            </h1>
          </div>

          <div className="prose max-w-none">
            {renderContent(content.content)}
          </div>
        </div>
      </div>
    </main>
  );
}
