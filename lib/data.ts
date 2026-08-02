export const SITE = {
  name: 'Doita Seth',
  role: 'Software Engineer Fresher',
  taglines: ['Cloud Computing Enthusiast', 'Python Developer', 'AI Application Builder'],
  email: 'sethdoita3@gmail.com',
  phone: '+91 9339075602',
  location: 'Khanakul, Hooghly, West Bengal, 712406',
  github: 'https://github.com/doita3projects-git',
  linkedin: 'https://www.linkedin.com/in/doita-seth-29b39527a',
  resume: '/DOITASETH_CSE_2026.pdf',
}

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const ABOUT = `I'm Doita Seth, an enthusiastic Software Engineering fresher with a strong foundation in Python programming, AI-driven applications, and secure software development. I have hands-on experience building practical projects across automation, speech recognition, and steganography, backed by solid knowledge of core computer science subjects and cloud technologies. As a proactive learner and problem solver, I'm actively seeking opportunities to contribute and grow as a Software Engineer.`

export const PROGRAMMING_SKILLS = [
  { name: 'Python', icon: 'code' },
  { name: 'C', icon: 'code' },
  { name: 'HTML', icon: 'code' },
  { name: 'CSS', icon: 'code' },
  { name: 'SQL', icon: 'database' },
]

export const CORE_SKILLS = [
  { name: 'DBMS', icon: 'database' },
  { name: 'Operating Systems', icon: 'cpu' },
  { name: 'Computer Networks', icon: 'network' },
  { name: 'Data Structures & Algorithms', icon: 'brain' },
  { name: 'Cloud Computing', icon: 'cloud' },
]

export const SOFT_SKILLS = [
  'Time Management & Efficiency',
  'Problem Solving & Critical Thinking',
  'Openness to Feedback',
  'Adaptability',
]

export type Project = {
  title: string
  description: string
  technologies: string[]
  image: string
}

export const PROJECTS: Project[] = [
  {
    title: 'Jarvis — Voice-Automated AI Assistant',
    description:
      'A personal, voice-automated laptop assistant that understands natural speech and executes commands hands-free using generative AI.',
    technologies: ['Python', 'Google Gemini API', 'Speech Recognition'],
    image: '/projects/jarvis.png',
  },
  {
    title: 'Python Automation & Development',
    description:
      'A collection of automation scripts and tooling that streamline repetitive workflows and accelerate day-to-day development tasks.',
    technologies: ['Python', 'Automation', 'Scripting'],
    image: '/projects/automation.png',
  },
  {
    title: 'Cryptography & Steganography in Audio',
    description:
      'A secure data-hiding system that encrypts messages and conceals them within audio signals for confidential communication.',
    technologies: ['Python', 'Cryptography', 'Audio Processing'],
    image: '/projects/audio-crypto.png',
  },
  {
    title: 'Image Steganography (RGB & Spiral Scanning)',
    description:
      'Research work introducing an RGB spiral-scanning technique to embed hidden data across image pixels with high imperceptibility.',
    technologies: ['Python', 'Steganography', 'Research'],
    image: '/projects/image-steg.png',
  },
]

export const CERTIFICATIONS = [
  {
    title: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Academy Graduate',
  },
  {
    title: 'AWS Academy Cloud Architecting',
    issuer: 'AWS Academy Graduate',
  },
  {
    title: 'Python Programming Mastery',
    issuer: 'Udemy',
  },
]

export const EDUCATION = [
  {
    school: 'Hooghly Engineering & Technology College (MAKAUT)',
    detail: 'B.Tech — Computer Science & Engineering',
    result: 'CGPA 7.37 (66.20%)',
    period: '2022 — 2026',
  },
  {
    school: 'Ramnagar Atul Vidyalaya (WBCHSE)',
    detail: 'Class XII — Higher Secondary',
    result: '91%',
    period: '2022',
  },
  {
    school: 'Khanakul Krishnavamini Balika Vidyalaya (WBBSE)',
    detail: 'Class X — Secondary',
    result: '86.57%',
    period: '2020',
  },
]
