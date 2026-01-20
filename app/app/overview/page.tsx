import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Overview",
    description: "Panel de control estratégico y estado del sistema.",
};

export default function OverviewPage() {
    return (
        <div className="space-y-12">
            <header className="space-y-4">
                <h2 className="text-4xl font-light tracking-tight text-white">OVERVIEW</h2>
                <p className="text-muted-foreground max-w-2xl text-lg font-light">
                    Sistema de control estratégico. No es marketing, es estructura.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Active Project Card */}
                <div className="bg-zinc-900/50 border border-zinc-800 p-6 space-y-6">
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                            <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Proyecto Activo</h3>
                            <p className="text-xl text-white font-light">CARNES DEL PIEDEMONTE</p>
                        </div>
                        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between text-xs text-zinc-500">
                            <span>Progreso</span>
                            <span>17%</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[17%]"></div>
                        </div>
                    </div>
                </div>

                {/* Latest Insight Card */}
                <div className="bg-zinc-900/50 border border-zinc-800 p-6 space-y-6 relative group overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-500/20 transition-colors duration-700"></div>

                    <div className="space-y-1 relative z-10">
                        <h3 className="text-xs font-medium uppercase tracking-widest text-amber-500/80">Último Insight</h3>
                        <Link href="/app/insights/automation-without-fragility" className="block group-hover:opacity-80 transition-opacity">
                            <p className="text-xl text-white font-light leading-snug">
                                Automation Without Fragility
                            </p>
                        </Link>
                    </div>

                    <p className="text-sm text-zinc-400 font-light line-clamp-2 relative z-10">
                        La automatización mal diseñada crea sistemas rápidos… pero frágiles. Funcionan hasta que algo cambia.
                    </p>

                    <Link
                        href="/app/insights/automation-without-fragility"
                        className="inline-flex items-center gap-2 text-xs text-white uppercase tracking-widest border-b border-transparent hover:border-white transition-colors pb-0.5 relative z-10"
                    >
                        Leer Artículo
                        <ArrowRight className="w-3 h-3" />
                    </Link>
                </div>

                {/* System Status Card */}
                <div className="bg-zinc-900/50 border border-zinc-800 p-6 space-y-6">
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                            <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Estado del Sistema</h3>
                            <p className="text-xl text-white font-light">Operativo</p>
                        </div>
                        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-2">
                        <div className="space-y-1">
                            <p className="text-xs text-zinc-500 uppercase">Batch</p>
                            <p className="text-sm text-zinc-300">Finalizado</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-zinc-500 uppercase">Uptime</p>
                            <p className="text-sm text-zinc-300">99.9%</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
