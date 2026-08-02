import Image from 'next/image'
import { Download, ArrowDown, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { SITE } from '@/lib/data'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary text-primary-foreground"
    >
      {/* subtle depth layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, white, transparent 65%)' }}
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-28 text-center">
        <div className="animate-fade-in-up">
          <div className="relative mx-auto mb-8 h-36 w-36 sm:h-40 sm:w-40">
            <div className="animate-float-slow relative h-full w-full">
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-full border border-white/20"
              />
              <Image
                src="/profile.jpeg"
                alt="Portrait of Doita Seth"
                width={320}
                height={320}
                priority
                className="h-full w-full rounded-full object-cover object-top shadow-2xl ring-1 ring-white/20"
              />
            </div>
          </div>
        </div>

        <p
          className="animate-fade-in-up mb-4 text-xs font-medium uppercase tracking-[0.35em] text-primary-foreground/60"
          style={{ animationDelay: '80ms' }}
        >
          {SITE.role}
        </p>

        <h1
          className="animate-fade-in-up text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl"
          style={{ animationDelay: '160ms' }}
        >
          {SITE.name}
        </h1>

        <p
          className="animate-fade-in-up mt-5 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/70 sm:text-lg"
          style={{ animationDelay: '240ms' }}
        >
          {SITE.taglines.join('  •  ')}
        </p>

        <div
          className="animate-fade-in-up mt-9 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: '320ms' }}
        >
          <a
            href={SITE.resume}
            download
            className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-transform hover:scale-[1.03]"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-white/10"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </div>

        <div
          className="animate-fade-in-up mt-8 flex items-center gap-4"
          style={{ animationDelay: '400ms' }}
        >
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-primary-foreground/60 transition-colors hover:text-primary-foreground"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-primary-foreground/60 transition-colors hover:text-primary-foreground"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-primary-foreground/50 transition-colors hover:text-primary-foreground"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  )
}
