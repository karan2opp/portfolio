'use client'

import { useState } from 'react';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: 'JS Promises with Real World Analogy',
    date: '2026',
    excerpt: 'Learn JavaScript Promises through real-world analogies. Covers Promise, Promise.all(), Promise.race(), and Promise.any() in a beginner-friendly way.',
    link: 'https://karan2op.hashnode.dev/js-promises-with-real-world-analogy',
  },
  {
    id: 2,
    title: 'Mastering this in JavaScript',
    date: '2026',
    excerpt: 'A practical guide to understanding the this keyword in JavaScript with real-world analogies and common use cases.',
    link: 'https://karan2op.hashnode.dev/mastering-this-in-javascript',
  },
  {
    id: 3,
    title: 'Understanding How DNS Works',
    date: '2026',
    excerpt: 'A beginner-friendly explanation of DNS and how domain names are translated into IP addresses behind the scenes.',
    link: 'https://karan2op.hashnode.dev/understanding-how-dns-works',
  },
  {
    id: 4,
    title: 'A Beginner Friendly Guide to Browser Internals',
    date: '2026',
    excerpt: 'Explore how browsers work internally, from parsing HTML and CSS to rendering pages and executing JavaScript.',
    link: 'https://karan2op.hashnode.dev/a-beginner-friendly-guide-to-browser-internals',
  },
  {
    id: 5,
    title: 'Understanding How Git Internally Works',
    date: '2026',
    excerpt: 'Learn the internal architecture of Git including commits, blobs, trees, hashes, and version control concepts.',
    link: 'https://karan2op.hashnode.dev/understanding-how-git-internally-works',
  },
  {
    id: 6,
    title: 'Mastering Arrow Functions in JS',
    date: '2026',
    excerpt: 'A deep dive into arrow functions, lexical this binding, syntax differences, and best practices.',
    link: 'https://karan2op.hashnode.dev/mastering-arrow-functions-in-js',
  },
]

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedPosts = showAll || searchQuery ? filteredPosts : filteredPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20 px-6 border-t border-[#1e1e1e] bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        
        {/* Header and Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h2 className="text-2xl font-sans font-bold text-white tracking-tight">
            More Posts
          </h2>
          <input 
            type="text"
            placeholder="Search blogs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-64 bg-[#1a1a1a] border border-[#222] rounded-lg px-4 py-2.5 text-sm text-zinc-300 focus:outline-none focus:border-[#e8ff47] focus:ring-1 focus:ring-[#e8ff47] transition-all"
          />
        </div>

        {/* Blog List */}
        <div className="flex flex-col">
          {displayedPosts.length > 0 ? displayedPosts.map((post) => (
            <div key={post.id} className="border-b border-[#1e1e1e] last:border-0 py-2">
              <Link 
                href={post.link}
                target="_blank"
                className="group flex flex-row items-center justify-between gap-4 p-4 rounded-xl transition-colors hover:bg-[#111]"
              >
                <div className="space-y-1.5 flex-1 pr-4">
                  <h3 className="text-[17px] font-sans font-medium text-zinc-100 group-hover:text-[#e8ff47] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-zinc-400 text-[14px] leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="text-zinc-500 text-[13px] pt-1">
                    {post.date}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="hidden sm:inline-flex items-center text-xs font-medium px-4 py-2 rounded-full border border-[#333] text-zinc-400 group-hover:border-[#e8ff47] group-hover:text-[#e8ff47] transition-all">
                    Read Article
                  </span>
                  <img 
                    src="/profile1.png" 
                    alt="Author" 
                    className="w-10 h-10 rounded-full border border-[#333] group-hover:border-[#e8ff47] transition-colors object-cover"
                  />
                </div>
              </Link>
            </div>
          )) : (
            <div className="py-10 text-center text-zinc-500 text-sm">
              No blogs found matching "{searchQuery}"
            </div>
          )}
        </div>

        {/* Show all / less button */}
        {!searchQuery && filteredPosts.length > 3 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-[#333] text-zinc-300 text-sm font-medium hover:bg-[#111] hover:text-white transition-all cursor-pointer"
            >
              {showAll ? 'Show less' : 'Show all blogs'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}