import { Mail, Phone, MapPin, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { ArrowLoop } from '@/components/doodles'
import { SITE } from '@/lib/data'

const CONTACT_ITEMS = [
  { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, '')}` },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'doita-seth', href: SITE.linkedin },
  { icon: GithubIcon, label: 'GitHub', value: 'doita3projects-git', href: SITE.github },
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="let's connect"
        title="Contact Me"
        description="Open to software engineering roles and collaborations. Feel free to reach out!"
      />

      <Reveal>
        <div className="creative-box relative overflow-hidden p-8 text-primary-foreground sm:p-12">
          <ArrowLoop className="absolute right-6 top-6 hidden h-12 w-12 text-primary-foreground/50 sm:block" />

          <div className="grid gap-4 sm:grid-cols-2">
            {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 rounded-2xl border-2 border-primary-foreground/25 bg-primary-foreground/5 p-5 transition-all hover:-translate-y-0.5 hover:bg-primary-foreground/12"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary-foreground/15 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="font-hand block text-lg text-primary-foreground/70">
                    {label}
                  </span>
                  <span className="block truncate font-semibold">{value}</span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 border-t-2 border-dashed border-primary-foreground/25 pt-8 sm:flex-row sm:justify-between">
            <p className="flex items-center gap-2 text-primary-foreground/80">
              <MapPin className="h-4 w-4" />
              {SITE.location}
            </p>
            <a
              href={SITE.resume}
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-bold text-primary transition-transform hover:-translate-y-0.5 hover:scale-105"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
