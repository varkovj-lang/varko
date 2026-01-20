import Link from 'next/link';
// import { Button } from '@/components/ui/button'; // Unused
import { ArrowRight } from 'lucide-react';

interface FeaturedInsightProps {
    date: string;
    category: string;
    title: string;
    description: string;
    href?: string;
}

export function FeaturedInsight({ date, category, title, description, href = '#' }: FeaturedInsightProps) {
    return (
        <Link href={href} className="relative block group cursor-pointer overflow-hidden bg-zinc-900/20 border border-zinc-800 p-8 md:p-12 hover:border-zinc-700 transition-colors duration-500">
            {/* Background Gradient Effect */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/[0.04] transition-colors duration-700"></div>

            <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-4 text-xs text-zinc-500 uppercase tracking-widest font-mono">
                    <span className="text-emerald-500/80">Featured</span>
                    <div className="h-px w-8 bg-zinc-800"></div>
                    <span>{date}</span>
                    <div className="h-px w-8 bg-zinc-800"></div>
                    <span className="text-zinc-300">{category}</span>
                </div>

                <div className="space-y-6 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-light text-white leading-tight tracking-tight">
                        {title}
                    </h2>
                    <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-2xl">
                        {description}
                    </p>
                </div>

                <div className="pt-4 flex items-center gap-2 text-sm text-white uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                    <span>Leer Análisis Completo</span>
                    <ArrowRight className="w-4 h-4" />
                </div>
            </div>
        </Link>
    );
}
