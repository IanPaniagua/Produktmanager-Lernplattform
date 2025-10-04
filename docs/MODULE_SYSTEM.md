# Sistema Modular para Submódulos

Este documento explica cómo crear nuevos submódulos de forma rápida y consistente usando el sistema modular.

## Componentes Principales

### 1. `ModuleLayout`
Componente principal que envuelve todo el contenido del módulo.

**Props:**
- `children`: Contenido del módulo (secciones)
- `examPath`: Ruta al examen (ej: `/exam/design-thinking`)
- `examTitle`: Título del examen
- `examQuestionCount`: Número de preguntas del examen
- `testSectionId`: ID de la sección de test (default: `"abschlusstest"`)

**Funcionalidades automáticas:**
- ✅ Botones "Nur QUIZ anzeigen" y "Zum Test"
- ✅ Estado `quizMode` compartido
- ✅ Sección de Abschlusstest automática
- ✅ Context API para acceder a `quizMode` en componentes hijos

### 2. `ModuleSection`
Componente para cada sección del módulo.

**Props:**
- `id`: ID único para navegación (ej: `"einfuhrung"`)
- `title`: Título de la sección
- `children`: Contenido teórico (se oculta en quiz mode)
- `quiz`: Componente Quiz (siempre visible)

**Funcionalidades automáticas:**
- ✅ Título H2 con ID para navegación
- ✅ Oculta contenido teórico cuando `quizMode` está activo
- ✅ Mantiene quizzes siempre visibles

### 3. `useQuizQuestions` Hook
Hook para cargar y transformar quizzes desde JSON.

**Uso:**
```tsx
const quizQuestions = useQuizQuestions(quizRawData);
```

### 4. `useCombinedQuizzes` Hook
Hook para combinar múltiples quizzes (útil para el examen final).

**Uso:**
```tsx
const allQuestions = useCombinedQuizzes([quiz1, quiz2, quiz3]);
```

## Cómo Crear un Nuevo Submódulo

### Paso 1: Crear archivos de quiz (JSON)

Crea los archivos en `/quiz/[nombre-modulo]/`:
```
quiz/
  mi-modulo/
    intro.json
    seccion1.json
    seccion2.json
    final.json
```

### Paso 2: Crear el componente de contenido

```tsx
"use client";

import React from "react";
import { ModuleLayout } from "@/components/ModuleLayout";
import { ModuleSection } from "@/components/ModuleSection";
import Quiz from "@/components/Quiz";
import { useQuizQuestions } from "@/lib/utils/quizLoader";

// Import quizzes
import introQuizRaw from "@/quiz/mi-modulo/intro.json" assert { type: "json" };
import seccion1QuizRaw from "@/quiz/mi-modulo/seccion1.json" assert { type: "json" };

export const MiModuloContent = () => {
  // Load quizzes
  const introQuiz = useQuizQuestions(introQuizRaw);
  const seccion1Quiz = useQuizQuestions(seccion1QuizRaw);
  
  return (
    <ModuleLayout
      examPath="/exam/mi-modulo"
      examTitle="Abschlusstest: Mi Módulo"
      examQuestionCount={30}
    >
      {/* Sección 1 */}
      <ModuleSection
        id="introduccion"
        title="Introducción"
        quiz={
          <div className="pt-6">
            <Quiz title="Quiz: Introducción" questions={introQuiz} />
          </div>
        }
      >
        {/* Contenido teórico aquí */}
        <p>Este contenido se oculta en modo quiz.</p>
      </ModuleSection>

      {/* Sección 2 */}
      <ModuleSection
        id="seccion1"
        title="Sección 1"
        quiz={
          <div className="pt-6">
            <Quiz title="Quiz: Sección 1" questions={seccion1Quiz} />
          </div>
        }
      >
        {/* Contenido teórico aquí */}
      </ModuleSection>

      {/* Más secciones... */}
    </ModuleLayout>
  );
};
```

### Paso 3: Crear la página del examen

```tsx
"use client";

import React, { useEffect } from "react";
import FinalExam from "@/components/FinalExam";
import { useCombinedQuizzes } from "@/lib/utils/quizLoader";

// Import all quizzes
import introQuizRaw from "@/quiz/mi-modulo/intro.json" assert { type: "json" };
import seccion1QuizRaw from "@/quiz/mi-modulo/seccion1.json" assert { type: "json" };

export default function MiModuloExamPage() {
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  const allQuestions = useCombinedQuizzes([
    introQuizRaw,
    seccion1QuizRaw,
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <FinalExam
          title="Abschlusstest: Mi Módulo"
          questions={allQuestions}
        />
      </div>
    </div>
  );
}
```

### Paso 4: Actualizar el Sidebar

Agregar la navegación en `/components/Sidebar.tsx`:

```tsx
{selectedModuleId === subModule.id && subModule.content === "mi-modulo" && showSubNav && (
  <nav className="ml-7 mt-1 mb-2 border-l border-gray-200 pl-3 space-y-1">
    <a href="#introduccion" className="block text-xs text-gray-600 hover:text-primary-end">
      Introducción
    </a>
    <a href="#seccion1" className="block text-xs text-gray-600 hover:text-primary-end">
      Sección 1
    </a>
    <a href="#abschlusstest" className="block text-xs text-gray-600 hover:text-primary-end">
      Abschlusstest
    </a>
  </nav>
)}
```

## Ventajas del Sistema

✅ **Consistencia**: Todos los módulos tienen la misma estructura y comportamiento
✅ **Rapidez**: Crear un nuevo módulo toma ~10 minutos
✅ **Mantenibilidad**: Cambios en un solo lugar afectan a todos los módulos
✅ **Menos código**: No duplicar lógica de UI en cada módulo
✅ **Automático**: Quiz mode, botones, y examen funcionan sin configuración extra

## Migración de Módulos Existentes

Para migrar un módulo existente:

1. Envolver el contenido con `<ModuleLayout>`
2. Convertir cada sección a `<ModuleSection>`
3. Mover quizzes al prop `quiz` de cada sección
4. Eliminar lógica manual de `quizMode` y botones
5. Usar `useQuizQuestions` en lugar de `useMemo` manual

## Próximos Pasos

- [ ] Migrar Design Thinking al nuevo sistema
- [ ] Migrar Effektivität & Effizienz al nuevo sistema
- [ ] Crear template/generator para nuevos módulos
- [ ] Documentar patrones comunes de contenido
