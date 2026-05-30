export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e1e] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#e8ff47]" />
              <span className="text-[16px] font-mono tracking-[0.3em] text-[#e8ff47] uppercase">
                Contact
              </span>
            </div>

            <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-none text-white mb-6">
              Let's Connect
            </h2>

            <p className="text-[#666] max-w-md leading-relaxed">
              I'm always interested in discussing web development,
              opportunities, collaborations, and innovative ideas.
              Feel free to reach out.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div>
              <p className="text-[10px] font-mono tracking-widest uppercase text-[#555] mb-2">
                Email
              </p>

              <a
                href="mailto:knagpal119@gmail.com"
                className="text-white hover:text-[#e8ff47] transition-colors"
              >
                knagpal119@gmail.com
              </a>
            </div>

            <div>
              <p className="text-[10px] font-mono tracking-widest uppercase text-[#555] mb-2">
                Phone
              </p>

              <a
                href="tel:+917015833952"
                className="text-white hover:text-[#e8ff47] transition-colors"
              >
                +91 70158 33952
              </a>
            </div>

            <div>
              <p className="text-[10px] font-mono tracking-widest uppercase text-[#555] mb-3">
                Socials
              </p>

              <div className="flex gap-4">
                <a
                  href="https://github.com/karan2opp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#e8ff47] transition-colors"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/karan-kumar2opp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#e8ff47] transition-colors"
                >
                  LinkedIn
                </a>

                <a
                  href="https://x.com/KaranNagpa47270"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#e8ff47] transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#1a1a1a] flex flex-col sm:flex-row justify-between items-center gap-4">
          
          <p className="text-[11px] font-mono text-[#444]">
            © 2026 Karan Kumar. Built with Next.js & Tailwind CSS.
          </p>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#4ecdc4] animate-pulse" />

            <span className="text-[10px] font-mono text-[#555] uppercase tracking-widest">
              Open to Opportunities
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}