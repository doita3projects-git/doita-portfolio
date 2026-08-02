import { Award } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { CERTIFICATIONS } from '@/lib/data'

export function Certifications() {
  return (
    <section id="certifications" className="bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials & training"
          description="Cloud and programming certifications that back my technical foundation."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 100}>
              <div className="glass group flex h-full flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                  <Award className="h-6 w-6" />
                </span>
                <h3 className="text-base font-semibold leading-snug text-foreground">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
