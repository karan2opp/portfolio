'use client'

import { useState } from 'react';

export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate a network request
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <footer className="border-t border-[#1e1e1e] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-16">
          
          {/* Left Column - Details */}
          <div className="flex flex-col justify-between">
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

              <p className="text-[#666] max-w-md leading-relaxed mb-12">
                I'm always interested in discussing web development,
                opportunities, collaborations, and innovative ideas.
                Feel free to reach out.
              </p>
            </div>

            <div className="space-y-8">
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
                <p className="text-[10px] font-mono tracking-widest uppercase text-[#555] mb-3">
                  Socials
                </p>
                <div className="flex items-center gap-5">
                  <a
                    href="https://github.com/karan2opp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#888] hover:text-[#e8ff47] transition-colors"
                    aria-label="GitHub"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/karan-kumar2opp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#888] hover:text-[#e8ff47] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/KaranNagpa47270"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#888] hover:text-[#e8ff47] transition-colors"
                    aria-label="Twitter"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#111] border border-[#1e1e1e] p-6 sm:p-8 rounded-2xl w-full">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-[11px] font-mono uppercase text-[#888] mb-2">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#e8ff47] focus:ring-1 focus:ring-[#e8ff47] transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[11px] font-mono uppercase text-[#888] mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#e8ff47] focus:ring-1 focus:ring-[#e8ff47] transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-mono uppercase text-[#888] mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  required
                  className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#e8ff47] focus:ring-1 focus:ring-[#e8ff47] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#e8ff47] text-black font-semibold text-sm rounded-lg px-4 py-3 hover:bg-[#d4e63b] transition-colors disabled:opacity-50 mt-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#1a1a1a] flex flex-col sm:flex-row justify-between items-center gap-4">
          
          <p className="text-[11px] font-mono text-[#444]">
            © 2026 Karan Kumar.
          </p>

          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#4ecdc4] animate-pulse" />
            <span className="text-xs font-mono text-[#888] uppercase tracking-widest">
              Open to Opportunities
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}