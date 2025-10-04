# Quick Start: Crear un Nuevo Submódulo

## Opción 1: Usar el Script Generador (Recomendado)

```bash
./scripts/create-module.sh nombre-modulo "Título del Módulo"
```

**Ejemplo:**
```bash
./scripts/create-module.sh agile-methoden "Agile Methoden"
```

Esto crea automáticamente:
- ✅ Directorio de quizzes: `quiz/agile-methoden/`
- ✅ Quiz de ejemplo: `quiz/agile-methoden/intro.json`
- ✅ Componente de contenido: `lib/content/agile-methoden.tsx`
- ✅ Página de examen: `app/exam/agile-methoden/page.tsx`

## Opción 2: Manual (Si necesitas más control)

Sigue la guía completa en [MODULE_SYSTEM.md](./MODULE_SYSTEM.md)

## Después de Crear el Módulo

### 1. Agregar Contenido

Edita `lib/content/[nombre-modulo].tsx`:

```tsx
<ModuleSection
  id="mi-seccion"
  title="Mi Sección"
  quiz={
    <div className="pt-6">
      <Quiz title="Quiz: Mi Sección" questions={miSeccionQuiz} />
    </div>
  }
>
  {/* Tu contenido aquí */}
  <p>Este contenido se oculta automáticamente en modo quiz.</p>
</ModuleSection>
```

### 2. Crear Más Quizzes

Crea archivos JSON en `quiz/[nombre-modulo]/`:

```json
{
  "questions": [
    {
      "question": "Tu pregunta aquí?",
      "options": [
        {
          "text": "Opción A",
          "rationale": "Explicación de por qué esta opción es incorrecta"
        },
        {
          "text": "Opción B (correcta)",
          "rationale": "Explicación de por qué esta es la respuesta correcta"
        }
      ],
      "correct_answer": "Opción B (correcta)"
    }
  ]
}
```

### 3. Actualizar Sidebar

En `components/Sidebar.tsx`, agrega la navegación:

```tsx
{selectedModuleId === subModule.id && subModule.content === "nombre-modulo" && showSubNav && (
  <nav className="ml-7 mt-1 mb-2 border-l border-gray-200 pl-3 space-y-1">
    <a href="#einfuhrung">Einführung</a>
    <a href="#seccion1">Sección 1</a>
    <a href="#abschlusstest">Abschlusstest</a>
  </nav>
)}
```

### 4. Registrar el Módulo

Actualiza la configuración de módulos para que aparezca en el menú principal.

## Funcionalidades Automáticas

Al usar `ModuleLayout` y `ModuleSection`, obtienes GRATIS:

✅ Botón "Nur QUIZ anzeigen" / "Theorie anzeigen"
✅ Botón "Zum Test" con scroll suave
✅ Modo quiz que oculta teoría automáticamente
✅ Sección de Abschlusstest con formato estándar
✅ Navegación por IDs
✅ Carga de quizzes simplificada

## Ejemplo Completo

Ver `lib/content/design-thinking-NEW.tsx` para un ejemplo completo de cómo usar el sistema.

## Tiempo Estimado

- **Con script**: ~10 minutos para un módulo básico
- **Manual**: ~30 minutos para un módulo básico
- **Módulo completo con contenido**: 1-2 horas (vs 4-6 horas antes)

## Soporte

Si tienes problemas, consulta:
- [MODULE_SYSTEM.md](./MODULE_SYSTEM.md) - Documentación completa
- Ejemplos existentes en `lib/content/`
