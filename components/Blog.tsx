'use client'

const posts = [
  {
    id: 1,
    title: 'JS Promises with Real World Analogy',
    date: '2026',
    readTime: '8 min read',
    excerpt:
      'Learn JavaScript Promises through real-world analogies. Covers Promise, Promise.all(), Promise.race(), and Promise.any() in a beginner-friendly way.',
    color: '#e8ff47',
    link: 'https://karan2op.hashnode.dev/js-promises-with-real-world-analogy',
  },
  {
    id: 2,
    title: 'Mastering this in JavaScript',
    date: '2026',
    readTime: '7 min read',
    excerpt:
      'A practical guide to understanding the this keyword in JavaScript with real-world analogies and common use cases.',
    color: '#b8a1ff',
    link: 'https://karan2op.hashnode.dev/mastering-this-in-javascript',
  },
  {
    id: 3,
    title: 'Understanding How DNS Works',
    date: '2026',
    readTime: '6 min read',
    excerpt:
      'A beginner-friendly explanation of DNS and how domain names are translated into IP addresses behind the scenes.',
    color: '#4ecdc4',
    link: 'https://karan2op.hashnode.dev/understanding-how-dns-works',
  },
  {
    id: 4,
    title: 'A Beginner Friendly Guide to Browser Internals',
    date: '2026',
    readTime: '10 min read',
    excerpt:
      'Explore how browsers work internally, from parsing HTML and CSS to rendering pages and executing JavaScript.',
    color: '#ff6b6b',
    link: 'https://karan2op.hashnode.dev/a-beginner-friendly-guide-to-browser-internals',
  },
  {
    id: 5,
    title: 'Understanding How Git Internally Works',
    date: '2026',
    readTime: '9 min read',
    excerpt:
      'Learn the internal architecture of Git including commits, blobs, trees, hashes, and version control concepts.',
    color: '#f59e0b',
    link: 'https://karan2op.hashnode.dev/understanding-how-git-internally-works',
  },
  {
    id: 6,
    title: 'Mastering Arrow Functions in JS',
    date: '2026',
    readTime: '5 min read',
    excerpt:
      'A deep dive into arrow functions, lexical this binding, syntax differences, and best practices.',
    color: '#22c55e',
    link: 'https://karan2op.hashnode.dev/mastering-arrow-functions-in-js',
  },
]

export default function Blog() {
  return (
    <section
      id="blog"
      className="py-32 px-6 border-t  border-[#1e1e1e]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-px bg-[#e8ff47]" />

            <span className="text-[16px] font-mono tracking-[0.3em] text-[#e8ff47] uppercase">
              Writing
            </span>
          </div>

          <h2 className="font-display text-[clamp(40px,6vw,80px)] leading-none text-white tracking-tight">
            Blog
          </h2>

          <p className="mt-4 text-[#666] max-w-xl text-sm">
            Thoughts on web development, design systems, architecture,
            performance and everything I'm learning along the way.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group relative overflow-hidden rounded-3xl border border-[#1e1e1e] bg-[#111] transition-all duration-500 hover:-translate-y-2 hover:border-[#333]"
            >
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10"
                style={{
                  background: post.color,
                }}
              />

              <div className="relative p-7 flex flex-col h-full">
                {/* Top */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{
                      backgroundColor: post.color,
                    }}
                  />

                  <span className="text-[10px] font-mono text-[#555] uppercase tracking-widest">
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white leading-snug mb-4 transition-colors duration-300 group-hover:text-[#e8ff47]">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#666] leading-relaxed flex-1 mb-8">
                  {post.excerpt}
                </p>

                {/* Footer */}
               <div className="flex items-center justify-between border-t border-[#1a1a1a] pt-5">
  <span className="text-[11px] text-[#555] font-mono">
    {post.date}
  </span>

  <a
    href={post.link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-xl border border-[#222] px-4 py-2 text-xs text-white transition-all duration-300 hover:border-white hover:bg-white/5"
  >
    Read Blog

    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </a>
</div>
              </div>

              {/* Bottom Accent */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                style={{
                  backgroundColor: post.color,
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}