import { GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { EDUCATION } from '@/lib/data'

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-6 py-24 sm:py-28">
      <SectionHeading eyebrow="Education" title="Academic journey" />

      <div className="relative">
        {/* vertical line */}
        <div
          aria-hidden="true"
          className="absolute left-[19px] top-2 bottom-2 w-px bg-border sm:left-[23px]"
        />

        <ul className="flex flex-col gap-8">
          {EDUCATION.map((item, i) => (
            <Reveal key={item.school} as="li" delay={i * 100}>
              <div className="relative flex gap-5 sm:gap-6">
                <span className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground sm:h-12 sm:w-12">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div className="glass flex-1 rounded-2xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                    <h3 className="text-base font-semibold leading-snug text-foreground">
                      {item.school}
                    </h3>
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground">{item.detail}</p>
                  <p className="mt-3 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground/80">
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
