import { Reveal } from '@/components/reveal'
import { ArrowLoop, Squiggle } from '@/components/doodles'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="relative mx-auto mb-14 max-w-2xl text-center">
      <div className="mb-2 flex items-center justify-center gap-2 text-primary">
        <ArrowLoop className="hidden h-8 w-8 -scale-x-100 sm:block" />
        <p className="font-hand text-2xl font-semibold">{eyebrow}</p>
      </div>

      <h2 className="font-display text-balance text-4xl font-bold uppercase leading-[1.05] tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>

      <div className="mt-3 flex justify-center text-primary">
        <Squiggle className="h-3.5 w-44" />
      </div>

      {description && (
        <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{description}</p>
      )}
    </Reveal>
  )
}
