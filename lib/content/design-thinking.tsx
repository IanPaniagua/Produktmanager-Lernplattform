import React from "react";
import Quiz from "@/components/Quiz";

export const DesignThinkingContent = () => {
  return (
    <div className="space-y-12">
      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Einführung in Design Thinking</h2>
        
        <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent mb-3">Was ist Design Thinking?</h3>
        
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
          }
        ]}
      />

      {/* Principles */}
      <section className="pt-2">
        <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Design Thinking Prinzipien</h2>
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
      </section>

      {/* Double Diamond */}
      <section className="pt-2">
        <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Double Diamond der Produktentwicklung</h2>
        <div className="bg-gradient-to-r from-secondary-start/10 to-secondary-end/10 rounded-xl p-6">
          <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent mb-3">Der Design Thinking-Prozess</h3>
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
        <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Die 5 Schritte des Design Thinking</h2>
        
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
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-medium text-gray-900">Brainstorming / Brainwriting</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-medium text-gray-900">Crazy 8s</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-medium text-gray-900">Mindmapping</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="font-medium text-gray-900">SCAMPER</p>
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
      </section>

      {/* Design Thinking vs Agile */}
      <section>
        <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">Design Thinking vs. agile Methoden</h2>
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
        <h3 className="text-xl font-semibold bg-gradient-secondary bg-clip-text text-transparent mb-4">🔑 Key Takeaways</h3>
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
    </div>
  );
};
