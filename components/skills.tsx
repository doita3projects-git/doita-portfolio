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
      <div className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-5 w-5" />
        </span>
        <span className="text-sm font-medium text-foreground">{name}</span>
      </div>
    </Reveal>
  )
}

export function Skills() {
  return (
    <section id="skills" className="bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          description="Languages I build with and the core computer science foundations behind my work."
        />

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Programming
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {PROGRAMMING_SKILLS.map((skill, i) => (
                <SkillCard key={skill.name} name={skill.name} icon={skill.icon} delay={i * 70} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Core Subjects
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {CORE_SKILLS.map((skill, i) => (
                <SkillCard key={skill.name} name={skill.name} icon={skill.icon} delay={i * 70} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
