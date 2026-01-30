import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ShareArticle } from './ShareArticle';

interface FeaturedInsightProps {
    date: string;
    category: string;
    title: string;
    description: string;
    href?: string;
}

export function FeaturedInsight({ date, category, title, description, href = '#' }: FeaturedInsightProps) {
    return (
        <div className="relative group bg-zinc-900/20 border border-zinc-800 hover:border-zinc-700 transition-colors duration-500 overflow-hidden">
            {/* Background Gradient Effect */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/[0.04] transition-colors duration-700 pointer-events-none"></div>

            <div className="relative z-10 p-8 md:p-12 space-y-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-zinc-500 uppercase tracking-widest font-mono">
                        <span className="text-emerald-500/80">Featured</span>
                        <div className="h-px w-8 bg-zinc-800"></div>
                        <span>{date}</span>
                        <div className="h-px w-8 bg-zinc-800"></div>
                        <span className="text-zinc-300">{category}</span>
                    </div>

                    <div onClick={(e) => e.stopPropagation()}>
                        <ShareArticle
                            title={title}
                            text={description}
                            url={href}
                        />
                    </div>
                </div>

                <Link href={href} className="block space-y-6 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-light text-white leading-tight tracking-tight group-hover:text-emerald-400 transition-colors duration-500">
                        {title}
                    </h2>
                    <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-2xl">
                        {description}
                    </p>

                    <div className="pt-4 flex items-center gap-2 text-sm text-white uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                        <span>Leer Análisis Completo</span>
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </Link>
            </div>
        </div>
    );
}
