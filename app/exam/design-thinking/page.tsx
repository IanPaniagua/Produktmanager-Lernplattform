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
            // Quiz 2: Double Diamond
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
            // Quiz 3: Prinzipien & Double Diamond
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
            }
          ]}
        />
      </div>
    </div>
  );
}
