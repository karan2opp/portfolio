'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 20
      const y = (clientY / window.innerHeight - 0.5) * 20

      el.style.setProperty('--mx', `${x}px`)
      el.style.setProperty('--my', `${y}px`)
    }

    window.addEventListener('mousemove', onMove)

    return () => {
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <section
      id="about"
      ref={heroRef}
      className="relative min-h-screen grid-bg flex items-center overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 30% 60%, rgba(232,255,71,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Floating Orb */}
      <div
        className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-5"
        style={{
          background:
            'radial-gradient(circle, #e8ff47 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* Tag */}
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="w-5 h-px bg-[#e8ff47]" />

              <span className="text-[16px] font-mono tracking-[0.3em] text-[#e8ff47] uppercase">
                Full Stack Developer
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-[clamp(50px,8vw,100px)] leading-none tracking-tight text-white mb-8">
              Hi, I'm
              <br />
              <span className="text-[#e8ff47]">
                Karan Kumar
              </span>
              <br />
              Building
              <br />
              <span className="text-[#555]">
                Modern Web Apps
              </span>
            </h1>

            {/* Description */}
            <p className="text-[#888] text-base leading-relaxed max-w-md mb-12">
              Full Stack Developer passionate about building scalable web
              applications, solving real-world problems and creating
              exceptional user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-white text-black text-xs font-mono tracking-widest uppercase rounded-full hover:bg-[#e8ff47] transition-all duration-300"
              >
                View Projects
              </a>

             <a
  href="/Karan_Resume.pdf"
  download
  className="px-6 py-3 border border-[#333] text-white text-xs font-mono tracking-widest uppercase rounded-full hover:border-white transition-all duration-300"
>
  Resume
</a>
            </div>

          
          </div>

            <div className='-translate-y-0 '>
              <img className='rounded-lg'  src='/profile.jpeg' />
            </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="text-[9px] font-mono tracking-[0.3em] text-[#666] uppercase">
          Scroll
        </div>

        <div className="w-px h-8 bg-gradient-to-b from-[#666] to-transparent" />
      </div>
    </section>
  )
}