'use client';

import { ArrowUpRight, CheckCircle2, Timer, Construction } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ProjectCardProps {
    slug: string;
    client: string;
    description: string;
    status: 'Activo' | 'Estrategia' | 'Finalizado';
    progress?: number;
    stack: string[];
    metric?: {
        label: string;
        value: string;
    };
}

export function ProjectCard({ slug, client, description, status, progress, stack, metric }: ProjectCardProps) {
    const getStatusConfig = (status: string) => {
        switch (status) {
            case 'Activo':
                return { icon: Construction, color: 'text-blue-400', border: 'border-blue-500/30' };
            case 'Estrategia':
                return { icon: Timer, color: 'text-purple-400', border: 'border-purple-500/30' };
            case 'Finalizado':
                return { icon: CheckCircle2, color: 'text-emerald-400', border: 'border-emerald-500/30' };
            default:
                return { icon: Construction, color: 'text-zinc-400', border: 'border-zinc-800' };
        }
    };

    const config = getStatusConfig(status);
    const Icon = config.icon;

    return (
        <Link
            href={`/app/projects/${slug}`}
            className="group relative block bg-zinc-900/30 border border-zinc-800 p-8 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900/50"
        >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Icon className={cn("w-4 h-4", config.color)} />
                        <span className={cn("text-[10px] uppercase tracking-widest font-medium", config.color)}>
                            {status}
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                        {client}
                    </h3>
                </div>
                {metric && (
                    <div className="text-right shrink-0 bg-white/5 p-3 px-4 border border-white/5">
                        <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">{metric.label}</p>
                        <p className="text-xl text-white font-mono">{metric.value}</p>
                    </div>
                )}
            </div>

            {/* Description */}
            <p className="text-lg text-zinc-400 font-light mb-8 max-w-2xl">
                {description}
            </p>

            {/* Footer / Progress */}
            <div className="space-y-6">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {stack.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 text-[10px] uppercase tracking-wider text-zinc-500 border border-zinc-800 bg-black/20">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Progress Bar (Only for ongoing projects) */}
                {progress !== undefined && (
                    <div className="space-y-2 pt-2">
                        <div className="flex justify-between text-[10px] uppercase tracking-widest text-zinc-500">
                            <span>Progreso del Proyecto</span>
                            <span>{progress}%</span>
                        </div>
                        <div className="h-1 w-full bg-zinc-800 overflow-hidden">
                            <div
                                className="h-full bg-blue-500 transition-all duration-1000 ease-out"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>
                )}
            </div>

            <div className="absolute top-8 right-8 text-zinc-700 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className="w-6 h-6" />
            </div>
        </Link>
    );
}
