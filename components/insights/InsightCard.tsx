'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ShareArticle } from './ShareArticle';

interface InsightCardProps {
    date: string;
    category: string;
    title: string;
    description: string;
    href?: string;
    className?: string;
}

export function InsightCard({ date, category, title, description, href = '#', className }: InsightCardProps) {
    return (
        <div
            className={cn(
                "group flex flex-col justify-between p-6 bg-card border border-border hover:border-zinc-700 transition-all duration-300 min-h-[280px]",
                className
            )}
        >
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[10px] text-muted-foreground uppercase tracking-widest font-mono">
                        <span>{date}</span>
                        <div className="h-px w-6 bg-border group-hover:bg-zinc-700 transition-colors"></div>
                        <span className="text-zinc-400 group-hover:text-white transition-colors">{category}</span>
                    </div>

                    <div onClick={(e) => e.stopPropagation()}>
                        <ShareArticle
                            title={title}
                            text={description}
                            url={href}
                        />
                    </div>
                </div>

                <Link href={href} className="block space-y-3">
                    <h3 className="text-xl font-medium text-white leading-snug group-hover:text-zinc-300 transition-colors">
                        {title}
                    </h3>

                    <p className="text-sm text-muted-foreground font-light leading-relaxed line-clamp-3">
                        {description}
                    </p>
                </Link>
            </div>

            <Link
                href={href}
                className="pt-6 mt-auto flex justify-between items-end border-t border-transparent group-hover:border-border/50 transition-colors"
            >
                <span className="text-[10px] uppercase tracking-widest text-zinc-600 group-hover:text-white transition-colors">
                    Leer Artículo
                </span>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors transform group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
            </Link>
        </div>
    );
}
