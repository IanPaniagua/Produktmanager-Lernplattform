"use client";

import React from "react";
import { modules } from "@/lib/modules";
import { DesignThinkingContent } from "@/lib/content/design-thinking";
import { EffektivitaetContent } from "@/lib/content/effektivitaet";
import Image from "next/image";

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
      case "effektivitaet":
        return <EffektivitaetContent />;
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
            <div className="rounded-2xl mb-6">
              <Image
                src="/assets/logo-pm.svg"
                alt="PM Lernplattform Logo"
                width={180}
                height={180}
                priority
              />
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
            <h1 className={`text-4xl font-bold mb-4 ${
              content.type === "module" 
                ? "bg-gradient-primary bg-clip-text text-transparent" 
                : "bg-gradient-secondary bg-clip-text text-transparent"
            }`}>
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
