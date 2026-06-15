# ARROMERO.dev

Portafolio personal de Andrés R. Romero, construido con React, TypeScript y
Vite. La interfaz conserva una identidad retro, pero prioriza legibilidad,
accesibilidad, rendimiento y una presentación profesional de los proyectos.

## Características

- Tema claro y oscuro con preferencia persistente.
- Diseño responsive para escritorio, tablet y móvil.
- Navegación semántica y soporte para teclado.
- Proyectos centralizados en `src/data/projects.ts`.
- Metadatos SEO y sociales para GitHub Pages.
- CSS propio sin depender de un framework visual.

## Requisitos

- Node.js 20 o superior.
- pnpm 11.

## Desarrollo local

```bash
pnpm install
pnpm dev
```

La aplicación estará disponible en la URL que indique Vite, normalmente
`http://localhost:5173`.

## Validaciones

```bash
pnpm lint
pnpm build
pnpm check
```

`pnpm check` ejecuta lint y build de forma consecutiva.

## Actualizar proyectos

Edita `src/data/projects.ts`. Cada proyecto acepta:

- `title`: nombre visible.
- `category`: tipo de proyecto.
- `description`: resumen orientado al valor.
- `tech`: tecnologías principales.
- `repoUrl`: repositorio público.
- `demoUrl`: demo opcional.

## Despliegue

```bash
pnpm deploy
```

El comando genera `dist` y publica su contenido en la rama `gh-pages`. La ruta
base está configurada para:

`https://arromero4.github.io/arromero-portfolio-v2/`
