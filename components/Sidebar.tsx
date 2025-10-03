"use client";

import React from "react";
import { FileText } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { modules } from "@/lib/modules";

interface SidebarProps {
  selectedModuleId: string | null;
  onSelectModule: (moduleId: string) => void;
}

export default function Sidebar({
  selectedModuleId,
  onSelectModule,
}: SidebarProps) {
  return (
    <aside className="w-80 border-r border-gray-200 bg-white h-full overflow-y-auto">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Module</h2>
        <Accordion type="single" collapsible className="space-y-2">
          {modules.map((module) => (
            <AccordionItem
              key={module.id}
              value={module.id}
              className="border-none"
            >
              <AccordionTrigger
                onClick={() => onSelectModule(module.id)}
                className={`
                  rounded-lg transition-all
                  ${
                    selectedModuleId === module.id
                      ? "bg-gradient-primary text-white hover:bg-gradient-primary"
                      : "hover:bg-gray-50"
                  }
                `}
              >
                <span className="text-sm font-medium text-left">
                  {module.title}
                </span>
              </AccordionTrigger>
              {module.subModules && module.subModules.length > 0 && (
                <AccordionContent>
                  <div className="space-y-1">
                    {module.subModules.map((subModule) => (
                      <button
                        key={subModule.id}
                        onClick={() => onSelectModule(subModule.id)}
                        className={`
                          w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all
                          ${
                            selectedModuleId === subModule.id
                              ? "bg-gradient-secondary text-white"
                              : "hover:bg-gray-50 text-gray-700"
                          }
                        `}
                      >
                        <FileText className="h-4 w-4" />
                        <span>{subModule.title}</span>
                      </button>
                    ))}
                  </div>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </aside>
  );
}
