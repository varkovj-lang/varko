'use client';

import { ProjectCard } from '@/components/projects/ProjectCard';
import { PROJECTS_DATA } from '@/lib/projects-data';

export default function ProjectsPage() {
    return (
        <div className="space-y-16 pb-20">
            <header>
                <h2 className="text-4xl font-light tracking-tight text-white mb-2">PROJECTS</h2>
                <div className="h-px w-24 bg-white/20"></div>
                <p className="mt-4 text-zinc-500 max-w-2xl font-light">
                    Ingeniería aplicada a problemas de negocio. Metodología basada en resultados medibles y estructura escalable.
                </p>
            </header>

            <div className="grid grid-cols-1 gap-8">
                {PROJECTS_DATA.map((project, idx) => (
                    <ProjectCard
                        key={idx}
                        {...project}
                    />
                ))}
            </div>
        </div>
    );
}
