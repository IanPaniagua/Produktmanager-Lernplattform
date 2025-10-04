"use client";

import React, { useMemo, useState } from "react";
import VideoModal from "@/components/VideoModal";
import Quiz from "@/components/Quiz";
import introQuizRaw from "@/quiz/effektivität-effizience/Einführung-Effektivität-und-Effizienz-als-PM.json" assert { type: "json" };

type IntroQuizJson = {
  questions: Array<{
    question: string;
    options: Array<{ text: string; rationale?: string }>;
    correct_answer: string;
  }>;
};

export const EffektivitaetContent = () => {
  const [showVerbalVideo, setShowVerbalVideo] = useState(false);
  const [showSlidesVideo, setShowSlidesVideo] = useState(false);
  const [showGoogleSlidesVideo, setShowGoogleSlidesVideo] = useState(false);
  const [showScrVideo, setShowScrVideo] = useState(false);

  // Map JSON structure to Quiz component props
  const introQuizQuestions = useMemo(() => {
    const data = introQuizRaw as unknown as IntroQuizJson;
    return data.questions.map((q) => {
      const optionTexts = q.options.map((o) => o.text);
      const correctIndex = optionTexts.findIndex(
        (t) => t.trim() === q.correct_answer.trim()
      );
      return {
        question: q.question,
        options: optionTexts,
        correctAnswer: Math.max(0, correctIndex),
        // Show the rationale of the correct option as explanation
        explanation:
          correctIndex >= 0 && q.options[correctIndex]?.rationale
            ? q.options[correctIndex].rationale
            : undefined,
      };
    });
  }, []);

  return (
    <>
    <div className="relative space-y-12">
      {/* Einführung */}
      <section>
        <h2 id="einfuhrung" className="scroll-mt-24 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Einführung Effektivität und Effizienz als PM</h2>
        <div className="bg-gradient-to-r from-secondary-start/10 to-secondary-end/10 rounded-xl p-6 mb-6">
          <p className="text-gray-700">
            In diesem Submodul vertiefen wir die persönlichen Fähigkeiten, die Produktmanager im Alltag benötigen, um effektiv und effizient zu arbeiten. Dabei geht es um Produktivität, Fokus, Kommunikation, Zusammenarbeit, Moderation, Ownership, Resilienz und Feedback.
          </p>
        </div>


        {/* Rollen im Produktteam */}
        <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent mb-3">Rollen in einem Produktteam</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Researcher */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-900">Researcher</h4>
              <span className="text-2xl" aria-hidden>🔎</span>
            </div>
            <p className="text-sm text-gray-700">Führt Research-Aktivitäten.</p>
            <div className="mt-3">
              <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                Fokus: Problem Discovery
              </span>
            </div>
          </div>

          {/* Produktmanager */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-900">Produktmanager</h4>
              <span className="text-2xl" aria-hidden>🧭</span>
            </div>
            <p className="text-sm text-gray-700">Vision, Strategie, Priorisierung.</p>
            <div className="mt-3">
              <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                Fokus: Problem Discovery & Business Value
              </span>
            </div>
          </div>

          {/* Designer */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-900">Designer</h4>
              <span className="text-2xl" aria-hidden>🎨</span>
            </div>
            <p className="text-sm text-gray-700">Lösungsgestaltung und UX.</p>
            <div className="mt-3">
              <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                Fokus: Solution Discovery
              </span>
            </div>
          </div>

          {/* Entwickler */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-900">Entwickler</h4>
              <span className="text-2xl" aria-hidden>💻</span>
            </div>
            <p className="text-sm text-gray-700">Technische Umsetzung und Tests.</p>
            <div className="mt-3">
              <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                Fokus: Implementation
              </span>
            </div>
          </div>

          {/* QA Tester */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-900">QA Tester</h4>
              <span className="text-2xl" aria-hidden>🧪</span>
            </div>
            <p className="text-sm text-gray-700">Qualitätssicherung.</p>
            <div className="mt-3">
              <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                Fokus: Implementation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Effektivität vs. Effizienz */}
      <section>
        <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent mb-3">Effektivität vs. Effizienz</h3>
        <div className="bg-gradient-to-r from-primary-start/5 to-secondary-end/5 rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-5 border border-primary-start/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🎯</span>
                <h4 className="font-semibold text-gray-900">Effektivität</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">Die richtigen Dinge zu tun</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Zielerreichung im Fokus</li>
                <li>• Richtige Prioritäten setzen</li>
                <li>• Wert für Kunden schaffen</li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-5 border border-secondary-start/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">⚡</span>
                <h4 className="font-semibold text-gray-900">Effizienz</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">Die Dinge richtig zu tun</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Ressourcen optimal einsetzen</li>
                <li>• Prozesse optimieren</li>
                <li>• Zeit und Budget schonen</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-primary-start/10 to-secondary-end/10 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🔄</span>
              <h5 className="font-medium text-gray-900">Für Produktmanager</h5>
            </div>
            <p className="text-sm text-gray-700">
              Beide Aspekte sind entscheidend: <strong>Erst das Richtige priorisieren (Effektivität)</strong>, dann <strong>sauber umsetzen (Effizienz)</strong>.
              Ein effektiver PM wählt die wichtigsten Features, ein effizienter setzt sie ressourcensparend um.
            </p>
          </div>
        </div>
      </section>

      {/* Zeitmanagement */}
      <section>
        <h2 id="zeitmanagement" className="scroll-mt-24 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Zeitmanagement</h2>
        <div className="space-y-6">
          {/* Zeitmanagement */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">⏰</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Kalender besser managen</h3>
            </div>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Weniger Meetings vereinbaren und klar fokussieren.</li>
              <li>Weniger Umfang pro Tag (realistische Planung, Puffer einbauen).</li>
              <li>Fokuszeit blocken, spontane Ablenkungen reduzieren.</li>
              <li>Den Tag als fixed time betrachten – Scope ist variabel.</li>
            </ul>
          </div>

          {/* Pomodoro */}
          <div className="bg-gradient-to-r from-primary-start/10 to-primary-end/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🍅</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Pomodoro</h3>
            </div>
            <p className="text-gray-700 mb-3">25 Minuten Fokus, 5 Minuten Pause. Ziele: Motivation hochhalten, große Pakete zerlegen, regelmäßige Belohnung.</p>
          </div>

        </div>
      </section>

      {/* Priorisierung */}
      <section>
        <h2 id="priorisierung" className="scroll-mt-24 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Priorisierung deiner Aufgaben</h2>
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🎯</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Priorisierungsmethoden</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-2">One Thing</h5>
                <p className="text-sm text-gray-700">„Wenn heute nur eine Sache vorankommt—welche?“</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-2">Eisenhower-Matrix</h5>
                <p className="text-sm text-gray-700">wichtig/unwichtig × dringend/nicht dringend. Morgens kurz re-evaluieren.</p>
              </div>
            </div>
            <div className="mt-4 bg-gradient-to-r from-secondary-start/10 to-secondary-end/10 rounded-lg p-4">
              <p className="text-sm text-gray-700"><strong>Regelmäßige Reflexion:</strong> An Priorität gehalten? Was änderst du nächstes Mal?</p>
            </div>
          </div>

          {/* Kommunikationskanal & Tools */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">💬</span>
              <h4 className="font-semibold text-gray-900">Kommunikationskanal & Tools</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-gray-900 mb-2">Asynchrone Kommunikation</h5>
                <p className="text-sm text-gray-700 mb-2">Meetings sind teuer; präzise schriftlich/Audio/Video bevorzugen.</p>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 mb-2">Dokumentation</h5>
                <p className="text-sm text-gray-700 mb-2">Entscheidungen, Research, Produktdokus, Retro-Ergebnisse, Onboarding.</p>
              </div>
            </div>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h6 className="font-medium text-gray-900 mb-1">Visualisierungen</h6>
                <p className="text-sm text-gray-600">Whiteboards, Flowcharts, Journeys, Präsentationsmodus.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h6 className="font-medium text-gray-900 mb-1">Tools</h6>
                <p className="text-sm text-gray-600">Passwort-Manager & smarter Browser für Ordnung und Shortcuts.</p>
              </div>
            </div>
            {/* Quiz: Einführung Effektivität und Effizienz als PM */}
            <div id="test" className="pt-6">
              <Quiz
                title="Quiz: Einführung Effektivität und Effizienz als PM"
                questions={introQuizQuestions}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kommunikation */}
      <section>
        <h2 id="kommunikation" className="scroll-mt-24 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Kommunikation</h2>
        <div className="space-y-6">
          {/* Erfolgsfaktoren */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">✨</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Erfolgsfaktoren</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-3 border border-gray-200">
                <span className="text-secondary-end mt-0.5">✓</span>
                <div>
                  <p className="font-medium text-gray-900">Klarheit und Offenheit</p>
                  <p className="text-xs text-gray-600">Direkte, verständliche Botschaften</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-3 border border-gray-200">
                <span className="text-secondary-end mt-0.5">✓</span>
                <div>
                  <p className="font-medium text-gray-900">Aktives Zuhören</p>
                  <p className="text-xs text-gray-600">Nachfragen, paraphrasieren, verstehen</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-3 border border-gray-200">
                <span className="text-secondary-end mt-0.5">✓</span>
                <div>
                  <p className="font-medium text-gray-900">Respekt</p>
                  <p className="text-xs text-gray-600">Wertschätzung in Ton & Haltung</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-3 border border-gray-200">
                <span className="text-secondary-end mt-0.5">✓</span>
                <div>
                  <p className="font-medium text-gray-900">Konstruktives Feedback</p>
                  <p className="text-xs text-gray-600">Klar, konkret, hilfreich</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-3 border border-gray-200">
                <span className="text-secondary-end mt-0.5">✓</span>
                <div>
                  <p className="font-medium text-gray-900">Kollaboration und Teambeteiligung</p>
                  <p className="text-xs text-gray-600">Einbindung aller relevanten Stimmen</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-3 border border-gray-200">
                <span className="text-secondary-end mt-0.5">✓</span>
                <div>
                  <p className="font-medium text-gray-900">Klare Rollen und Verantwortlichkeiten</p>
                  <p className="text-xs text-gray-600">Zuständigkeiten transparent machen</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-3 border border-gray-200">
                <span className="text-secondary-end mt-0.5">✓</span>
                <div>
                  <p className="font-medium text-gray-900">Passende Kommunikationstools</p>
                  <p className="text-xs text-gray-600">Kanal & Format bewusst wählen</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-3 border border-gray-200">
                <span className="text-secondary-end mt-0.5">✓</span>
                <div>
                  <p className="font-medium text-gray-900">Transparenz zu Miss-/Erfolgen</p>
                  <p className="text-xs text-gray-600">Learnings offen teilen</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 rounded-lg p-3 border border-gray-200">
                <span className="text-secondary-end mt-0.5">✓</span>
                <div>
                  <p className="font-medium text-gray-900">Flexibilität und Anpassungsfähigkeit</p>
                  <p className="text-xs text-gray-600">Situationsgerecht reagieren</p>
                </div>
              </div>
            </div>
          </div>

          {/* Effiziente Kommunikation */}
          <div className="bg-gradient-to-r from-secondary-start/10 to-secondary-end/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🚀</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Effiziente Kommunikation</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-gray-900 mb-2">Kanal & Format</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Richtiger Kanal wählen (Text/Bild/Audio/Video)</li>
                  <li>Inhalte strukturieren und gruppieren</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 mb-2">Erwartungen & ToDos</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Klare Erwartungen kommunizieren</li>
                  <li>Feedback-Regeln definieren</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Top-Down Prinzip */}
          <div className="bg-gradient-to-r from-primary-start/10 to-primary-end/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">📋</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Top-Down Prinzip</h3>
            </div>
            <p className="text-gray-700">Immer die Essenz zuerst kommunizieren. Das schafft Ruhe und klare Erwartungen. Gilt für alle Formate: schriftlich, mündlich, Video und Audio.</p>
          </div>

          {/* Vier-Seiten-Modell (4-Ohren-Modell) */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🔊</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Vier-Seiten-Modell (4-Ohren-Modell)</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Nach Schulz von Thun hat jede Nachricht vier Seiten, die beim Senden und Empfangen unterschiedlich betont werden können:
              <strong> Sachinhalt</strong> (Was ist der Inhalt?), <strong>Selbstoffenbarung</strong> (Was gebe ich über mich preis?),
              <strong> Beziehung</strong> (Wie stehe ich zu dir?) und <strong>Appell</strong> (Was sollst du tun?).
              Missverständnisse entstehen, wenn Sender und Empfänger auf unterschiedlichen Ebenen hören/sprechen.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <img
                src="/assets/Kommunikationsquadrat.jpg"
                alt="Kommunikationsquadrat – Vier-Seiten-Modell nach Schulz von Thun"
                className="w-full h-auto rounded-md"
              />
              <p className="text-xs text-gray-600 mt-2">Das Kommunikationsquadrat: Sachinhalt, Selbstoffenbarung, Beziehung, Appell.</p>
            </div>
          </div>
          {/* Verbal, Non-verbal & Paraverbal */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🗣️</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Verbal, Non-verbal & Paraverbal</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Kommunikation wirkt auf drei Ebenen, die zusammen die gesamte Wirkung einer Nachricht bestimmen:
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Verbal */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">📝</span>
                  <h4 className="font-semibold text-blue-900">Verbal</h4>
                </div>
                <p className="text-sm text-blue-800 mb-2">Wortwahl & Inhalt</p>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• Was sage ich?</li>
                  <li>• Wortwahl und Satzbau</li>
                  <li>• Logik und Struktur</li>
                </ul>
              </div>

              {/* Non-verbal */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">👤</span>
                  <h4 className="font-semibold text-green-900">Non-verbal</h4>
                </div>
                <p className="text-sm text-green-800 mb-2">Mimik, Gestik, Haltung</p>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>• Körpersprache</li>
                  <li>• Blickkontakt</li>
                  <li>• Kleidung & Aussehen</li>
                </ul>
              </div>

              {/* Paraverbal */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🎵</span>
                  <h4 className="font-semibold text-purple-900">Paraverbal</h4>
                </div>
                <p className="text-sm text-purple-800 mb-2">Stimme, Tonfall, Tempo</p>
                <ul className="text-xs text-purple-700 space-y-1">
                  <li>• Wie sage ich es?</li>
                  <li>• Lautstärke & Betonung</li>
                  <li>• Sprechgeschwindigkeit</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-4 border border-orange-200">
              <p className="text-sm text-orange-800 text-center">
                <strong>💡 Wichtig:</strong> Emotion und Körpersprache prägen die Wirkung oft stärker als der reine Inhalt!
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 mt-4">
              <button
                onClick={() => setShowVerbalVideo(true)}
                className="inline-flex items-center gap-2 bg-gradient-tertiary text-white text-sm font-medium px-4 py-2 rounded-md shadow hover:opacity-90"
              >
                ▶ Video ansehen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Storytelling */}
      <section>
        <h2 id="storytelling" className="scroll-mt-24 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Storytelling</h2>
        <div className="space-y-6">
          {/* Grundprinzip */}
          <div className="bg-gradient-to-r from-secondary-start/10 to-secondary-end/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🎭</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Grundprinzip</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Das Grundprinzip des Storytellings besteht darin, Informationen, Ideen oder Emotionen in eine erzählerische Struktur zu bringen, die Menschen emotional anspricht und eine Verbindung herstellt. Eine gute Geschichte folgt meist einem Spannungsbogen – mit einem Anfang, einem Konflikt und einer Auflösung – und macht abstrakte Inhalte greifbar und einprägsam.
            </p>
            <p className="text-gray-700">
              Storytelling nutzt emotionale Resonanz, Identifikation mit Figuren und klare Botschaften, um komplexe Themen verständlich und relevant zu machen. Ziel ist es, nicht nur zu informieren, sondern zu bewegen und zum Handeln zu inspirieren.
            </p>
            <div className="mt-4 bg-white/80 rounded-lg p-4 border border-secondary-start/20">
              <p className="text-sm text-gray-800"><strong>Zusammenfassung:</strong> Nutze einen klaren Spannungsbogen (Anfang–Konflikt–Auflösung), wecke Emotionen und formuliere eine prägnante Kernaussage, damit deine Botschaft erinnert wird und Wirkung entfaltet.</p>
            </div>
          </div>

          {/* Storytelling Video */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="aspect-video w-full overflow-hidden rounded-lg shadow">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/7pOQqG2z3T0?si=sn3J3__aSx8WFzSw"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {/* Elemente einer guten Story */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🧩</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Elemente einer guten Story</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Protagonist</h4>
                <p className="text-sm text-gray-700">Häufig ein/e Held/in, der/die im Mittelpunkt steht (nicht das Produkt) und mit dem/der wir uns identifizieren können.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Ziel & Hindernisse</h4>
                <p className="text-sm text-gray-700">Der Protagonist sollte eine klares Ziel verfolgen und dazu Herausforderungen überwinden, die unsere Botschaft transportieren.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Spannungsbogen</h4>
                <p className="text-sm text-gray-700">Der Aufbau sollte einem dramaturgischen Muster (siehe rechts) folgen.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Emotionen</h4>
                <p className="text-sm text-gray-700">Die Geschichte soll Emotionen wecken, damit sich unsere Zuhörer besser mit der Geschichte/dem Held identifizieren können.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Präsentationen */}
      <section>
        <h2 id="prasentationen" className="scroll-mt-24 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Präsentationen in Slides</h2>
        <div className="space-y-6">
          {/* Der Kontext zählt */}
          <div className="bg-gradient-to-r from-secondary-start/10 to-secondary-end/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🎯</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Der Kontext zählt</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Es ist entscheidend für den Aufbau und das Detaillevel, für welchen Zweck deine Präsentation gedacht ist.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-3">
              <li>
                Wenn du einen Vortrag auf einer Konferenz hältst, solltest du nur ganz wenige Slides und Inhalte auf deinen Slides darstellen. So ist die Zuhörerschaft auf dich fokussiert.
              </li>
              <li>
                Wenn du einen Research-Report über die letzten Usability-Tests erstellen möchtest, kannst du ruhigen Gewissens mehr Details unterbringen und musst weniger auf den „Look“ achten.
              </li>
            </ul>
            <p className="text-gray-700"><em>Generell gilt auch hier: „Form follows Function“</em></p>
          </div>
          {/* How to Layout a Presentation */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🎬</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">How to Layout a Presentation</h3>
            </div>
            <p className="text-gray-700 mb-3">Kurzes Video zur Strukturierung und Gestaltung von Präsentationen.</p>
            <button
              onClick={() => setShowSlidesVideo(true)}
              className="inline-flex items-center gap-2 bg-gradient-tertiary text-white text-sm font-medium px-4 py-2 rounded-md shadow hover:opacity-90"
            >
              ▶ Video ansehen
            </button>
          </div>
          {/* Best Practices */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">⭐</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Best Practices</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-2">Templates nutzen</h5>
                <p className="text-sm text-gray-700">Zeitersparnis, Konsistenz, Professionalität durch vorgefertigte Vorlagen.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-2">Visuelle Basics</h5>
                <p className="text-sm text-gray-700">Ausrichten & Verteilen – weniger Störgefühle, professioneller Eindruck.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-2">Action Titles</h5>
                <p className="text-sm text-gray-700">Jede Slide in einem Satz – Story soll allein aus Titeln verständlich sein.</p>
              </div>
              <button
                type="button"
                onClick={() => setShowScrVideo(true)}
                className="group relative bg-gray-50 rounded-lg p-4 text-left border border-gray-200 hover:bg-gradient-secondary hover:text-white transition-all"
                aria-label="SCR Framework Video öffnen"
              >
                <h5 className="font-medium text-gray-900 mb-2 group-hover:text-white">SCR Framework</h5>
                <p className="text-sm text-gray-700 group-hover:text-white/90">Situation–Complication–Resolution als Story-Rahmen
                  <span className="ml-2 hidden group-hover:inline text-xs opacity-90">(Video ansehen)</span>
                </p>
              </button>
            </div>
          </div>

          {/* Inspiration: Kostenlose Tipps zu Google Slides */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">💡</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Inspiration: Kostenlose Tipps zu Google Slides</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Es gibt online bereits viele Ressourcen, mit denen du deine Skills beim Erstellen von Präsentationen verbessern kannst. Setze dich heute Nachmittag damit auseinander.
            </p>
            <button
              onClick={() => setShowGoogleSlidesVideo(true)}
              className="inline-flex items-center gap-2 bg-gradient-tertiary text-white text-sm font-medium px-4 py-2 rounded-md shadow hover:opacity-90"
            >
              ▶ Video ansehen
            </button>
          </div>

          {/* Action Titles, um deine Story zu erzählen */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">📝</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Action Titles, um deine Story zu erzählen</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Aktions‑Titel sind Ein‑Satz‑Zusammenfassungen jeder Folie. Sie beantworten die Frage „So what?“ und machen die Kernbotschaft sofort verständlich.
              Idealzustand: Die gesamte Präsentation lässt sich allein über die Action Titles nachvollziehen.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Zweck</h4>
                <p className="text-sm text-gray-700">Schaffen Anticipation und vermitteln die Essenz der Folie auf einen Blick.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Vergleich</h4>
                <p className="text-sm text-gray-700">Statt „Marktanteile von funny shoes“ besser: „Marktanteile von funny shoes wuchsen um 6% in diesem Jahr“.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Fortlaufende Geschichte</h4>
                <p className="text-sm text-gray-700">Mit Punkten vor/nach dem Titel flüssige Übergänge erzeugen, sodass die Titel eine Story ergeben.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Inhaltliche Zusammenfassung</h4>
                <p className="text-sm text-gray-700">Den vollständigen Inhalt der Folie in einem präzisen Satz bündeln (max. 2–3 Zeilen).</p>
              </div>
            </div>
          </div>

          {/* Bilder & Lizenzen */}
          <div className="bg-gradient-to-r from-primary-start/10 to-primary-end/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🖼️</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Bilder & Lizenzen</h3>
            </div>
            <p className="text-gray-700">Lizenzen beachten; kostenlose Quellen nutzen oder AI-generierte Bilder verwenden.</p>
          </div>
        </div>
      </section>

      {/* Kritisches Denken */}
      <section>
        <h2 id="kritisches-denken" className="scroll-mt-24 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Kritisches Denken</h2>
        <div className="space-y-6">
          {/* Kritisches Denken */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🧠</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Ziele</h3>
            </div>
            <div className="mb-4">
              <h5 className="font-medium text-gray-900 mb-2">Ziele</h5>
              <ul className="text-gray-700 space-y-1">
                <li>Schnell komplexe Sachverhalte erfassen</li>
                <li>Wesentliches von Unwesentlichem trennen</li>
                <li>Probleme früh erkennen und Lösungen finden</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-secondary-start/10 to-secondary-end/10 rounded-lg p-4">
              <p className="text-sm text-gray-700"><strong>Ishikawa:</strong> Ursachen/Wirkung strukturieren; Standardkategorien helfen bei breiter Ursachenfindung.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Abstraktes Denken */}
      <section>
        <h2 id="abstraktes-denken" className="scroll-mt-24 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Abstraktes Denken</h2>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary-start/10 to-primary-end/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🔍</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Grundlagen</h3>
            </div>
            <p className="text-gray-700 mb-3">Wesentliches herausarbeiten und Muster erkennen.</p>
            <div className="bg-white/80 rounded-lg p-4">
              <p className="text-sm font-medium text-gray-900 mb-2">Verwandte Begriffe:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Muster</span>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Framework</span>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Modell</span>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Methode</span>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Annahme</span>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Regel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zusammenarbeit im Team */}
      <section>
        <h2 id="zusammenarbeit" className="scroll-mt-24 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Zusammenarbeit im Team</h2>
        <div className="space-y-6">
          {/* Kollaborative Teams */}
          <div className="bg-gradient-to-r from-secondary-start/10 to-secondary-end/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🤝</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Kollaborative Teams</h3>
            </div>
            <p className="text-gray-700 mb-3">Offene Kommunikation, Vertrauen, klare Verantwortlichkeiten.</p>
            <div className="bg-white/80 rounded-lg p-4">
              <p className="text-sm font-medium text-gray-900 mb-2">Vorteile:</p>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-sm text-gray-700">• Innovation</span>
                <span className="text-sm text-gray-700">• Wissensaustausch</span>
                <span className="text-sm text-gray-700">• Motivation</span>
                <span className="text-sm text-gray-700">• Effizienz</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Meetings moderieren */}
      <section>
        <h2 id="meetings" className="scroll-mt-24 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Meetings moderieren</h2>
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🎯</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Moderation</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-gray-900 mb-2">Vorbereitung</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Rolle klären und Agenda erstellen</li>
                  <li>Agenda und Materialien vorab teilen</li>
                  <li>Methoden bewusst wählen</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 mb-2">Durchführung</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Timeboxing und Puffer für Soziales</li>
                  <li>Flexibel Agenda anpassen</li>
                  <li>Timer konsequent nutzen</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-gradient-to-r from-primary-start/10 to-primary-end/10 rounded-lg p-4">
              <p className="text-sm text-gray-700"><strong>Daumenregel:</strong> 40% Vorbereitung – 20% Meeting – 40% Nachbereitung</p>
            </div>
          </div>

          {/* Debriefs */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">📝</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Debriefs</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-2">Aussagekräftiger Betreff</h5>
                <p className="text-sm text-gray-700">Klare Struktur für sofortige Relevanz-Beurteilung</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-2">ToDos & Erwartungen</h5>
                <p className="text-sm text-gray-700">Wer/Was/Bis wann/über welchen Kanal</p>
              </div>
            </div>
            <div className="mt-4 bg-gradient-to-r from-secondary-start/10 to-secondary-end/10 rounded-lg p-4">
              <p className="text-sm text-gray-700">Zusammenfassung der wichtigsten Erkenntnisse + Bitte um Ergänzung/Korrektur falls nötig</p>
            </div>
          </div>
        </div>
      </section>

      {/* Icebreaker */}
      <section>
        <h2 id="icebreaker" className="scroll-mt-24 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Icebreaker</h2>
        
        <div className="space-y-6">
          {/* Was sind Icebreaker */}
          <div className="bg-gradient-to-r from-secondary-start/10 to-secondary-end/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🧊</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Was sind Icebreaker?</h3>
            </div>
            <p className="text-gray-700">
              Icebreaker sind kurze Aktivitäten oder Spiele zu Beginn von Meetings, die dazu dienen, die Atmosphäre aufzulockern und die Teilnehmer miteinander in Kontakt zu bringen.
            </p>
          </div>

          {/* Wozu verwenden wir Icebreaker */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🎯</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Wozu verwenden wir Icebreaker in Meetings?</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Positive Stimmung</h4>
                <p className="text-sm text-gray-700">Schafft eine angenehme und offene Atmosphäre für produktive Zusammenarbeit.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Kreativität</h4>
                <p className="text-sm text-gray-700">Fördert kreatives Denken und lockert mentale Blockaden.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Aktive Teilnahme</h4>
                <p className="text-sm text-gray-700">Motiviert alle Teilnehmer, sich aktiv einzubringen.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Aufbau von Vertrauen</h4>
                <p className="text-sm text-gray-700">Stärkt das Vertrauen zwischen Teammitgliedern.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Beziehungen stärken</h4>
                <p className="text-sm text-gray-700">Verbessert die Beziehungen zwischen Teammitgliedern.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Neue Mitglieder einbringen</h4>
                <p className="text-sm text-gray-700">Hilft neuen Teammitgliedern, sich schneller zu integrieren.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ownership */}
      <section>
        <h2 id="ownership" className="scroll-mt-24 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Ownership</h2>
        <div className="space-y-6">
          {/* Grundprinzip */}
          <div className="bg-gradient-to-r from-primary-start/10 to-primary-end/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">👑</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Grundprinzip</h3>
            </div>
            <p className="text-gray-700 mb-3">PMs übernehmen Verantwortung, verteilen Rollen und steuern Erfolg/Misserfolg ihres Produktbereichs.</p>
          </div>

          {/* Circle of Influence */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🎯</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Circle of Influence</h3>
            </div>
            <p className="text-gray-700 mb-3">Energie auf Beeinflussbares richten; proaktives Handeln fördern statt Schuldzuweisungen.</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-700 italic">"Ich kann Dinge direkt positiv beeinflussen statt Opfer zu sein."</p>
            </div>
          </div>

          {/* Verantwortungsbereiche */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl">👥</span>
                <h5 className="font-semibold text-gray-900">Kundenverantwortung</h5>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Bedürfnisse verstehen (Research)</li>
                <li>Beziehungen zu UX Research pflegen</li>
                <li>Andere Teams kundenorientiert entscheiden lassen</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl">⚖️</span>
                <h5 className="font-semibold text-gray-900">Entscheidungsqualität</h5>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Angemessene Entscheidungsgrundlagen</li>
                <li>Biases bewusst sein (eigene & Stakeholder)</li>
                <li>Partnerschaften mit Analytics pflegen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resilienz */}
      <section>
        <h2 id="resilienz" className="scroll-mt-24 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Resilienz</h2>
        <div className="space-y-6">
          {/* Definition */}
          <div className="bg-gradient-to-r from-secondary-start/10 to-secondary-end/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🌱</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Definition</h3>
            </div>
            <p className="text-gray-700 mb-3">"Resilienz ist die Fähigkeit, sich an Veränderungen anzupassen, Krisen zu bewältigen und gestärkt aus Herausforderungen hervorzugehen."</p>
          </div>

          {/* Warum wichtig */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">❓</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Warum wichtig für PMs?</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-1">Rückschläge bewältigen</h5>
                <p className="text-sm text-gray-700">Im Produktmanagement sind Rückschläge unvermeidlich</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-1">Anpassungsfähigkeit</h5>
                <p className="text-sm text-gray-700">Markt und Anforderungen ändern sich ständig</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-1">Mentale Gesundheit</h5>
                <p className="text-sm text-gray-700">Schutz vor Stress und Burnout</p>
              </div>
            </div>
          </div>

          {/* Eigenschaften */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">💪</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Eigenschaften resilienter PMs</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-primary-start mt-1">•</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Emotionale Intelligenz</p>
                    <p className="text-xs text-gray-600">Emotionen erkennen und steuern</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary-start mt-1">•</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Problemlösungsfähigkeiten</p>
                    <p className="text-xs text-gray-600">Hindernisse identifizieren und kreative Lösungen entwickeln</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-primary-start mt-1">•</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Anpassungsfähigkeit</p>
                    <p className="text-xs text-gray-600">Flexibel auf veränderte Umstände reagieren</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary-start mt-1">•</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Positives Denken</p>
                    <p className="text-xs text-gray-600">In Problemen Chancen sehen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Aufbau */}
          <div className="bg-gradient-to-r from-primary-start/10 to-primary-end/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🔧</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Resilienz entwickeln</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-gray-900 mb-2">Grundlagen</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Selbstfürsorge und Stressbewältigung</li>
                  <li>Aus Erfolgen und Fehlern lernen</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-900 mb-2">Unterstützung</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Mentoring und Team-Unterstützung</li>
                  <li>Klare Ziele und Fortschrittsverfolgung</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-white/80 rounded-lg p-4">
              <p className="text-sm text-gray-700"><strong>Fokus & Prioritäten:</strong> Prioritäten nach Erkenntnissen anpassen, Kriterien für Entscheidungen entwickeln und transparent machen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section>
        <h2 id="feedback" className="scroll-mt-24 text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Feedback</h2>
        <div className="space-y-6">
          {/* Einleitung */}
          <div className="bg-gradient-to-r from-primary-start/10 to-primary-end/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🎁</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Grundprinzip</h3>
            </div>
            <p className="text-gray-700 mb-3">Feedback ist ein Geschenk – annehmbar oder ablehnbar ohne Rechtfertigung.</p>
          </div>

          {/* Die 4 Ws */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🔢</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Die 4 Ws</h3>
            </div>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="bg-primary-start text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">0</span>
                    Möglichkeit
                  </h5>
                  <p className="text-sm text-gray-700">Ist jetzt ein geeigneter Zeitpunkt? Ist Feedback erwünscht?</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="bg-primary-start text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">1</span>
                    Wertschätzung
                  </h5>
                  <p className="text-sm text-gray-700">Positive, unterstützende Haltung mit Einstieg durch Wertschätzung.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="bg-primary-start text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">2</span>
                    Wahrnehmung
                  </h5>
                  <p className="text-sm text-gray-700">Beschreibe Beobachtetes (Sinne), ohne Interpretation/Wertung.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="bg-primary-start text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">3</span>
                    Wirkung
                  </h5>
                  <p className="text-sm text-gray-700">Wie hat das beobachtete Verhalten auf dich gewirkt?</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-secondary-start/10 to-secondary-end/10 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="bg-primary-start text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">4</span>
                  Wunsch
                </h5>
                <p className="text-sm text-gray-700">Welche konkrete Veränderung wünschst du dir? Erwartungen klar kommunizieren.</p>
              </div>
            </div>
          </div>

          {/* Ziele */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🎯</span>
              <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent">Ziele von gutem Feedback</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-1">Leistungsverbesserung</h5>
                <p className="text-sm text-gray-700">Konkrete Verbesserungsvorschläge</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-1">Verständnisförderung</h5>
                <p className="text-sm text-gray-700">Klärung von Erwartungen und Zielen</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-1">Positive Kultur</h5>
                <p className="text-sm text-gray-700">Offene und konstruktive Kommunikation</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-1">Produktqualität</h5>
                <p className="text-sm text-gray-700">Höhere Produktstandards durch Input</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-1">Entwicklung fördern</h5>
                <p className="text-sm text-gray-700">Persönliche und berufliche Weiterentwicklung</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={showVerbalVideo}
        onClose={() => setShowVerbalVideo(false)}
        videoUrl="https://www.youtube.com/embed/nctBTZBbKPc?si=WeKKNLVyS_PtDMcF&autoplay=1&mute=1"
        title="Verbal, Non-verbal & Paraverbal"
      />
      <VideoModal
        isOpen={showSlidesVideo}
        onClose={() => setShowSlidesVideo(false)}
        videoUrl="https://www.youtube.com/embed/mlMvwUCtSqY?si=uIsQg_D4PbSzkdCU&autoplay=1&mute=1"
        title="Präsentationen: Der Kontext zählt"
      />
      <VideoModal
        isOpen={showScrVideo}
        onClose={() => setShowScrVideo(false)}
        videoUrl="https://www.youtube.com/embed/CY1Y367KEko?si=hX1i4sSPkw-zBH6N&autoplay=1&mute=1"
        title="SCR Framework: Situation–Complication–Resolution"
      />
      <VideoModal
        isOpen={showGoogleSlidesVideo}
        onClose={() => setShowGoogleSlidesVideo(false)}
        videoUrl="https://www.youtube.com/embed/pAATrf3NJ88?si=hhyhre34CB6mPd1R&autoplay=1&mute=1"
        title="Inspiration: Tipps zu Google Slides"
      />
    </>
  );
};
