"use client";

import React, { useEffect } from "react";
import FinalExam from "@/components/FinalExam";

export default function DesignThinkingExamPage() {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <FinalExam
          title="Abschlusstest: Design Thinking"
          questions={[
            // Quiz 1: Einführung in Design Thinking
            {
              question: "Was ist KEIN Hauptprinzip von Design Thinking für Produktmanager?",
              options: [
                "Menschenzentrierter Ansatz mit Fokus auf Kundenbedürfnisse",
                "Umsatzorientiertes Denken und Fokus auf Organisationsbedürfnisse",
                "Iteratives Lösen von Problemen mit schnellen Prototypen"
              ],
              correctAnswer: 1,
              explanation: "Design Thinking konzentriert sich auf Kundenbedürfnisse, nicht auf umsatzorientiertes Denken. Das ist ein häufiger Fehler von PMs."
            },
            {
              question: "Welcher Fehler wird von Produktmanagern häufig gemacht?",
              options: [
                "Fokus auf das Problem statt auf Funktionen",
                "Fokus auf Funktionen statt auf das Problem",
                "Zusammenarbeit mit funktionsübergreifenden Teams"
              ],
              correctAnswer: 1,
              explanation: "PMs sollten sich auf das Problem konzentrieren, anstatt sich sofort auf Produkte oder Lösungen zu stürzen."
            },
            {
              question: "Was fördert Design Thinking besonders?",
              options: [
                "Strikte Planung und detaillierte Analyse",
                "Innovation und kreatives, unkonventionelles Denken",
                "Hierarchische Entscheidungsfindung"
              ],
              correctAnswer: 1,
              explanation: "Design Thinking fördert spielerisches und unkonventionelles Denken, um die Entwicklung neuer Produkte zu unterstützen."
            },
            {
              question: "Wie lässt sich Design Thinking am besten beschreiben?",
              options: [
                "Als starres Projektmanagement-Framework mit festen Regeln",
                "Als Philosophie und Werkzeugkasten zur kreativen Problemlösung",
                "Als reines UX-Testing-Verfahren am Ende der Entwicklung"
              ],
              correctAnswer: 1,
              explanation: "Design Thinking ist eine Philosophie und ein Werkzeugkasten zur kreativen Problemlösung, häufig genutzt, um Innovationen zu schaffen."
            },
            {
              question: "Welche der folgenden Reihenfolgen bildet den fünfstufigen Zyklus korrekt ab?",
              options: [
                "Discover → Design → Develop → Deliver → Deploy",
                "Empathize → Define → Ideate → Prototype → Test",
                "Research → Build → Measure → Learn → Scale"
              ],
              correctAnswer: 1,
              explanation: "Die fünf Phasen sind Empathize, Define, Ideate, Prototype und Test in einem iterativen Zyklus."
            },
            {
              question: "Welche Aussage zur Flexibilität von Design Thinking ist korrekt?",
              options: [
                "Design Thinking ist ein starres Rezept mit unveränderlichen Übungen",
                "Design Thinking ist flexibel; Übungen sind anpassbar je nach Facilitator",
                "Design Thinking darf nur in der Reihenfolge Ideate → Prototype → Test verwendet werden"
              ],
              correctAnswer: 1,
              explanation: "Design Thinking ist keine starre Methode, sondern flexibel; Übungen je Phase lassen sich an Ziel und Team anpassen."
            },
            // Quiz 2: Design Thinking Prinzipien
            {
              question: "Was bedeutet 'Menschenzentriert' im Kontext von Design Thinking?",
              options: [
                "Fokus auf die Bedürfnisse, Wünsche und Erfahrungen der Nutzer",
                "Fokus auf die Hierarchie im Team",
                "Fokus auf technische Perfektion",
                "Fokus auf Gewinnmaximierung"
              ],
              correctAnswer: 0,
              explanation: "Beim Design Thinking geht es um die Bedürfnisse, Wünsche und Erfahrungen der Nutzer - der Mensch steht im Zentrum."
            },
            {
              question: "Warum ist Kooperation ein wichtiges Prinzip im Design Thinking?",
              options: [
                "Um Kosten zu sparen",
                "Weil vielfältige Teams mit unterschiedlichen Fähigkeiten bessere Lösungen entwickeln",
                "Um Entscheidungen schneller zu treffen",
                "Um Verantwortung zu verteilen"
              ],
              correctAnswer: 1,
              explanation: "Design Thinking erfordert die Zusammenarbeit mit einem vielfältigen Team mit unterschiedlichen Fähigkeiten und Hintergründen, was zu besseren Lösungen führt."
            },
            {
              question: "Was bedeutet das Prinzip 'Aktion vor Analyse'?",
              options: [
                "Keine Planung ist notwendig",
                "Handeln und Experimentieren hat Vorrang vor perfekter Planung",
                "Analyse ist unwichtig",
                "Schnelligkeit ist wichtiger als Qualität"
              ],
              correctAnswer: 1,
              explanation: "Design Thinking stellt Handeln und Experimentieren über Analyse und Planung und ermöglicht es den Teams, Ideen schnell zu testen und zu überarbeiten."
            },
            // Quiz 3: Double Diamond
            {
              question: "Was beschreibt der Double Diamond im Kontext von Design Thinking?",
              options: [
                "Ein beliebtes Prozessmodell zur Problemlösung und Ideenentwicklung",
                "Ein KPI zur Messung von Produktumsatz",
                "Ein Tool für High-Fidelity-Prototypen"
              ],
              correctAnswer: 0,
              explanation: "Der Double Diamond ist eines der populärsten Prozessmodelle aus dem Design Thinking und beschreibt eine Herangehensweise an Problemlösung und Ideengenerierung."
            },
            {
              question: "In wie viele Phasen teilt sich der Double Diamond auf?",
              options: [
                "In drei Phasen: Research, Build, Scale",
                "In zwei Phasen: Problemphase und Lösungsphase",
                "In fünf lineare Schritte"
              ],
              correctAnswer: 1,
              explanation: "Er besteht aus Problemphase (1. Diamant) und Lösungsphase (2. Diamant)."
            },
            {
              question: "Welche zwei Bewegungen enthält JEDE Phase im Double Diamond?",
              options: [
                "Planen und Umsetzen",
                "Divergieren und Konvergieren",
                "Messen und Skalieren"
              ],
              correctAnswer: 1,
              explanation: "Jede Phase hat eine Divergenz (Feld aufmachen) und eine Konvergenz (Ideen verdichten/priorisieren)."
            },
            {
              question: "Wie verhält sich der Double Diamond zu den 5 Schritten (Empathize, Define, Ideate, Prototype, Test)?",
              options: [
                "Sie widersprechen sich grundlegend",
                "Sie bilden im Grunde dasselbe Vorgehen ab; beim Double Diamond ist der erste Teil größer, Research/Insights sind getrennt und der Test ist unter Prototyping subsumiert",
                "Die 5 Schritte sind ausschließlich für Marketing geeignet"
              ],
              correctAnswer: 1,
              explanation: "Beide Modelle beschreiben das gleiche Vorgehen; der Double Diamond betont Research/Insights separat und fasst Testing unter Prototyping zusammen."
            },
            {
              question: "Wie oft wird eine Phase des Double Diamond typischerweise in der Praxis iteriert?",
              options: [
                "Mehrfach, bis ein endgültiges Ergebnis entsteht (üblich in Lehrmeinung)",
                "Gar nicht – es ist strikt linear",
                "Meist eine Iteration pro Phase in der freien Wirtschaft"
              ],
              correctAnswer: 2,
              explanation: "In der Praxis wird häufig eine Iteration pro Phase angesetzt, während die Lehrmeinung mehrere Wiederholungen vorsieht."
            },
            // Quiz 4: Prinzipien & Double Diamond
            {
              question: "Welches ist KEIN Prinzip von Design Thinking?",
              options: [
                "Menschenzentriert - Fokus auf Nutzerbedürfnisse",
                "Kooperativ - Zusammenarbeit mit vielfältigen Teams",
                "Analyse vor Aktion - Detaillierte Planung zuerst"
              ],
              correctAnswer: 2,
              explanation: "Design Thinking stellt Handeln und Experimentieren über Analyse und Planung. 'Aktion vor Analyse' ist das richtige Prinzip."
            },
            {
              question: "Wann ist der Design Thinking Prozess abgeschlossen?",
              options: [
                "Wenn eine Idee materialisiert und konkret implementiert ist",
                "Nach der Ideenfindungsphase",
                "Sobald ein Prototyp erstellt wurde"
              ],
              correctAnswer: 0,
              explanation: "Du bist erst fertig, wenn eine Idee materialisiert und konkret implementiert ist, nicht nur konzipiert."
            },
            {
              question: "Mit welcher Haltung startet man im Design Thinking Prozess?",
              options: [
                "Mit Expertenwissen und festen Annahmen",
                "Mit einem 'Beginners Mind' und der Haltung, dass man nichts weiß",
                "Mit fertigen Lösungskonzepten"
              ],
              correctAnswer: 1,
              explanation: "Man startet mit einem 'Beginners Mind' und der Haltung, dass man nichts weiß, um offen für neue Erkenntnisse zu sein."
            },
            // Quiz 5: Die 5 Schritte des Design Thinking
            {
              question: "Was ist das Hauptziel der Empathize-Phase?",
              options: [
                "Eine finale Lösung definieren",
                "Die Bedürfnisse und Perspektiven der Nutzer verstehen",
                "Ein MVP bauen",
                "Ein Business-Case erstellen"
              ],
              correctAnswer: 1,
              explanation: "In Empathize geht es darum, die Nutzer zu verstehen und ihre Bedürfnisse durch Interviews, Beobachtungen, etc. zu erfassen."
            },
            {
              question: "Welches Artefakt passt typischerweise in die Define-Phase?",
              options: [
                "Affinity Map und HMW-Statements",
                "Click-Dummy",
                "Go-To-Market-Plan",
                "A/B-Testergebnis"
              ],
              correctAnswer: 0,
              explanation: "In Define werden Erkenntnisse strukturiert (z.B. Affinity Maps) und Probleme als HMW-Statements formuliert."
            },
            {
              question: "Welche Regel ist für die Ideate-Phase besonders wichtig?",
              options: [
                "Ideen sofort bewerten",
                "Nur eine Idee erzeugen",
                "Quantität vor Qualität, keine Bewertung während der Generierung",
                "Nur Experten brainstormen lassen"
              ],
              correctAnswer: 2,
              explanation: "Während Ideate werden möglichst viele Ideen generiert, ohne diese gleichzeitig zu bewerten."
            },
            {
              question: "Was ist typisch für einen Low-Fidelity-Prototyp?",
              options: [
                "Pixelperfekte Visuals",
                "Einfache, schnelle Skizzen zur schnellen Iteration",
                "Komplette Backend-Integration",
                "Produktionsreifer Code"
              ],
              correctAnswer: 1,
              explanation: "Low-Fidelity-Prototypen sind schnell erstellt, günstig und ideal für frühes Feedback."
            },
            {
              question: "Welcher Zweck hat die Test-Phase?",
              options: [
                "Marketing-Budget erhöhen",
                "Annahmen zur Lösung validieren und Nutzbarkeit prüfen",
                "Design-System dokumentieren",
                "Roadmap finalisieren"
              ],
              correctAnswer: 1,
              explanation: "In Test werden Annahmen validiert und die Benutzerfreundlichkeit mit echten Nutzern geprüft."
            },
            {
              question: "Welche Methode gehört NICHT primär zur Empathize-Phase?",
              options: [
                "User Interviews",
                "Feldbeobachtungen",
                "Usability-Tests eines fertigen Produkts",
                "Journey Mapping zur Verständnisbildung"
              ],
              correctAnswer: 2,
              explanation: "Usability-Tests werden typischerweise später mit Prototypen oder Produkten durchgeführt."
            },
            {
              question: "Was ist ein gutes Ergebnis der Define-Phase?",
              options: [
                "Ein priorisiertes Backlog",
                "Ein klar formuliertes Problem-Statement (z.B. HMW)",
                "Ein MVP-Launch",
                "Ein detailliertes UI-Design"
              ],
              correctAnswer: 1,
              explanation: "Define führt zu Klarheit über das Problem, u.a. in Form von HMW-Statements."
            },
            {
              question: "Welche Ideation-Technik zielt darauf, schnell viele Varianten zu skizzieren?",
              options: [
                "Usability-Testing",
                "Crazy 8s",
                "Unit Testing",
                "Roadmapping"
              ],
              correctAnswer: 1,
              explanation: "Crazy 8s erzeugt 8 verschiedene Ideen in 8 Minuten und fördert Divergenz."
            },
            {
              question: "Welcher Vorteil ist typisch für High-Fidelity-Prototypen?",
              options: [
                "Sehr schnell zu erstellen",
                "Ermöglichen realitätsnäheres Feedback",
                "Benötigen keine Design-Konsistenz",
                "Ersetzen den Launch"
              ],
              correctAnswer: 1,
              explanation: "High-Fidelity-Prototypen sind visualisierungsstark und liefern realitätsnäheres Feedback."
            },
            {
              question: "Worauf wird in der Test-Phase besonders geachtet?",
              options: [
                "Code Coverage",
                "Nutzerverhalten, Verständlichkeit und Zielerreichung",
                "Serverkosten",
                "Brand Guidelines"
              ],
              correctAnswer: 1,
              explanation: "Tests fokussieren auf Nutzerverhalten, Verständnis und ob die Lösung hilft, Ziele zu erreichen."
            }
          ]}
        />
      </div>
    </div>
  );
}
