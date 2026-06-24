'use client'

import Link from "next/link";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { projectsData } from "@/lib/projectsData";
import { IconArrowRight } from "@tabler/icons-react";

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

        {/* Bento Grid */}
        <BentoGrid className="max-w-7xl mx-auto">
          {projectsData.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <BentoGridItem
                title={project.title}
                description={
                  <div className="flex flex-col h-full justify-between">
                    <p className="mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-[#161616] text-[#e8ff47] text-xs rounded-md border border-[#222]">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 bg-[#161616] text-zinc-400 text-xs rounded-md border border-[#222]">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                }
                header={
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-black/20 to-transparent" />
                  </div>
                }
                icon={<IconArrowRight className="h-4 w-4 text-[#e8ff47]" />}
                className="h-full"
              />
            </Link>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}