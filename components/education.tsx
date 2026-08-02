import { GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { EDUCATION } from '@/lib/data'

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-5 py-20 sm:py-24">
      <SectionHeading eyebrow="my academic journey" title="Education" />

      <div className="relative">
        {/* hand-drawn dashed timeline line */}
        <div
          aria-hidden="true"
          className="absolute left-[19px] top-2 bottom-2 border-l-2 border-dashed border-primary/40 sm:left-[23px]"
        />

        <ul className="flex flex-col gap-8">
          {EDUCATION.map((item, i) => (
            <Reveal key={item.school} as="li" delay={i * 100}>
              <div className="relative flex gap-5 sm:gap-6">
                <span className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground ring-4 ring-background sm:h-12 sm:w-12">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div className="paper-card flex-1 p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-lg font-bold leading-snug text-foreground">
                      {item.school}
                    </h3>
                    <span className="font-hand text-lg text-primary">{item.period}</span>
                  </div>
                  <p className="mt-1.5 text-muted-foreground">{item.detail}</p>
                  <p className="mt-3 inline-flex rounded-full bg-primary/12 px-3 py-1 text-sm font-bold text-primary">
                    {item.result}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
