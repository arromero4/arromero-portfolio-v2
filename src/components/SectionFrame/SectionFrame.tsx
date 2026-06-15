import type { ReactNode } from 'react'
import './sectionFrame.css'

type SectionFrameProps = {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}

export default function SectionFrame({
  id,
  eyebrow,
  title,
  children,
}: SectionFrameProps) {
  const titleId = `${id}-title`

  return (
    <section className="sectionFrame" id={id} aria-labelledby={titleId}>
      <header className="sectionFrame__header">
        <span>{eyebrow}</span>
        <h2 id={titleId}>{title}</h2>
      </header>

      <div className="sectionFrame__content">{children}</div>
    </section>
  )
}
