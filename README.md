# Produktmanagement Lernplattform

Eine moderne, Apple-inspirierte Lernplattform für Produktmanagement im IT-Bereich, entwickelt mit Next.js 15, TypeScript und TailwindCSS.

## 🚀 Features

- **Modulares Design**: Klare Struktur mit 7 Hauptmodulen
- **Apple-inspiriertes UI**: Sauberes, weißes Design mit benutzerdefinierten Farbverläufen
- **Responsive Layout**: Sidebar, Hauptinhalt, Header und Footer
- **ShadCN/UI Komponenten**: Moderne, zugängliche UI-Komponenten
- **TypeScript**: Vollständig typisiert für bessere Entwicklererfahrung
- **Skalierbar**: Einfaches Hinzufügen neuer Module und Inhalte

## 🎨 Design

Die Anwendung verwendet benutzerdefinierte Farbverläufe:

- **Primary**: `#d397fa` → `#8364e8` (Lila)
- **Secondary**: `#0061ff` → `#60efff` (Blau)
- **Correct**: `#82f4b1` → `#30c67c` (Grün)
- **Wrong**: `#f28367` → `#ff5282` (Rot)

## 📦 Installation

1. **Abhängigkeiten installieren**:
```bash
npm install
```

2. **Entwicklungsserver starten**:
```bash
npm run dev
```

3. **Browser öffnen**: Navigieren Sie zu [http://localhost:3000](http://localhost:3000)

## 🏗️ Projektstruktur

```
├── app/
│   ├── globals.css          # Globale Styles und Tailwind
│   ├── layout.tsx           # Root Layout
│   └── page.tsx             # Hauptseite
├── components/
│   ├── ui/
│   │   └── accordion.tsx    # ShadCN/UI Accordion
│   ├── Header.tsx           # Header-Komponente
│   ├── Footer.tsx           # Footer-Komponente
│   ├── Sidebar.tsx          # Sidebar mit Modulen
│   └── ContentArea.tsx      # Hauptinhaltsbereich
├── lib/
│   ├── utils.ts             # Utility-Funktionen
│   └── modules.ts           # Modul-Datenstruktur
├── tailwind.config.ts       # Tailwind-Konfiguration
├── tsconfig.json            # TypeScript-Konfiguration
└── package.json             # Projekt-Abhängigkeiten
```

## 📚 Module

Die Plattform umfasst folgende Module:

1. **Modul 1** - Grundlagen des Produktmanagements im IT-Bereich
2. **Modul 2** - Market & User Research
3. **Modul 4** - Agile Methoden & Anforderungsmanagement
4. **Modul 5** - Customer Experience Design
5. **Modul 7** - Validierung und Entscheidungsfindung
6. **Modul 8** - Roadmapping
7. **Modul 9** - Geschäftsausrichtung & Business Model

## 🔧 Neue Module hinzufügen

Um neue Module oder Untermodule hinzuzufügen, bearbeiten Sie `lib/modules.ts`:

```typescript
export const modules: Module[] = [
  {
    id: "modul-10",
    title: "Modul 10 - Neues Thema",
    description: "Beschreibung des neuen Moduls",
    subModules: [
      {
        id: "modul-10-1",
        title: "Untermodul 1",
        content: "Inhalt hier...",
      },
    ],
  },
  // ... weitere Module
];
```

## 🛠️ Technologie-Stack

- **Framework**: Next.js 15
- **Sprache**: TypeScript
- **Styling**: TailwindCSS
- **UI-Komponenten**: ShadCN/UI (Radix UI)
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📝 Scripts

- `npm run dev` - Startet den Entwicklungsserver
- `npm run build` - Erstellt die Produktions-Build
- `npm run start` - Startet den Produktionsserver
- `npm run lint` - Führt ESLint aus

## 🌐 Browser-Unterstützung

Die Anwendung unterstützt alle modernen Browser:
- Chrome (neueste Version)
- Firefox (neueste Version)
- Safari (neueste Version)
- Edge (neueste Version)

## 📄 Lizenz

Dieses Projekt ist privat und alle Rechte vorbehalten.

---

Entwickelt mit ❤️ für effektives Produktmanagement-Lernen
# Produktmanager-Lernplattform
