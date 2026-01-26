'use client';

import { DoctrineCard } from '@/components/strategy/DoctrineCard';
import { Target, TrendingUp, ShieldCheck } from 'lucide-react';

export default function StrategyPage() {
    return (
        <div className="space-y-24 max-w-4xl pb-20">
            {/* Header: Directriz Central */}
            <header className="relative">
                <div className="absolute -left-12 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>
                <h2 className="text-xs font-bold tracking-[0.2em] text-zinc-500 mb-8 uppercase">Directriz Central</h2>
                <blockquote className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1]">
                    “La marca no necesita explicar. <br />
                    <span className="text-zinc-500">Necesita ocupar un lugar.</span>”
                </blockquote>
            </header>

            {/* Target Activo Section */}
            <section className="bg-zinc-900/40 border border-zinc-800 p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,255,147,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_3s_linear_infinite]"></div>

                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-emerald-500">
                            <Target className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-widest">Target Activo (Q1-2026)</span>
                        </div>
                        <h3 className="text-2xl text-white font-light">Dominancia de Nicho Estructural</h3>
                        <p className="text-zinc-400 font-light max-w-md">Establecer VARKO como el estándar de ingeniería para sistemas de control en el sector agroindustrial.</p>
                    </div>

                    <div className="flex gap-4">
                        <div className="text-center p-4 bg-black/40 border border-white/5 min-w-[100px]">
                            <TrendingUp className="w-5 h-5 text-emerald-500 mx-auto mb-2" />
                            <div className="text-2xl text-white font-light">12%</div>
                            <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Penetración</div>
                        </div>
                        <div className="text-center p-4 bg-black/40 border border-white/5 min-w-[100px]">
                            <ShieldCheck className="w-5 h-5 text-emerald-500 mx-auto mb-2" />
                            <div className="text-2xl text-white font-light">95%</div>
                            <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Retención</div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Posicionamiento */}
                <div className="space-y-6">
                    <h3 className="text-sm uppercase tracking-widest text-white border-b border-white/10 pb-2">Posicionamiento</h3>
                    <p className="text-lg text-zinc-400 font-light leading-relaxed">
                        No competimos por precio ni por características. Competimos por
                        <span className="text-white"> claridad estructural</span>.
                        El mercado está saturado de ruido; nosotros vendemos silencio y orden.
                    </p>
                </div>

                {/* Interactive Doctrine Matrix */}
                <div className="space-y-2">
                    <h3 className="text-sm uppercase tracking-widest text-white border-b border-white/10 pb-2 mb-6">Matriz de Doctrina</h3>

                    <DoctrineCard
                        number="01."
                        title="Nunca pedir perdón"
                        description="La disculpa es admisión de fallo estructural. La corrección inmediata es demostración de competencia y control. No te disculpes por el error, agradéceles por encontrarlo y soluciónalo."
                    />
                    <DoctrineCard
                        number="02."
                        title="Datos sobre opiniones"
                        description="La intuición es un bug cognitivo. Los datos son el patch. En VARKO no debatimos gustos, debatimos métricas. Si no se puede medir, no existe."
                    />
                    <DoctrineCard
                        number="03."
                        title="El diseño es función"
                        description="Si no vende, no es diseño, es decoración. Cada pixel debe tener un propósito estratégico. La belleza es la consecuencia inevitable de la función perfecta."
                    />
                    <DoctrineCard
                        number="04."
                        title="Silencio Visual"
                        description="En un mundo de gritos, el susurro es lo único que se escucha. Nuestra interfaz no demanda atención, la dirige. Menos elementos, más significado."
                    />
                </div>
            </div>
        </div>
    );
}
