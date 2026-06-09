'use client'

const projects = [
  {
    id: '01',
    title: 'Alhnkar',
    category: 'E-Commerce',
    year: '2025',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    description:
      'A modern clothing e-commerce platform built using the MERN stack. Features authentication, shopping cart, order management, and responsive design.',
    image: '/Alhnkar.png',
    github: 'https://github.com/yourusername/alhnkar',
    live: 'https://alhnkar.vercel.app',
    color: '#e8ff47',
  },
  {
    id: '02',
    title: 'Local Pro',
    category: 'Service Marketplace',
    year: '2025',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    description:
      'A platform where users can discover and book nearby services. Includes bookings, authentication, and provider dashboards.',
    image: '/localpro.png',
    github: 'https://github.com/karan2opp/Local-Services-Booking-platform',
    live: 'https://local-services-booking-platform-1.onrender.com/',
    color: '#ff6b6b',
  },
  {
    id: '03',
    title: 'Katuh',
    category: 'OIDC Authentication',
    year: '2025',
    tags: ['OIDC', 'MongoDB', 'Express', 'React', 'Node.js'],
    description:
      'An OpenID Connect authentication platform built with the MERN stack featuring secure authentication and authorization.',
    image: '/oidc.png',
    github: 'https://github.com/yourusername/katuh',
    live: 'https://katuh.vercel.app',
    color: '#b8a1ff',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 border-t border-[#1e1e1e]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-[#e8ff47]" />

            <span className="text-[16px] font-mono tracking-[0.3em] uppercase text-[#e8ff47]">
              Things I've built
            </span>
          </div>

          <h2 className="font-display text-[clamp(40px,6vw,80px)] leading-none text-white">
            Projects
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col h-full relative overflow-hidden rounded-3xl border border-[#1e1e1e] bg-[#0f0f0f] transition-all duration-500 hover:-translate-y-3 hover:border-[#333]"
            >
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                style={{
                  background: project.color,
                }}
              />

              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div
                  className="absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-mono tracking-widest"
                  style={{
                    backgroundColor: `${project.color}20`,
                    color: project.color,
                    border: `1px solid ${project.color}40`,
                  }}
                >
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">
                      {project.title}
                    </h3>

                    <span className="text-xs text-zinc-500">
                      {project.year}
                    </span>
                  </div>

                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:rotate-45"
                    style={{
                      backgroundColor: `${project.color}15`,
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={project.color}
                      strokeWidth="2"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-zinc-400 mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#222] bg-[#161616] px-3 py-1 text-[11px] text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-xl bg-white py-2.5 text-center text-xs font-semibold text-black transition-all duration-300 hover:bg-[#e8ff47]"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-xl border border-[#222] py-2.5 text-center text-xs font-semibold text-white transition-all duration-300 hover:border-white"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Bottom Accent */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                style={{
                  backgroundColor: project.color,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}