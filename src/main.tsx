import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
// NES.css (framework retro)
import "nes.css/css/nes.min.css";
// Tus estilos globales (tema + layout base)
import "./styles/theme.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
