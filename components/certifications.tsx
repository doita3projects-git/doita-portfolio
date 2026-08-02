import { Award } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { CERTIFICATIONS } from '@/lib/data'

export function Certifications() {
  return (
    <section id="certifications" className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading
          eyebrow="what I've earned"
          title="Certifications"
          description="Cloud and programming certifications that back my technical foundation."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 100}>
              <div
                className={`group flex h-full flex-col p-7 transition-transform duration-300 hover:-translate-y-1.5 hover:rotate-[-1deg] ${
                  i % 2 === 0 ? 'creative-box' : 'paper-card'
                }`}
              >
                <span
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                    i % 2 === 0
                      ? 'bg-primary-foreground text-primary'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  <Award className="h-6 w-6" />
                </span>
                <h3
                  className={`font-display text-lg font-bold leading-snug ${
                    i % 2 === 0 ? 'text-primary-foreground' : 'text-foreground'
                  }`}
                >
                  {cert.title}
                </h3>
                <p
                  className={`mt-2 ${
                    i % 2 === 0 ? 'text-primary-foreground/75' : 'text-muted-foreground'
                  }`}
                >
                  {cert.issuer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
