# 🧩 AI Skill Library for VS Code

AI Skill Library es una extensión de Visual Studio Code diseñada para gestionar, organizar y aplicar "habilidades" (instrucciones de contexto avanzadas) a tus modelos de IA favoritos (Claude, GPT, Copilot) de la misma forma en que adjuntas archivos a un chat.

## 🚀 La Idea

En lugar de escribir prompts repetitivos, la extensión permite inyectar Skills predefinidas o personalizadas como "chips" de contexto. Esto mantiene tu flujo de trabajo limpio y tus interacciones con la IA especializadas según la tarea.

## 🛠️ Características Principales

*   **Biblioteca de Skills:** Un panel lateral para organizar tus instrucciones por Categorías (Frontend, Backend, DevOps) y Especialidades (React, Rust, SQL Optimization).
*   **Inyección Tipo "File-Add":** Interfaz integrada en el chat para añadir habilidades como si fueran archivos adjuntos (README.md, main.ts, etc.).
*   **Variables Dinámicas:** Skills que se adaptan automáticamente al lenguaje del archivo que tienes abierto.
*   **Import/Export:** Comparte tus "Skill Packs" con tu equipo mediante archivos JSON/YAML.

## 🏗️ Arquitectura del Proyecto

La extensión sigue la estructura estándar de VS Code usando TypeScript:

```text
ai-skill-library/
├── .vscode/               # Configuración de depuración
├── src/
│   ├── extension.ts       # Punto de entrada (activación de la extensión)
│   ├── skills/            # Lógica de gestión de la biblioteca
│   │   ├── provider.ts    # Proveedor del TreeView (Panel Lateral)
│   │   └── manager.ts     # CRUD de las habilidades (crear, editar, borrar)
│   ├── ui/                # Componentes de la interfaz
│   │   └── chatBridge.ts  # Integración con la API de Chat de VS Code
│   └── models/            # Definición de interfaces (Skill, Category)
├── assets/                # Iconos (⚡, 🧩)
├── package.json           # Manifiesto y comandos de la extensión
└── tsconfig.json          # Configuración de TypeScript
```

## 📋 Anatomía de una "Skill"

Cada skill se almacena internamente con la siguiente estructura:

*   **ID:** Identificador único.
*   **Label:** Nombre visible (ej: ⚡ Unit Test Expert).
*   **Category:** Agrupación lógica (ej: Testing).
*   **Prompt:** El cuerpo de la instrucción que se enviará al modelo.
*   **Context:** Metadatos para saber cuándo sugerir esta skill.

## 🛠️ Roadmap de Desarrollo

*   [ ] **Fase 1:** Crear el Panel Lateral (TreeView) para visualizar categorías y skills.
*   [ ] **Fase 2:** Implementar el motor de almacenamiento local para las skills del usuario.
*   [ ] **Fase 3:** Integración con la `vscode.ChatParticipant` API para permitir el "adjuntado" visual en el chat.
*   [ ] **Fase 4:** Sistema de plantillas para variables dinámicas (ej: `{{language}}`, `{{selection}}`).

> **Nota:** Esta extensión busca ser agnóstica al modelo, permitiendo que tus "Skills" te acompañen sin importar si usas Claude, GPT-4 o modelos locales.
