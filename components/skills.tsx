import {
  Code2,
  Database,
  Cpu,
  Network,
  BrainCircuit,
  Cloud,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { ArrowCurveRight } from '@/components/doodles'
import { CORE_SKILLS, PROGRAMMING_SKILLS } from '@/lib/data'

const ICONS: Record<string, LucideIcon> = {
  code: Code2,
  database: Database,
  cpu: Cpu,
  network: Network,
  brain: BrainCircuit,
  cloud: Cloud,
}

function SkillCard({ name, icon, delay }: { name: string; icon: string; delay: number }) {
  const Icon = ICONS[icon] ?? Code2
  return (
    <Reveal delay={delay}>
      <div className="group flex items-center gap-4 rounded-2xl border-2 border-foreground/12 bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:rotate-[-1deg]">
        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-semibold text-foreground">{name}</span>
      </div>
    </Reveal>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading
          eyebrow="my toolkit"
          title="What I Use"
          description="Languages I build with and the core computer science foundations behind my work."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="creative-box h-full p-7 sm:p-9">
              <div className="mb-6 flex items-center gap-3 text-primary-foreground">
                <h3 className="font-display text-2xl font-bold uppercase">Programming</h3>
                <ArrowCurveRight className="h-6 w-14 text-primary-foreground/70" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {PROGRAMMING_SKILLS.map((skill, i) => (
                  <SkillCard key={skill.name} name={skill.name} icon={skill.icon} delay={i * 70} />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="paper-card h-full p-7 sm:p-9">
              <h3 className="font-display mb-6 text-2xl font-bold uppercase text-foreground">
                Core Subjects
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {CORE_SKILLS.map((skill, i) => (
                  <SkillCard key={skill.name} name={skill.name} icon={skill.icon} delay={i * 70} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
