import React from "react";
import { BookOpen } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center px-6">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-primary rounded-xl p-2">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              Produktmanagement
            </h1>
            <p className="text-xs text-gray-500">Lernplattform</p>
          </div>
        </div>
      </div>
    </header>
  );
}
