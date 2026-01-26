# 🎮 ARROMERO.dev – Retro Portfolio

Portafolio personal inspirado en estética **retro / NES**, desarrollado con **React + TypeScript** usando **Vite** y **NES.css**.  
El objetivo del proyecto es presentar mi perfil profesional y proyectos de forma clara, visualmente distintiva y con una UX cuidada, manteniendo buenas prácticas de frontend moderno.

---

## ✨ Características

- 🕹️ **Estética retro (NES-style)** con marcos pixelados y tipografía 8-bit  
- 🌗 **Modo DARK / LIGHT** con persistencia en `localStorage`  
- 🧩 Arquitectura **modular y reutilizable** (componentes y secciones)  
- 📱 **Diseño responsive** (desktop y mobile)  
- 🎯 Enfoque en **claridad visual y jerarquía de información**

---

## 🧱 Tecnologías utilizadas

- **React** + **TypeScript**
- **Vite** (bundler y dev server)
- **NES.css** (framework CSS retro)
- **CSS Variables** para theming (dark / light)
- **Google Fonts – Press Start 2P** (tipografía pixel)

---

## 📁 Estructura del proyecto

src/
├── components/
│ ├── Header/ # Encabezado principal + toggle de tema
│ ├── SectionFrame/ # Marco reutilizable para secciones
│ ├── ProjectCard/ # Card individual de proyectos
│ ├── Footer/ # Footer inferior
│
├── sections/
│ ├── About/ # Sección ABOUT
│ ├── Projects/ # Sección PROJECTS
│ ├── Contact/ # Sección CONTACT
│
├── styles/
│ └── theme.css # Variables de tema y estilos globales
│
├── App.tsx # Composición principal de la app
├── main.tsx # Entry point


---

## 🧩 Componentes clave

### `Header`
- Muestra el título **ARROMERO.dev**
- Nombre y rol profesional
- Botón **DARK / LIGHT**
- Controla el tema global de la aplicación

### `SectionFrame`
- Componente reutilizable para secciones
- Incluye:
  - Marco exterior + interior
  - Barra superior con título (ABOUT / PROJECTS / CONTACT)
- Garantiza consistencia visual

### `ProjectCard`
- Card de proyecto con:
  - Título
  - Descripción
  - Chips de tecnologías
  - Botones **REPO** y **DEMO**

---

## 🌗 Manejo de temas (Dark / Light)

El tema se controla mediante:
- Atributo `data-theme` en `<html>`
- Variables CSS (`--panel-bg`, `--text-primary`, etc.)
- Persistencia automática en `localStorage`

Esto permite:
- Cambiar tema sin recargar
- Mantener preferencia del usuario

---

## 🚀 Instalación y uso

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/arromero-portfolio.git

# Entrar al proyecto
cd arromero-portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
Luego abre:
👉 http://localhost:5173
```

## 🎯 Objetivo del proyecto
Este portafolio busca:

Mostrar proyectos reales de frontend y mobile

Reflejar identidad personal mediante diseño

Servir como base escalable para:

Nuevos proyectos

Animaciones

Internacionalización

Integración con CMS o API

📄 Licencia
Este proyecto es de uso personal.
El código puede ser reutilizado con fines educativos o de referencia.

© 2026 Andrés R. Romero


