import { projectsData } from "@/lib/projectsData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { IconArrowLeft, IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.id,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#e8ff47] selection:text-black py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#e8ff47] transition-colors mb-12"
        >
          <IconArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-px bg-[#e8ff47]" />
            <span className="text-sm font-mono tracking-widest uppercase text-[#e8ff47]">
              {project.category}
            </span>
            <span className="text-sm font-mono tracking-widest text-zinc-500 ml-auto">
              {project.year}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-sans font-bold mb-6 text-zinc-100">
            {project.title}
          </h1>

          <p className="text-xl text-zinc-400 leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-[#161616] text-zinc-300 text-sm rounded-full border border-[#222]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-[#e8ff47] transition-colors"
              >
                <IconExternalLink className="w-5 h-5" />
                Live Project
              </a>
            )}
            {project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#161616] text-white border border-[#222] font-semibold rounded-xl hover:border-white transition-colors"
              >
                <IconBrandGithub className="w-5 h-5" />
                Source Code
              </a>
            )}
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-16 border border-[#222]">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details / Bullets */}
        {project.bullets && project.bullets.length > 0 && (
          <div className="mb-20">
            <h2 className="text-2xl font-sans font-bold mb-8 flex items-center gap-4 text-zinc-100">
              <div className="w-8 h-px bg-[#e8ff47]" />
              Key Highlights & Achievements
            </h2>
            
            <div className="space-y-6">
              {project.bullets.map((bullet, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-[#0f0f0f] border border-[#1e1e1e] rounded-2xl hover:border-[#333] transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#e8ff47] mt-2 flex-shrink-0" />
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Bottom Back Button */}
        <div className="flex justify-center mt-20 pb-10 border-t border-[#1e1e1e] pt-10">
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#161616] text-white font-semibold rounded-full border border-[#222] hover:border-[#e8ff47] hover:text-[#e8ff47] transition-all"
          >
            <IconArrowLeft className="w-5 h-5" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
