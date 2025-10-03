export interface Module {
  id: string;
  title: string;
  description?: string;
  subModules?: SubModule[];
}

export interface SubModule {
  id: string;
  title: string;
  content?: string;
}

// Module data - easily extendable
export const modules: Module[] = [
  {
    id: "modul-1",
    title: "Modul 1 - Grundlagen des Produktmanagements im IT-Bereich",
    description: "Grundlagen des Produktmanagements im IT-Bereich",
    subModules: [
      {
        id: "modul-1-design-thinking",
        title: "1.5 Design Thinking",
        content: "design-thinking",
      },
    ],
  },
  {
    id: "modul-2",
    title: "Modul 2 - Market & User Research",
    description: "Market & User Research",
    subModules: [],
  },
  {
    id: "modul-4",
    title: "Modul 4 - Agile Methoden & Anforderungsmanagement",
    description: "Agile Methoden & Anforderungsmanagement",
    subModules: [],
  },
  {
    id: "modul-5",
    title: "Modul 5 - Customer Experience Design",
    description: "Customer Experience Design",
    subModules: [],
  },
  {
    id: "modul-7",
    title: "Modul 7 - Validierung und Entscheidungsfindung",
    description: "Validierung und Entscheidungsfindung",
    subModules: [],
  },
  {
    id: "modul-8",
    title: "Modul 8 - Roadmapping",
    description: "Roadmapping",
    subModules: [],
  },
  {
    id: "modul-9",
    title: "Modul 9 - Geschäftsausrichtung & Business Model",
    description: "Geschäftsausrichtung & Business Model",
    subModules: [],
  },
];
