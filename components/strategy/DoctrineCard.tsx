'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Plus, Minus } from 'lucide-react';

interface DoctrineCardProps {
    number: string;
    title: string;
    description: string;
}

export function DoctrineCard({ number, title, description }: DoctrineCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="group cursor-pointer border-b border-white/10 py-6 transition-colors hover:border-white/30"
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div className="flex items-start justify-between">
                <div className="flex items-baseline gap-6">
                    <span className="text-xs font-mono text-emerald-500/80">{number}</span>
                    <h3 className={cn("text-xl md:text-2xl font-light text-zinc-300 group-hover:text-white transition-colors uppercase tracking-wide", isOpen && "text-white")}>
                        {title}
                    </h3>
                </div>
                <div className="shrink-0 text-zinc-500 group-hover:text-white transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
            </div>

            <div className={cn("grid transition-all duration-500 ease-in-out pl-[2.6rem]", isOpen ? "grid-rows-[1fr] opacity-100 pt-4" : "grid-rows-[0fr] opacity-0")}>
                <div className="overflow-hidden">
                    <p className="text-lg text-zinc-500 font-light leading-relaxed max-w-xl border-l border-emerald-500/20 pl-4">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
