'use client'
import { useState } from 'react'

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

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript','Tailwind', 'Zustand',] },
  { category: 'Backend', items: ['Node.js', 'Prisma', 'PostgreSQL', 'Redis', 'MongoDB','Express'] },
  { category: 'Tools', items: ['Git', 'Github'] },
]

export default function Experience() {
  const [active, setActive] = useState(0)

  return (
    <section id="experience" className="py-20 px-6 border-t border-[#1e1e1e] bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-px bg-[#e8ff47]" />
            <span className="text-[16px] font-mono tracking-[0.3em] text-[#e8ff47] uppercase">Career</span>
          </div>
          <h2 className="font-display text-[clamp(40px,6vw,80px)] leading-none text-white tracking-tight">
            Experience
          </h2>
        </div>

        <div className="grid lg:grid-cols-[280px,1fr] gap-12">
          {/* Company list */}
          <div className="space-y-1">
            {experience.map((exp, i) => (
              <button
                key={exp.company}
                onClick={() => setActive(i)}
                className={`w-full text-left px-4 py-4 rounded-xl transition-all duration-300 group ${
                  active === i ? 'bg-[#1a1a1a]' : 'hover:bg-[#141414]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className="font-body font-medium text-sm transition-colors duration-200"
                    style={{ color: active === i ? exp.color : '#888' }}
                  >
                    {exp.company}
                  </span>
                  {active === i && (
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: exp.color }} />
                  )}
                </div>
                <div className="text-[11px] font-mono text-[#444] tracking-wider">
                  {exp.period}
                </div>
              </button>
            ))}

            {/* Skills */}
            <div className="pt-8 mt-8 border-t border-[#1e1e1e]">
              <div className="text-[16px] font-mono tracking-widest text-[#444] uppercase mb-4">
                Skills
              </div>
              {skills.map((group) => (
                <div key={group.category} className="mb-4">
                  <div className="text-[12px] font-mono text-[#555] mb-2">{group.category}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="text-[12px] font-mono text-[#666] px-2 py-1 rounded border border-[#222] tag-hover"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <div className="bg-[#111] rounded-2xl p-8 border border-[#1e1e1e]">
            {experience.map((exp, i) => (
              <div
                key={exp.company}
                className={`transition-all duration-400 ${
                  active === i ? 'block' : 'hidden'
                }`}
              >
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
                  <div className="text-right">
                    <div className="font-mono text-sm text-[#555]">{exp.period}</div>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
