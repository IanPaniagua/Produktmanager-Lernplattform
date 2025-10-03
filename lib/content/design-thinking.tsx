"use client";

import React, { useState } from "react";
import Image from "next/image";
import Quiz from "@/components/Quiz";
import Link from "next/link";

export const DesignThinkingContent = () => {
  const [showBrainstorm, setShowBrainstorm] = useState(false);
  const [showBrainstormSummary, setShowBrainstormSummary] = useState(false);
  const [showScamper, setShowScamper] = useState(false);
  const [showScamperSummary, setShowScamperSummary] = useState(false);
  const [showMindmapSummary, setShowMindmapSummary] = useState(false);
  const [showCrazySummary, setShowCrazySummary] = useState(false);
  const [quizMode, setQuizMode] = useState(false);
  
  return (
    <div className="relative space-y-12">
      {/* Quiz Mode Toggle - Absolute Position */}
      <button
        onClick={() => setQuizMode(!quizMode)}
        className={`absolute -top-2 -right-2 z-50 px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg ${
          quizMode
            ? "bg-gradient-primary text-white"
            : "bg-gradient-secondary text-white hover:opacity-90"
        }`}
      >
        {quizMode ? "Theorie anzeigen" : "Nur QUIZ anzeigen"}
      </button>
      {/* Introduction */}
      <section>
        <h2 id="einfuhrung" className="scroll-mt-24 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Einführung in Design Thinking</h2>
        {!quizMode && (
        <>
        <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent mb-3">Was ist Design Thinking?</h3>
        <div className="text-gray-700 space-y-4 mb-6">
          <p>
            Design Thinking lässt sich als eine Philosophie und ein Werkzeugkasten zur kreativen Problemlösung definieren. Es ist ein Ansatz, der häufig verwendet wird, um Innovationen zu schaffen und komplexe Probleme zu bewältigen.
          </p>
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Zentrale Merkmale</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Menschzentriertheit (Human-Centered Design):</strong> Problemlösung durch die Linse des Menschen. Empathie für die Zielgruppe entwickeln, Bedürfnisse verstehen und darauf basierend Lösungen finden.
              </li>
              <li>
                <strong>Iterativer Fünf-Schritte-Zyklus:</strong> Der Prozess besteht aus fünf Kernphasen, die einen fortlaufenden Zyklus bilden:
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li><strong>Empathize</strong> (Verstehen der Benutzer)</li>
                  <li><strong>Define</strong> (Probleme und Bedürfnisse definieren)</li>
                  <li><strong>Ideate</strong> (Ideen und Lösungen entwickeln)</li>
                  <li><strong>Prototype</strong> (Einfache, testbare Prototypen erstellen)</li>
                  <li><strong>Test</strong> (Mit echten Benutzern testen; Rückkehr zur Define-Phase)</li>
                </ul>
              </li>
              <li>
                <strong>Flexibilität:</strong> Kein starres Rezept, sondern eine flexible Philosophie und Denkweise. Die konkreten Übungen pro Phase sind anpassbar und hängen von der Person ab, die den Prozess leitet.
              </li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              Design Thinking wird weltweit von fast jedem innovativen Unternehmen genutzt und ist seit etwa 20 Jahren relevant.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-primary-start/10 to-primary-end/10 rounded-xl p-6 mb-4">
          <h4 className="font-semibold text-gray-900 mb-3">Warum Design Thinking für PMs?</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">👥</span>
              <div>
                <p className="font-medium text-gray-900">Menschenzentrierter Ansatz</p>
                <p className="text-gray-600">Starker Fokus auf Kundenbedürfnisse und den Wunsch, Produkte zu liefern, die diese erfüllen.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">➿</span>
              <div>
                <p className="font-medium text-gray-900">Iteratives Lösen von Problemen</p>
                <p className="text-gray-600">Gehe mögliche Probleme mit einem Prototyp an, der schnell getestet werden kann.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <p className="font-medium text-gray-900">Innovation und Kreativität</p>
                <p className="text-gray-600">Fördert spielerisches und unkonventionelles Denken, um die Entwicklung neuer Produkte zu unterstützen.</p>
              </div>
            </div>

            
          </div>
        </div>

        <div className="bg-gradient-to-r from-wrong-start/10 to-wrong-end/10 rounded-xl p-6">
          <h4 className="font-semibold text-gray-900 mb-3">Aber PMs machen häufig Fehler:</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-xl">💥</span>
              <div>
                <p className="font-medium text-gray-900">Fehler: Fokus auf Funktionen</p>
                <p className="text-gray-600">Stattdessen: Wir sollten uns darauf konzentrieren, das Problem anzugehen, anstatt uns auf das Produkt oder die Lösung zu stürzen.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">💣</span>
              <div>
                <p className="font-medium text-gray-900">Fehler: Umsatzorientiertes Denken</p>
                <p className="text-gray-600">Stattdessen: Wir sollten uns darauf konzentrieren, was die Kunden brauchen, und nicht darauf, was unsere Organisation braucht.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">🧨</span>
              <div>
                <p className="font-medium text-gray-900">Fehler: Rollen statt Fähigkeiten zuweisen</p>
                <p className="text-gray-600">Stattdessen: Ein funktionsübergreifendes Team mit verschiedenen Fähigkeiten bringt bessere Lösungen hervor.</p>
              </div>
            </div>
          </div>
        </div>
        </>
        )}
      </section>

      {/* Quiz: Introduction */}
      <Quiz
        title="Quiz: Einführung in Design Thinking"
        questions={[
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
          }
        ]}
      />

      {/* Principles */}
      <section className="pt-2">
        <h2 id="prinzipien" className="scroll-mt-24 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Design Thinking Prinzipien</h2>
        {!quizMode && (
        <>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="text-3xl mb-3">🧑</div>
            <h4 className="font-semibold text-gray-900 mb-2">Menschenzentriert</h4>
            <p className="text-gray-600 text-sm">Beim Design Thinking geht es um die Bedürfnisse, Wünsche und Erfahrungen der Nutzer.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="text-3xl mb-3">🌐</div>
            <h4 className="font-semibold text-gray-900 mb-2">Kooperativ</h4>
            <p className="text-gray-600 text-sm">Design Thinking erfordert die Zusammenarbeit mit einem vielfältigen Team mit unterschiedlichen Fähigkeiten und Hintergründen.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="text-3xl mb-3">🏃</div>
            <h4 className="font-semibold text-gray-900 mb-2">Aktion vor Analyse</h4>
            <p className="text-gray-600 text-sm">Design Thinking stellt Handeln und Experimentieren über Analyse und Planung und ermöglicht es den Teams, Ideen schnell zu testen und zu überarbeiten.</p>
          </div>
        </div>
        </>
        )}
      </section>

      {/* Quiz: Design Thinking Prinzipien */}
      <Quiz
        title="Quiz: Design Thinking Prinzipien"
        questions={[
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
          }
        ]}
      />

      {/* Double Diamond */}
      <section className="pt-2">
        <h2 id="double-diamond" className="scroll-mt-24 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Double Diamond der Produktentwicklung</h2>
        {!quizMode && (
        <>
        <div className="bg-gradient-to-r from-secondary-start/10 to-secondary-end/10 rounded-xl p-6">
          <div className="aspect-video w-full overflow-hidden rounded-lg shadow">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/iwF-VeBDNJE?si=9Qyke-QzY-hU8C4j"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="mt-6">
            <Image
              src="/assets/double-diamont.png"
              alt="Double Diamond Modell"
              className="w-full h-auto rounded-lg shadow"
              width={1600}
              height={900}
              priority
            />
          </div>
        </div>
        </>
        )}
      </section>

      {/* Quiz: Double Diamond */}
      <Quiz
        title="Quiz: Double Diamond"
        questions={[
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
          }
        ]}
      />

      {/* Der Design Thinking-Prozess */}
      <section className="pt-2">
        <h2 id="prozess" className="scroll-mt-24 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Der Design Thinking-Prozess</h2>
        {!quizMode && (
        <>
        <div className="bg-gradient-to-r from-secondary-start/10 to-secondary-end/10 rounded-xl p-6">
          <p className="text-gray-700 mb-4">Der Design Thinking Prozess ist Kern der Design Thinking Methode. Dabei sind der Start und vor allem das Ende des Design Thinking Prozesses charakteristisch.</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-primary-start mt-1">•</span>
              <span>Du startest mit einem "Beginners Mind" und der Haltung, dass Du nichts weißt.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-start mt-1">•</span>
              <span>Du bist erst fertig, wenn eine Idee materialisiert und konkret implementiert ist.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-start mt-1">•</span>
              <span>Der Verlauf dazwischen ist ein iterativer Prozess, in dessen Zentrum der Nutzer und seine Bedürfnisse stehen.</span>
            </li>
          </ul>
        </div>
        </>
        )}
      </section>

      {/* Quiz: Principles & Double Diamond */}
      <Quiz
        title="Quiz: Prinzipien & Double Diamond"
        questions={[
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

      {/* Process Steps */}
      <section className="pt-2">
        <h2 id="schritte" className="scroll-mt-24 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Die 5 Schritte des Design Thinking</h2>
        
        {!quizMode && (
        <>
        {/* Step 1: Empathize */}
        <div className="mb-6 bg-white border-l-4 border-primary-start rounded-r-xl p-6">
          <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent mb-3">Schritt 1: Empathize</h3>
          <p className="text-gray-700 mb-4">Methoden zur Gewinnung von Empathie:</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">User Interviews</h4>
              <p className="text-gray-600 mb-2">Unterhalte dich direkt mit den Usern und stelle offene Fragen, um ihre Bedürfnisse, Motivationen und Probleme zu erkunden.</p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm font-medium text-gray-900 mb-2">💡 Tipps für effektive User Interviews:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Erstelle einen strukturierten Interviewleitfaden</li>
                  <li>• Höre aktiv zu und stelle Folgefragen</li>
                  <li>• Frage nach tatsächlichem Verhalten, nicht nach hypothetischem</li>
                  <li>• Frage nicht danach, was der Nutzer sich wünscht, sondern erkunde dessen Bedürfnisse</li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Beobachtungen / Feldstudien</h4>
              <p className="text-gray-600">Die Beobachtung der User in ihrer natürlichen Umgebung liefert wertvolle Erkenntnisse über ihr Verhalten, ihre Frustrationen und ihre unerfüllten Bedürfnisse.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">User Journey Mapping</h4>
              <p className="text-gray-600">Visualisiere das Erlebnis des Users, Schritt für Schritt, über verschiedene Touchpoints und Interaktionen hinweg.</p>
            </div>
          </div>
        </div>

        {/* Step 2: Define */}
        <div className="mb-6 bg-white border-l-4 border-secondary-start rounded-r-xl p-6">
          <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent mb-3">Schritt 2: Define</h3>
          <p className="text-gray-700 mb-4">Kritischer Schritt, der die Richtung für die Ideenfindung und Lösungsentwicklung vorgibt.</p>
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Techniken:</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• <strong>Affinity Maps</strong> → verwandte Informationen gruppieren, Muster identifizieren</li>
                <li>• <strong>Empathy Maps</strong> → kollaborative Visualisierung unseres Wissens über einen Benutzertyp</li>
                <li>• <strong>HMW Statements</strong> → Probleme umformulieren, um positives und kreatives Denken zu fördern</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-primary-start/10 to-primary-end/10 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">How Might We Statements</h4>
              <p className="text-gray-700 mb-2">HMWs helfen uns, Probleme in Möglichkeiten umzuformulieren.</p>
              <p className="text-sm text-gray-600 italic">Zum Beispiel: "Wie könnten wir Informationen für unseren Nutzer leichter verdaulich machen?"</p>
            </div>
          </div>
        </div>

        {/* Step 3: Ideate */}
        <div className="mb-6 bg-white border-l-4 border-correct-start rounded-r-xl p-6">
          <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent mb-3">Schritt 3: Ideate</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">🎯 Ziele der Ideation</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Generieren möglichst vieler kreativer Ideen zur Lösung des definierten Problems</li>
                <li>• Priorisieren von Ideen, um Prototypen zu erstellen und zu testen</li>
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm font-medium text-yellow-900">❗ Wichtigste Regel: Ideen nicht gleichzeitig generieren und beurteilen, das schränkt die Kreativität ein!</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Methoden:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setShowBrainstorm(true)}
                  className="group relative bg-gray-50 rounded-lg p-3 pr-36 text-left transition-all cursor-pointer hover:bg-gradient-secondary hover:text-white"
                  aria-label="Brainstorming Video öffnen"
                >
                  <p className="font-medium text-gray-900 group-hover:text-white">Brainstorming / Brainwriting
                    <span className="ml-2 hidden group-hover:inline text-xs opacity-90">(Video ansehen)</span>
                  </p>
                  <span className="hidden group-hover:flex items-center">
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setShowBrainstormSummary(true); }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-gradient-primary text-white text-xs font-medium px-3 py-1 rounded-md shadow hover:opacity-90"
                    >
                      Lesen
                    </button>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowCrazySummary(true)}
                  className="group relative bg-gray-50 rounded-lg p-3 text-left transition-all cursor-pointer hover:bg-gradient-primary hover:text-white"
                  aria-label="Crazy 8s Zusammenfassung öffnen"
                >
                  <p className="font-medium text-gray-900 group-hover:text-white">Crazy 8s
                    <span className="ml-2 hidden group-hover:inline text-xs opacity-90">(Lesen)</span>
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => setShowMindmapSummary(true)}
                  className="group relative bg-gray-50 rounded-lg p-3 text-left transition-all cursor-pointer hover:bg-gradient-primary hover:text-white"
                  aria-label="Mindmapping Zusammenfassung öffnen"
                >
                  <p className="font-medium text-gray-900 group-hover:text-white">Mindmapping
                    <span className="ml-2 hidden group-hover:inline text-xs opacity-90">(Lesen)</span>
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => setShowScamper(true)}
                  className="group relative bg-gray-50 rounded-lg p-3 pr-36 text-left transition-all cursor-pointer hover:bg-gradient-secondary hover:text-white"
                  aria-label="SCAMPER Video öffnen"
                >
                  <p className="font-medium text-gray-900 group-hover:text-white">SCAMPER
                    <span className="ml-2 hidden group-hover:inline text-xs opacity-90">(Video ansehen)</span>
                  </p>
                  <span className="hidden group-hover:flex items-center">
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setShowScamperSummary(true); }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-gradient-primary text-white text-xs font-medium px-3 py-1 rounded-md shadow hover:opacity-90"
                    >
                      Lesen
                    </button>
                  </span>
                </button>
              </div>
            </div>
            {/* Kriterien zur Auswahl einer Idee */}
            <div className="mt-4">
              <h4 className="font-semibold text-gray-900 mb-2">Kriterien zur Auswahl einer Idee</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h5 className="font-semibold text-gray-900 mb-1">Wert (Value)</h5>
                  <p className="text-sm text-gray-700">Sehen unsere Zielkunden in unserem Produkt einen Mehrwert?</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h5 className="font-semibold text-gray-900 mb-1">Benutzerfreundlichkeit (Usability)</h5>
                  <p className="text-sm text-gray-700">Ist unser Produkt einfach zu bedienen / nutzbar?</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h5 className="font-semibold text-gray-900 mb-1">Umsetzbarkeit (Feasibility)</h5>
                  <p className="text-sm text-gray-700">Sind wir in der Lage, das Produkt ökonomisch sinnvoll herzustellen (Zeit, Fähigkeiten, Technologie, Kapital, etc.)?</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h5 className="font-semibold text-gray-900 mb-1">Geschäftsfähigkeit (Viability)</h5>
                  <p className="text-sm text-gray-700">Ist es für uns als Firma sinnvoll, dieses Produkt herzustellen (Strategie, Rendite, etc.)?</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4: Prototype */}
        <div className="mb-6 bg-white border-l-4 border-secondary-end rounded-r-xl p-6">
          <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent mb-3">Schritt 4: Prototype</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">🎯 Ziele der Prototyping-Phase</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Unsere Ideen in einer greifbaren Form testen und validieren</li>
                <li>• Frühzeitiges Sammeln von Nutzerfeedback und Erkenntnissen</li>
                <li>• Risiken reduzieren, bevor weitere Ressourcen investiert werden</li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Low-Fidelity Prototyp</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Einfache, detailarme Darstellung</li>
                  <li>• Kostengünstig und schnell zu erstellen</li>
                  <li>• Schnelle Iteration und Feedback</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-start/10 to-primary-end/10 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">High-Fidelity Prototyp</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Detaillierte und realitätsnahe Prototypen</li>
                  <li>• Dem Endprodukt optisch sehr ähnlich</li>
                  <li>• Ermöglichen handhabbares Feedback</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <Image
                src="/assets/low-high-prototype.png"
                alt="Vergleich Low-Fidelity vs High-Fidelity Prototypen"
                className="w-full h-auto rounded-lg shadow"
                width={1600}
                height={900}
                priority={false}
              />
            </div>
            <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-4">
  <h5 className="font-semibold text-gray-900 mb-2">Best Practices für Prototypen-Erstellung (kurz)</h5>
  <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
    <li>Versetze dich in die Lage eines Benutzers, der deine Lösung nicht kennt.</li>
    <li>Sei konsistent mit Designelementen (Farben, Typografie, Layout).</li>
    <li>Kommuniziere beabsichtigte Funktionalität (Was) und UX (Wie) klar über den Prototypen.</li>
    <li>Nutze visuelle Hinweise, Anmerkungen und interaktive Elemente, um Nutzer zu führen.</li>
    <li>Erstelle mehrere Versionen, teste und verfeinere sie.</li>
    <li>Sei offen für Änderungen basierend auf neuen Erkenntnissen.</li>
  </ul>
