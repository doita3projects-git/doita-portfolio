import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Sparkle } from '@/components/doodles'
import { ABOUT, SITE, SOFT_SKILLS } from '@/lib/data'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading eyebrow="a little about me" title="About Me" />

      <div className="grid gap-8 md:grid-cols-5">
        {/* Profile card */}
        <Reveal className="md:col-span-2">
          <div className="paper-card flex h-full flex-col items-center p-6 text-center sm:p-8">
            <div className="relative mb-5 h-40 w-40 overflow-hidden rounded-full border-4 border-primary shadow-lg">
              <Image
                src="/profile.jpeg"
                alt="Portrait of Doita Seth"
                width={320}
                height={320}
                priority
                className="h-full w-full object-cover object-top"
              />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground">{SITE.name}</h3>
            <p className="font-hand text-xl text-primary">{SITE.role}</p>
            <p className="mt-1 text-sm text-muted-foreground">{SITE.location}</p>
          </div>
        </Reveal>

        {/* Bio + strengths */}
        <div className="flex flex-col gap-6 md:col-span-3">
          <Reveal>
            <div className="creative-box relative p-8 sm:p-10">
              <Sparkle className="absolute right-5 top-5 h-6 w-6 text-primary-foreground/60" />
              <p className="text-pretty text-lg leading-relaxed text-primary-foreground">{ABOUT}</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="paper-card p-7">
              <h4 className="font-hand mb-4 text-2xl text-primary">My strengths</h4>
              <ul className="grid gap-3 sm:grid-cols-2">
                {SOFT_SKILLS.map((skill) => (
                  <li key={skill} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary"
                    />
                    <span className="leading-relaxed text-foreground/80">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
