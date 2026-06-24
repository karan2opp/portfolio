'use client'

import { Timeline } from '@/components/ui/timeline'

const experience = [
  {
    company: 'Hartron Skill Center',
    role: 'Programming Instructor',
    period: '2025 — Present',
    type: 'Full-time',
    location: 'Pehowa, Haryana',
    description:
      'Teaching and mentoring students in the fundamentals of programming. Guiding beginners through their first steps in software development and helping them build a strong foundation in coding and problem-solving.',
    achievements: [
      'Teaching HTML, CSS, JavaScript, C, C++, and Python',
      'Mentored students entering the world of programming',
      'Conducted hands-on coding sessions and practical projects',
      'Helping students develop problem-solving and logical thinking skills',
    ],
    color: '#e8ff47',
  },
]

const sliderSkills = [
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
  { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis/FF4438' },
  { name: 'Drizzle', icon: 'https://cdn.simpleicons.org/drizzle/C5F74F' },
  { name: 'Express', icon: 'https://cdn.simpleicons.org/express/white' },
  { name: 'JWT', icon: 'https://cdn.simpleicons.org/jsonwebtokens/white' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/white' },
]

const SkillsList = ({ className = '' }: { className?: string }) => (
  <div className={`pt-12 ${className}`}>
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-5 h-px bg-[#e8ff47]" />
        <span className="text-[16px] font-mono tracking-[0.3em] text-[#e8ff47] uppercase">Technologies</span>
      </div>
      <h2 className="font-display text-[clamp(32px,5vw,64px)] leading-none text-white tracking-tight">
        Skills
      </h2>
    </div>
    
    <div className="relative flex w-full overflow-hidden rounded-2xl border border-[#1e1e1e] bg-[#0f0f0f] py-6 group">
      <div className="absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-[#0f0f0f] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-[#0f0f0f] to-transparent pointer-events-none" />
      
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[1, 2].map((i) => (
          <div key={i} className="flex w-max gap-8 px-4">
            {sliderSkills.map((skill, index) => (
              <div key={`${i}-${index}`} className="flex flex-col items-center justify-center gap-3 min-w-[64px]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#1e1e1e] bg-[#141414] transition-all hover:-translate-y-1 hover:border-[#333]">
                  <img src={skill.icon} alt={skill.name} className="h-7 w-7 object-contain opacity-80 transition-opacity group-hover:opacity-100" />
                </div>
                <span className="font-mono text-[11px] text-zinc-300">{skill.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default function Experience() {
  const timelineData = experience.map((exp) => ({
    title: exp.period,
    content: (
      <div className="bg-[#111] rounded-2xl p-8 border border-[#1e1e1e] shadow-xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8 pb-8 border-b border-[#1e1e1e]">
          <div>
            <div
              className="text-[16px] font-mono tracking-[0.3em] uppercase mb-2"
              style={{ color: exp.color }}
            >
              {exp.company}
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-white tracking-tight mb-1">
              {exp.role}
            </h3>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-[10px] font-mono text-[#555] border border-[#222] rounded px-2 py-0.5">
                {exp.type}
              </span>
              <span className="text-[10px] font-mono text-[#555]">
                📍 {exp.location}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-[#888] leading-relaxed mb-8 text-sm md:text-base">
          {exp.description}
        </p>

        {/* Achievements */}
        <div>
          <div className="text-[10px] font-mono tracking-widest text-[#444] uppercase mb-4">
            Key Achievements
          </div>
          <ul className="space-y-3">
            {exp.achievements.map((achievement, j) => (
              <li key={j} className="flex items-start gap-3">
                <div
                  className="w-1 h-1 rounded-full mt-2 shrink-0"
                  style={{ background: exp.color }}
                />
                <span className="text-[#777] text-sm">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }));

  return (
    <section id="experience" className="border-t border-[#1e1e1e] bg-[#0d0d0d] overflow-hidden">
      <div className="max-w-7xl mx-auto pt-20 px-6">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-px bg-[#e8ff47]" />
            <span className="text-[16px] font-mono tracking-[0.3em] text-[#e8ff47] uppercase">Career</span>
          </div>
          <h2 className="font-display text-[clamp(40px,6vw,80px)] leading-none text-white tracking-tight">
            Experience
          </h2>
        </div>
      </div>
      
      {/* Aceternity Timeline */}
      <Timeline data={timelineData} />

      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Skills - Full Width */}
        <SkillsList className="mt-12" />
      </div>
    </section>
  )
}
