import type { SVGProps } from 'react'

/**
 * Hand-drawn doodle SVGs used across the portfolio to match the
 * sketchy, marker-drawn reference aesthetic. All strokes use
 * currentColor so they inherit the surrounding text color.
 */

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

/** A curvy arrow that sweeps down-left, like pointing at a heading. */
export function ArrowCurveDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 80 90" {...base} {...props}>
      <path d="M58 8C58 34 47 52 20 60" />
      <path d="M32 54 20 61 27 74" />
    </svg>
  )
}

/** A long curvy arrow sweeping to the right. */
export function ArrowCurveRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 60" {...base} {...props}>
      <path d="M6 20C40 4 78 6 110 30" />
      <path d="M98 16 111 31 94 38" />
    </svg>
  )
}

/** A loopy pointing arrow (down + hook). */
export function ArrowLoop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 90 90" {...base} {...props}>
      <path d="M14 10c30 6 44 22 40 46-2 12-12 18-22 12-8-5-6-16 3-16 12 0 20 10 20 22" />
      <path d="M45 66 55 75 62 62" />
    </svg>
  )
}

/** A long dashed/segmented straight arrow like the reference "work" arrow. */
export function ArrowStraight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 40" {...base} {...props}>
      <path d="M6 22C60 14 130 14 210 20" />
      <path d="M196 8 214 20 197 32" />
    </svg>
  )
}

/** A hand-drawn squiggly underline. */
export function Squiggle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 14" {...base} strokeWidth={3} {...props}>
      <path d="M3 8c14-8 26 6 40 0s26-8 40-2 26 8 40 2 26-6 40-2 26 6 34 4" />
    </svg>
  )
}

/** A small four-point sparkle / doodle star. */
export function Sparkle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <path d="M20 4c1 9 7 15 16 16-9 1-15 7-16 16-1-9-7-15-16-16 9-1 15-7 16-16Z" />
    </svg>
  )
}
