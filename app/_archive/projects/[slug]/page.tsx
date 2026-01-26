'use client';

import { use } from 'react';
import { PROJECTS_DATA } from '@/lib/projects-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Timer, Construction, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const project = PROJECTS_DATA.find(p => p.slug === slug);

    if (!project) {
        notFound();
    }

    const getStatusConfig = (status: string) => {
        switch (status) {
            case 'Activo':
                return { icon: Construction, color: 'text-blue-400', bg: 'bg-blue-500/10' };
            case 'Estrategia':
                return { icon: Timer, color: 'text-purple-400', bg: 'bg-purple-500/10' };
            case 'Finalizado':
                return { icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-500/10' };
            default:
                return { icon: Construction, color: 'text-zinc-400', bg: 'bg-zinc-500/10' };
        }
    };

    const config = getStatusConfig(project.status);
    const StatusIcon = config.icon;

    return (
        <article className="max-w-4xl mx-auto pb-20 space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Navigation */}
            <nav>
                <Link
                    href="/app/projects"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Regresar a Proyectos
                </Link>
            </nav>

            {/* Hero Section */}
            <header className="space-y-8">
                <div className="flex items-center gap-3">
                    <div className={cn("px-3 py-1 text-[10px] uppercase tracking-widest font-bold border border-white/10 flex items-center gap-2", config.bg, config.color)}>
                        <StatusIcon className="w-3 h-3" />
                        {project.status}
                    </div>
                    {project.progress !== undefined && (
                        <div className="text-[10px] uppercase tracking-widest text-zinc-500">
                            Progreso: {project.progress}%
                        </div>
                    )}
                </div>

                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none uppercase">
                        {project.client}
                    </h1>
                    <p className="text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 pt-4">
                    {project.stack.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 text-xs uppercase tracking-widest text-zinc-100 bg-white/5 border border-white/10 font-mono">
                            {tech}
                        </span>
                    ))}
                </div>
            </header>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12 border-t border-white/5">
                {/* Evolution Narrative */}
                <div className="space-y-16">
                    <section className="space-y-6">
                        <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-bold flex items-center gap-3">
                            <span className="w-8 h-px bg-zinc-800"></span>
                            01. La Inercia (Status Quo)
                        </h2>
                        <p className="text-xl text-zinc-300 font-light leading-relaxed">
                            {project.content.chaos}
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-bold flex items-center gap-3">
                            <span className="w-8 h-px bg-zinc-800"></span>
                            02. La Ingeniería (Estructura)
                        </h2>
                        <ul className="space-y-4">
                            {project.content.structure.map((item, idx) => (
                                <li key={idx} className="flex gap-4 items-start text-zinc-400 font-light group">
                                    <ArrowRight className="w-5 h-5 text-emerald-500/40 mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
                                    <span className="text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                {/* Impact / Results */}
                <div className="space-y-12 bg-white/5 p-8 border border-white/10 h-fit">
                    <header className="space-y-2">
                        <h2 className="text-xs uppercase tracking-[0.3em] text-emerald-500 font-bold">
                            03. La Velocidad (Orden)
                        </h2>
                        <div className="h-px w-12 bg-emerald-500/30"></div>
                    </header>

                    <p className="text-2xl text-white font-light leading-relaxed">
                        {project.content.velocity}
                    </p>

                    {project.metric && (
                        <div className="pt-8 border-t border-white/5 divide-y divide-white/5 font-mono">
                            <div className="py-4 flex justify-between items-baseline">
                                <span className="text-xs text-zinc-500 uppercase">{project.metric.label}</span>
                                <span className="text-3xl text-white">{project.metric.value}</span>
                            </div>
                        </div>
                    )}

                    <div className="pt-8">
                        <Link
                            href="/app/contact"
                            className="w-full inline-flex items-center justify-center gap-2 border border-white text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                        >
                            Solicitar estructura similar
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}
