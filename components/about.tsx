import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { ABOUT, SOFT_SKILLS } from '@/lib/data'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <SectionHeading eyebrow="About" title="A little about me" />

      <div className="grid gap-6 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <div className="glass h-full rounded-3xl p-8 sm:p-10">
            <p className="text-pretty text-lg leading-relaxed text-foreground/80">{ABOUT}</p>
          </div>
        </Reveal>

        <Reveal className="md:col-span-2" delay={120}>
          <div className="glass h-full rounded-3xl p-8">
            <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Strengths
            </h3>
            <ul className="flex flex-col gap-4">
              {SOFT_SKILLS.map((skill) => (
                <li key={skill} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground"
                  />
                  <span className="leading-relaxed text-foreground/80">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