</div>
          </div>
        </div>

        {/* Step 5: Test */}
        <div className="mb-6 bg-white border-l-4 border-wrong-start rounded-r-xl p-6">
          <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent mb-3">Schritt 5: Test</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">🎯 Ziel der Testphase</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Mit geringen Kosten zentrale Annahmen zur Lösung validieren</li>
                <li>• Benutzerfreundlichkeit, Funktionalität und Leistung des Produkts prüfen</li>
                <li>• Sicherstellen, dass unser Produkt die Bedürfnisse und Erwartungen unserer Nutzer erfüllt</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Test-Methoden:</h4>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-medium text-gray-900">Usability-Tests</p>
                  <p className="text-sm text-gray-600">Evaluierung der Benutzerfreundlichkeit durch echte Benutzerinteraktionen</p>
                  <div className="mt-3 aspect-video w-full overflow-hidden rounded-lg shadow">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/BrVnBdW6_rE?si=ofCQMwq2_5MWEMjb"
                      title="YouTube video player"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-medium text-gray-900">Umfragen</p>
                  <p className="text-sm text-gray-600">Quantitative und qualitative Daten aus einer größeren Stichprobe erheben</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-medium text-gray-900">A/B-Tests</p>
                  <p className="text-sm text-gray-600">Zwei Varianten eines Produkts vergleichen, um zu bestimmen, welche Version besser funktioniert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
        )}
      </section>

      {/* Quiz: Die 5 Schritte des Design Thinking */}
      <Quiz
        title="Quiz: Die 5 Schritte des Design Thinking"
          questions={[
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
      {/* Brainstorming Video Modal */}
      {showBrainstorm && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-gray-900/70"
            onClick={() => setShowBrainstorm(false)}
          />
          {/* Modal content */}
          <div
            className="relative bg-white rounded-xl shadow-2xl w-[92%] max-w-4xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Brainstorming Video"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute right-3 top-3 z-10 flex items-center gap-2">
              <button
                onClick={() => { setShowBrainstorm(false); setShowBrainstormSummary(true); }}
                className="bg-gradient-secondary text-white px-3 py-1 rounded-md text-sm hover:opacity-90"
              >
                Zusammenfassung
              </button>
              <button
                onClick={() => setShowBrainstorm(false)}
                className="bg-gray-800/80 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-800"
                aria-label="Schließen"
              >
                Schließen
              </button>
            </div>
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/H6R6nR_N0Yo?si=Ue6j5wnkf9bDvD1k&autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Crazy 8s Summary Modal */}
      {showCrazySummary && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-gray-900/70"
            onClick={() => setShowCrazySummary(false)}
          />
          {/* Modal content */}
          <div
            className="relative bg-white rounded-xl shadow-2xl w-[92%] max-w-3xl h-[85vh] overflow-hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Crazy 8s Zusammenfassung"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Crazy 8s – Zusammenfassung</h3>
              <button
                onClick={() => setShowCrazySummary(false)}
                className="bg-gray-800/80 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-800"
                aria-label="Schließen"
              >
                Schließen
              </button>
            </div>
            <div className="p-5 overflow-y-auto space-y-3 text-gray-800 flex-1">
              <p className="font-semibold">Definition von Crazy 8s</p>
              <p>Crazy 8s ist eine schnelle Ideation-Technik, bei der acht unterschiedliche Ideen in acht Minuten entwickelt werden. Sie fördert Kreativität und verhindert, dass das Denken blockiert wird.</p>
              <p className="font-semibold">📌 Erklärung</p>
              <p>Crazy 8s wird vor allem in der Ideate-Phase von Design Thinking eingesetzt, um viele mögliche Lösungen schnell und visuell zu erkunden:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Begrenzte Zeit:</strong> Jede:r Teilnehmer:in hat 8 Minuten, um 8 verschiedene Ideen auf Papier oder Canvas zu skizzieren.</li>
                <li><strong>Schnelle, einfache Ideen:</strong> Es geht nicht um Perfektion, sondern um Quantität und Vielfalt der Lösungen.</li>
                <li><strong>Förderung der Kreativität:</strong> Durch die kurze Zeit werden mentale Blockaden überwunden und unerwartete Ideen entstehen.</li>
                <li><strong>Visuell und kollaborativ:</strong> Die Skizzen können im Team geteilt werden, um Ideen zu vergleichen, zu kombinieren und zu priorisieren.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Mindmapping Summary Modal */}
      {showMindmapSummary && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-gray-900/70"
            onClick={() => setShowMindmapSummary(false)}
          />
          {/* Modal content */}
          <div
            className="relative bg-white rounded-xl shadow-2xl w-[92%] max-w-3xl h-[85vh] overflow-hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mindmapping Zusammenfassung"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Mindmapping – Zusammenfassung</h3>
              <button
                onClick={() => setShowMindmapSummary(false)}
                className="bg-gray-800/80 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-800"
                aria-label="Schließen"
              >
                Schließen
              </button>
            </div>
            <div className="p-5 overflow-y-auto space-y-3 text-gray-800 flex-1">
              <p>Im Bereich Product Management und Design Thinking wird Mind Mapping insbesondere in der Phase Ideate eingesetzt, deren Ziel es ist, Ideen kreativ und kollaborativ zu erzeugen, zu erforschen und zu verknüpfen:</p>
              <p><strong>Zentrales Problem:</strong> Ausgangspunkt ist eine zentrale Herausforderung oder Fragestellung (Beispiel: „Wie können wir die Nutzerbindung in der App verbessern?“).</p>
              <p><strong>Hauptrichtungen:</strong> Es werden Schlüsselkategorien gebildet, die mit der Herausforderung verbunden sind (UX, Marketing, Motivation, Technologie usw.).</p>
              <p><strong>Unterzweige mit konkreten Ideen:</strong> Jede Kategorie wird in mögliche Lösungen unterteilt, sodass auf einen Blick eine große Zahl von Alternativen sichtbar wird.</p>
              <div>
                <h4 className="font-semibold text-gray-900">Wert des Mind Mapping:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Erleichtert divergentes Denken.</li>
                  <li>Fördert die Zusammenarbeit zwischen Teams.</li>
                  <li>Bietet einen ganzheitlichen Überblick über Ideen.</li>
                  <li>Hilft bei der Priorisierung von Lösungen, die anschließend zu Prototypen oder Produktfunktionen weiterentwickelt werden können.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Brainstorming Summary Modal */}
      {showBrainstormSummary && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-gray-900/70"
            onClick={() => setShowBrainstormSummary(false)}
          />
          {/* Modal content */}
          <div
            className="relative bg-white rounded-xl shadow-2xl w-[92%] max-w-3xl h-[85vh] overflow-hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Brainstorming Zusammenfassung"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Brainstorming – Zusammenfassung</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => { setShowBrainstormSummary(false); setShowBrainstorm(true); }}
                  className="bg-gradient-secondary text-white px-3 py-1 rounded-md text-sm hover:opacity-90"
                >
                  Video ansehen
                </button>
                <button
                  onClick={() => setShowBrainstormSummary(false)}
                  className="bg-gray-800/80 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-800"
                  aria-label="Schließen"
                >
                  Schließen
                </button>
              </div>
            </div>
            <div className="p-5 overflow-y-auto space-y-3 text-gray-800 flex-1">
              <p className="font-semibold">Brainstorming: Die Turbo-Ideenschmiede</p>
              <p>Brainstorming ist eine tolle Methode, um in der Gruppe neue Ideen und kreative Lösungen für ein Problem zu finden. Aber damit es klappt, muss man ein paar Regeln beachten:</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li><strong>Gute Vorbereitung:</strong> Das Thema muss klar definiert sein – nicht zu eng, damit man nicht eingeschränkt wird, aber auch nicht zu weit, damit am Ende hilfreiche Ergebnisse herauskommen.</li>
                <li><strong>Das richtige Team:</strong> Optimal sind fünf bis sieben Personen. Mischen Sie das Team gut durch: Nehmen Sie Leute, die das Thema kennen, aber auch „Außenseiter“ mit frischen, unerwarteten Ideen.</li>
                <li><strong>Die goldene Regel:</strong> Die wichtigste Ansage zu Beginn ist: Ziel ist die maximale Ideenanzahl! Denken Sie frei, denken Sie verrückt und urteilen Sie nicht.</li>
                <li><strong>Keine Kritik:</strong> Während der Ideenfindung ist es strengstens untersagt, die Ideen anderer abzuwerten, zu kritisieren oder sich lustig zu machen.</li>
                <li><strong>Erst still, dann laut:</strong> Geben Sie jedem zuerst Zeit, die Ideen für sich allein aufzuschreiben. Erst danach werden die Ansätze laut geteilt, um Wiederholungen zu vermeiden.</li>
              </ol>
              <p><strong>Das Fazit:</strong> Wenn alles richtig läuft, haben Sie am Ende einen Berg an Ideen, der dann erst im Nachhinein kategorisiert und bewertet wird.</p>
            </div>
          </div>
        </div>
      )}

      {/* SCAMPER Summary Modal */}
      {showScamperSummary && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-gray-900/70"
            onClick={() => setShowScamperSummary(false)}
          />
          {/* Modal content */}
          <div
            className="relative bg-white rounded-xl shadow-2xl w-[92%] max-w-3xl h-[85vh] overflow-hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="SCAMPER Zusammenfassung"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b">
              <h3 className="text-lg font-semibold text-gray-900">SCAMPER – Zusammenfassung</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => { setShowScamperSummary(false); setShowScamper(true); }}
                  className="bg-gradient-secondary text-white px-3 py-1 rounded-md text-sm hover:opacity-90"
                >
                  Video ansehen
                </button>
                <button
                  onClick={() => setShowScamperSummary(false)}
                  className="bg-gray-800/80 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-800"
                  aria-label="Schließen"
                >
                  Schließen
                </button>
              </div>
            </div>
            <div className="p-5 overflow-y-auto space-y-4 text-gray-800 flex-1">
              <p>
                Das SCAMPER-Modell ist eine Kreativitätstechnik und eine wahre Ideen-Kanone, die dazu dient, festgefahrene Denkmuster aufzubrechen und Althergebrachtes infrage zu stellen. Es hilft Ihnen, Ihr "Denkgefängnis" zu verlassen und "out-of-the-box" zu denken, um innovative Produktideen, Prozesse oder Strategien zu entwickeln.
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Warum SCAMPER wichtig ist</h4>
                <p>
                  Wer heute nur das Vorhandene effizienter gestaltet (z.B. bessere Akkus oder schnelleren Kundenservice), sorgt zwar für den Cash Flow der Gegenwart, "verpennt" aber die Zukunft. Die Welt steht nicht still, und um nicht "weg vom Fenster" zu sein, muss man radikal anders denken. Große Veränderungen kamen historisch nicht durch "schneller, höher, weiter", sondern durch die Umkehrung des gesamten Konzepts – wie der Wechsel vom Großrechner zum PC oder vom Nokia-Telefon zum Smartphone.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Die 7 Schritte zur Ideenfindung (SCAMPER)</h4>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>
                    <strong>S – Substitute (Ersetzen):</strong> Was könnte man durch andere Konzepte, Materialien oder Ansätze ersetzen (z.B. Benzinmotor durch Elektromotor)?
                  </li>
                  <li>
                    <strong>C – Combine (Kombinieren):</strong> Was passiert, wenn man das Produkt mit anderen Dingen oder Funktionen koppelt (z.B. eine Waage mit einer Smartphone-App)?
                  </li>
                  <li>
                    <strong>A – Adapt (Anpassen):</strong> Welche Funktionen kann man verändern oder anpassen, um das Produkt für erweiterte Einsatzzwecke nutzbar zu machen (z.B. eine Pulsuhr wasserdicht für Schwimmer machen)?
                  </li>
                  <li>
                    <strong>M – Modify / Magnify (Modifizieren / Vergrößern):</strong> Wie kann man Aussehen, Haptik oder Funktionen ändern, um einen Mehrwert zu schaffen oder neue Nutzergruppen zu erreichen?
                  </li>
                  <li>
                    <strong>P – Purpose / Put to other use (Zweck ändern):</strong> Kann man das Produkt für gänzlich andere Zwecke einsetzen (z.B. eine Teleskop-Antenne als Zeigestock)?
                  </li>
                  <li>
                    <strong>E – Eliminate (Weglassen):</strong> Was ist überflüssig oder obsolet? Wie kann das Produkt klarer, leichter oder einfacher gestaltet werden (z.B. das DVD-Laufwerk beim Laptop weglassen)?
                  </li>
                  <li>
                    <strong>R – Reverse / Rearrange (Umkehren / Umsortieren):</strong> Was passiert, wenn man Prozesse in einer anderen Reihenfolge anordnet oder ganz umdreht (z.B. der Kunde bezahlt vor dem Essen)?
                  </li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Wichtiger Hinweis</h4>
                <p>
                  SCAMPER generiert lediglich Ideen – viele schlechte und hoffentlich ein paar gute. Das Bewerten und das Entscheiden, was Sie tatsächlich umsetzen wollen, findet erst NACH dem SCAMPER-Prozess statt. Es geht darum, mutig zu sein und neue Möglichkeiten zu entdecken.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SCAMPER Video Modal */}
      {showScamper && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-gray-900/70"
            onClick={() => setShowScamper(false)}
          />
          {/* Modal content */}
          <div
            className="relative bg-white rounded-xl shadow-2xl w-[92%] max-w-4xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="SCAMPER Video"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute right-3 top-3 z-10 flex items-center gap-2">
              <button
                onClick={() => { setShowScamper(false); setShowScamperSummary(true); }}
                className="bg-gradient-secondary text-white px-3 py-1 rounded-md text-sm hover:opacity-90"
              >
                Zusammenfassung
              </button>
              <button
                onClick={() => setShowScamper(false)}
                className="bg-gray-800/80 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-800"
                aria-label="Schließen"
              >
                Schließen
              </button>
            </div>
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/XekS-d5utzE?si=joRrU0QNjwT5pkMD&autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Design Thinking vs Agile */}
      <section>
        <h2 id="vs-agile" className="scroll-mt-24 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Design Thinking vs. agile Methoden</h2>
        <div className="bg-gradient-to-r from-secondary-start/10 to-secondary-end/10 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Ähnliche Philosophien</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Fokus auf das Sammeln von Kundenfeedback</li>
                <li>• Iterativer Ansatz</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Ähnliche Ziele</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Fehler frühzeitig korrigieren</li>
                <li>• Schneller funktionierende Produkten entwickeln</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-secondary-start/20">
            <p className="text-gray-700">
              <strong>Design Thinking</strong> endet i.d.R. mit einer validierten Lösungsidee. 
              Diese Lösungsidee wird dann mittels <strong>agiler Methoden</strong> wie z.B. Scrum in die Tat umgesetzt.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="bg-gradient-to-r from-correct-start/10 to-correct-end/10 rounded-xl p-6">
        <h3 id="key-takeaways" className="scroll-mt-24 text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent mb-4">🔑 Key Takeaways</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-correct-end mt-1">✓</span>
            <span>Design Thinking ist ein menschenzentrierter, iterativer Ansatz zur Problemlösung</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-correct-end mt-1">✓</span>
            <span>Der Prozess besteht aus 5 Schritten: Empathize, Define, Ideate, Prototype, Test</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-correct-end mt-1">✓</span>
            <span>Fokussiere dich auf Nutzerbedürfnisse, nicht auf Funktionen oder Umsatz</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-correct-end mt-1">✓</span>
            <span>Aktion vor Analyse - schnelles Testen und Iterieren ist wichtiger als perfekte Planung</span>
          </li>
        </ul>
      </section>

      {/* Final Exam Button */}
      <section className="bg-gradient-to-r from-secondary-start/10 to-secondary-end/10 rounded-xl p-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Abschlusstest: Design Thinking
          </h2>
          <p className="text-gray-700 mb-6">
            Teste dein Wissen über Design Thinking mit diesem umfassenden Abschlusstest. 
            Der Test enthält 11 Fragen aus allen Themenbereichen.
          </p>
          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">📋 Testformat:</h3>
            <ul className="text-left text-gray-600 space-y-2">
              <li>• 11 Multiple-Choice-Fragen</li>
              <li>• Eine Frage pro Seite</li>
              <li>• Navigation mit Zurück-Button (ein Schritt)</li>
              <li>• Detaillierte Ergebnisübersicht am Ende</li>
              <li>• Mindestens 66% für das Bestehen erforderlich</li>
            </ul>
          </div>
          <Link
            href="/exam/design-thinking"
            className="inline-block bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Test starten
          </Link>
        </div>
      </section>
    </div>
  );
};
