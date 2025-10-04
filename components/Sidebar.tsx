"use client";

import React, { useState } from "react";
import { FileText, ChevronDown } from "lucide-react";
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
  const [showSubNav, setShowSubNav] = useState(true);
  
  // Check if any submodule of this module is selected
  const isModuleOrSubModuleSelected = (module: typeof modules[0]) => {
    if (selectedModuleId === module.id) return true;
    return module.subModules?.some(sub => sub.id === selectedModuleId) || false;
  };
  
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
                    isModuleOrSubModuleSelected(module)
                      ? "bg-gradient-primary text-white hover:bg-gradient-primary [&>svg]:text-white"
                      : "hover:bg-gray-50 [&>svg]:text-gray-600"
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
                      <div key={subModule.id} className="space-y-1">
                        <button
                          onClick={() => {
                            onSelectModule(subModule.id);
                            if (
                              selectedModuleId === subModule.id &&
                              (subModule.content === "design-thinking" || subModule.content === "effektivitaet")
                            ) {
                              setShowSubNav(!showSubNav);
                            } else {
                              setShowSubNav(true);
                            }
                          }}
                          className={`
                            w-full flex items-center justify-between gap-3 px-4 py-2 rounded-lg text-sm transition-all
                            ${
                              selectedModuleId === subModule.id
                                ? "bg-gradient-secondary text-white"
                                : "hover:bg-gray-50 text-gray-700"
                            }
                          `}
                        >
                          <div className="flex items-center gap-3">
                            <FileText className="h-4 w-4" />
                            <span>{subModule.title}</span>
                          </div>
                          {(subModule.content === "design-thinking" || subModule.content === "effektivitaet") && selectedModuleId === subModule.id && (
                            <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${showSubNav ? 'rotate-180' : ''}`} />
                          )}
                        </button>

                        {selectedModuleId === subModule.id && subModule.content === "design-thinking" && showSubNav && (
                          <nav className="ml-7 mt-1 mb-2 border-l border-gray-200 pl-3 space-y-1">
                            <a href="#einfuhrung" className="block text-xs text-gray-600 hover:text-primary-end">
                              Einführung
                            </a>
                            <a href="#prinzipien" className="block text-xs text-gray-600 hover:text-primary-end">
                              Prinzipien
                            </a>
                            <a href="#double-diamond" className="block text-xs text-gray-600 hover:text-primary-end">
                              Double Diamond
                            </a>
                            <a href="#prozess" className="block text-xs text-gray-600 hover:text-primary-end">
                              Design Thinking-Prozess
                            </a>
                            <a href="#schritte" className="block text-xs text-gray-600 hover:text-primary-end">
                              5 Schritte
                            </a>
                            <a href="#vs-agile" className="block text-xs text-gray-600 hover:text-primary-end">
                              vs. Agile Methoden
                            </a>
                            <a href="#key-takeaways" className="block text-xs text-gray-600 hover:text-primary-end">
                              Key Takeaways
                            </a>
                            <a href="#abschlusstest" className="block text-xs text-gray-600 hover:text-primary-end">
                              Abschlusstest
                            </a>
                          </nav>
                        )}
                        {selectedModuleId === subModule.id && subModule.content === "effektivitaet" && showSubNav && (
                          <nav className="ml-7 mt-1 mb-2 border-l border-gray-200 pl-3 space-y-1">
                            <a href="#einfuhrung" className="block text-xs text-gray-600 hover:text-primary-end">Einführung</a>
                            <a href="#zeitmanagement" className="block text-xs text-gray-600 hover:text-primary-end">Zeitmanagement</a>
                            <a href="#priorisierung" className="block text-xs text-gray-600 hover:text-primary-end">Priorisierung</a>
                            <a href="#kommunikation" className="block text-xs text-gray-600 hover:text-primary-end">Kommunikation</a>
                            <a href="#storytelling" className="block text-xs text-gray-600 hover:text-primary-end">Storytelling</a>
                            <a href="#prasentationen" className="block text-xs text-gray-600 hover:text-primary-end">Präsentationen</a>
                            <a href="#kritisches-denken" className="block text-xs text-gray-600 hover:text-primary-end">Kritisches Denken</a>
                            <a href="#abstraktes-denken" className="block text-xs text-gray-600 hover:text-primary-end">Abstraktes Denken</a>
                            <a href="#zusammenarbeit" className="block text-xs text-gray-600 hover:text-primary-end">Zusammenarbeit</a>
                            <a href="#meetings" className="block text-xs text-gray-600 hover:text-primary-end">Meetings moderieren</a>
                            <a href="#icebreaker" className="block text-xs text-gray-600 hover:text-primary-end">Icebreaker</a>
                            <a href="#ownership" className="block text-xs text-gray-600 hover:text-primary-end">Ownership</a>
                            <a href="#resilienz" className="block text-xs text-gray-600 hover:text-primary-end">Resilienz</a>
                            <a href="#feedback" className="block text-xs text-gray-600 hover:text-primary-end">Feedback</a>
                            <a href="#abschlusstest" className="block text-xs text-gray-600 hover:text-primary-end">Abschlusstest</a>
                          </nav>
                        )}
                      </div>
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
