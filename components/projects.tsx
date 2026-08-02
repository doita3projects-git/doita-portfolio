import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { ArrowStraight, Sparkle } from '@/components/doodles'
import { PROJECTS, SITE, type Project } from '@/lib/data'

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal delay={delay} as="article">
      <div className="paper-card group relative flex h-full flex-col overflow-hidden p-0 transition-transform duration-300 hover:-translate-y-2 hover:rotate-[-1deg]">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-primary">
          <Image
            src={project.image || '/placeholder.svg'}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <h3 className="font-display text-xl font-bold leading-snug text-foreground">
            {project.title}
          </h3>
          <p className="mt-2.5 flex-1 text-pretty leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-primary/12 px-3 py-1 text-xs font-bold text-primary"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-3 border-t-2 border-dashed border-foreground/12 pt-5">
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-bold text-muted-foreground transition-colors hover:text-primary"
            >
              Details
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading eyebrow="a peek at my work" title="Projects" />

      {/* Reference-style bold statement banner */}
      <Reveal>
        <div className="creative-box relative mb-12 overflow-hidden p-8 text-center sm:p-10">
          <Sparkle className="absolute left-6 top-6 h-6 w-6 text-primary-foreground/60" />
          <h3 className="font-display text-3xl font-bold uppercase leading-tight text-primary-foreground sm:text-4xl">
            Let&apos;s go to get some idea about my work
          </h3>
          <div className="mt-4 flex justify-center text-primary-foreground/70">
            <ArrowStraight className="h-6 w-56" />
          </div>
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} delay={(i % 2) * 120} />
        ))}
      </div>
    </section>
  )
}
