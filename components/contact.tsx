import { Mail, Phone, MapPin, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { SITE } from '@/lib/data'

const CONTACT_ITEMS = [
  { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, '')}` },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'doita-seth', href: SITE.linkedin },
  { icon: GithubIcon, label: 'GitHub', value: 'doita3projects-git', href: SITE.github },
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something"
        description="Open to software engineering roles and collaborations. Feel free to reach out."
      />

      <Reveal>
        <div className="glass-dark overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground sm:p-12">
          <div className="grid gap-4 sm:grid-cols-2">
            {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/10"
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-primary-foreground/60">
                    {label}
                  </span>
                  <span className="block truncate text-sm font-medium">{value}</span>
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
            <p className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <MapPin className="h-4 w-4" />
              {SITE.location}
            </p>
            <a
              href={SITE.resume}
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-transform hover:scale-105"
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
