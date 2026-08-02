import Image from 'next/image'
import { Download, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { ArrowCurveDown, ArrowCurveRight, ArrowLoop, Sparkle } from '@/components/doodles'
import { SITE } from '@/lib/data'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-background px-5 pt-24 pb-16"
    >
      <div className="animate-fade-in-up relative z-10 mx-auto w-full max-w-6xl">
        <div className="creative-box relative overflow-hidden p-8 sm:p-12 lg:p-16">
          {/* faint grid texture inside the teal box */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            {/* Left: wordmark + role */}
            <div className="text-primary-foreground">
              <p className="font-hand mb-2 text-2xl text-primary-foreground/80">
                Hello! this is my portfolio
              </p>

              <h1 className="font-display text-7xl font-bold uppercase leading-[0.9] tracking-tight sm:text-8xl">
                Port
                <br />
                Folio
              </h1>

              <p className="font-display mt-4 text-xl font-semibold uppercase tracking-wide text-primary-foreground/90 sm:text-2xl">
                {SITE.name}
              </p>
              <p className="font-display text-base font-medium uppercase tracking-[0.18em] text-primary-foreground/70">
                {SITE.role}
              </p>

              <p className="font-hand mt-3 text-xl text-primary-foreground/80">
                {SITE.taglines.join('  •  ')}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={SITE.resume}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-bold text-primary transition-transform hover:-translate-y-0.5 hover:scale-[1.03]"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/50 px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-bold text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </a>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  <GithubIcon className="h-6 w-6" />
                </a>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  <LinkedinIcon className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Right: doodle face + handwritten annotations */}
            <div className="relative mx-auto hidden aspect-square w-full max-w-md lg:block">
              <div className="animate-float-slow relative h-full w-full">
                <Image
                  src="/doodle-face.png"
                  alt="Hand-drawn doodle illustration"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              <p className="font-hand absolute -left-4 top-4 max-w-[10rem] text-xl leading-tight text-primary-foreground/85">
                Let&apos;s see what I can do
              </p>
              <ArrowCurveRight className="absolute left-24 top-16 h-8 w-16 text-primary-foreground/70" />

              <p className="font-hand absolute -right-2 bottom-16 max-w-[9rem] text-right text-xl leading-tight text-primary-foreground/85">
                I&apos;ll tell you what I use
              </p>
              <ArrowLoop className="absolute right-24 bottom-6 h-10 w-10 text-primary-foreground/70" />

              <Sparkle className="absolute right-6 top-2 h-7 w-7 text-primary-foreground/70" />
            </div>
          </div>

          {/* scroll cue */}
          <div className="relative mt-10 flex items-center gap-2 text-primary-foreground/70 lg:mt-6">
            <ArrowCurveDown className="h-9 w-9" />
            <a href="#about" className="font-hand text-xl hover:text-primary-foreground">
              scroll to know more about me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
