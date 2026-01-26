/**
 * AboutSection:
 * Sección "ABOUT" del portafolio.
 * Por ahora es texto simple como en la imagen.
 * Luego podemos enriquecer con highlights (chips, links, etc.)
 */

import SectionFrame from "../../components/SectionFrame/SectionFrame";

export default function AboutSection() {
  return(
    <SectionFrame title="ABOUT">
            <p style={{ marginTop: 0 }}>
        Soy desarrollador fullstack con enfoque en React/TypeScript y apps móviles con Flutter.
      </p>

      <p style={{ marginBottom: 0 }}>
        Me gusta construir productos limpios, rápidos y con buena UX.
      </p>
    </SectionFrame>
  )
}