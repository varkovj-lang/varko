import Link from 'next/link';
import { ArrowLeft, Cpu, Zap, BarChart3, ShieldCheck, Layers, Workflow, Network } from 'lucide-react';
import { ShareArticle } from '@/components/insights/ShareArticle';

export default function ElSistemaVarkoPage() {
    return (
        <article className="max-w-4xl mx-auto space-y-16 pb-32 animate-in fade-in duration-1000">
            {/* Header Navigation */}
            <header className="space-y-10">
                <div className="flex items-center justify-between">
                    <Link
                        href="/insights"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-white transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Volver a Insights
                    </Link>

                    <ShareArticle
                        title="El Sistema VARKO"
                        text="Cómo se construyen máquinas digitales que no se rompen cuando el negocio crece."
                        url="/insights/el-sistema-varko"
                    />
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-4 text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-mono">
                        <span className="text-emerald-500">Filosofía de Ingeniería</span>
                        <div className="h-px w-12 bg-zinc-800"></div>
                        <span>29 Ene, 2026</span>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-extralight text-white leading-[1.1] tracking-tight">
                        El Sistema <span className="font-normal italic">VARKO</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed">
                        Cómo se construyen máquinas digitales que no se rompen cuando el negocio crece.
                    </p>
                </div>
            </header>

            {/* Hero Image / Design Element */}
            <div className="relative aspect-[21/9] w-full bg-zinc-900 border border-white/5 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10 opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                        {/* Abstract Grid Pattern */}
                        <div className="absolute inset-0 opacity-20" style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                            backgroundSize: '40px 40px'
                        }}></div>

                        {/* Animated Lines/Circles simulation via CSS gradients */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-500/20 rounded-full blur-[100px] animate-pulse"></div>
                    </div>
                </div>
                <div className="absolute bottom-6 left-6 flex gap-8">
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase tracking-widest text-zinc-500">Infrastructure</span>
                        <span className="text-xs text-white font-mono">STABLE // SCALABLE</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] uppercase tracking-widest text-zinc-500">Status</span>
                        <span className="text-xs text-emerald-400 font-mono italic">OPERATIONAL</span>
                    </div>
                </div>
            </div>

            {/* Lead Content */}
            <div className="prose prose-invert max-w-none">
                <div className="text-xl md:text-2xl text-white font-light leading-relaxed mb-12 border-l-2 border-emerald-500/30 pl-8">
                    La mayoría de los sistemas digitales fallan por una razón incómoda: <span className="text-emerald-400 font-normal">nunca fueron diseñados como sistemas</span>.
                    Fueron armados como parches. Una web por marketing, un WhatsApp por ventas, una automatización por moda, una IA por presión competitiva.
                </div>

                <p className="text-zinc-400 text-lg leading-relaxed">
                    Funcionan… hasta que el negocio cambia.
                </p>

                <p className="text-zinc-400 text-lg leading-relaxed">
                    VARKO existe para resolver ese punto exacto de quiebre. No optimizamos piezas sueltas. <span className="text-white">Diseñamos estructuras</span>.
                </p>

                <p className="text-zinc-400 text-lg leading-relaxed italic border-t border-white/5 pt-12 mt-12">
                    Este artículo no es una venta. Es una radiografía del problema y una explicación clara de cómo pensamos, diseñamos y corregimos sistemas digitales para que escalen sin fragilidad.
                </p>
            </div>

            {/* Core Problem Section */}
            <section className="space-y-8 bg-zinc-900/40 border border-white/5 p-8 md:p-12 rounded-3xl">
                <h2 className="text-3xl font-light text-white tracking-tight">El error estructural más común</h2>
                <p className="text-zinc-400 text-lg">Las empresas no pierden dinero por falta de tráfico.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        "El frontend no guía decisiones",
                        "Los flujos no califican usuarios",
                        "Las automatizaciones responden, pero no entienden",
                        "Los datos existen, pero no gobiernan nada",
                        "Cada canal opera como una isla"
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-black/20 rounded-xl border border-white/5">
                            <div className="w-1.5 h-1.5 bg-red-500/50 rounded-full mt-2.5"></div>
                            <span className="text-zinc-300 font-light">{item}</span>
                        </div>
                    ))}
                </div>

                <div className="pt-6 border-t border-white/5">
                    <p className="text-xl text-white font-light">
                        El resultado es un sistema <span className="text-red-400 font-normal underline decoration-red-500/30 underline-offset-8">rápido pero frágil</span>.
                    </p>
                    <p className="text-zinc-500 mt-2 text-sm uppercase tracking-widest">Crece el volumen → aparece el caos.</p>
                </div>
            </section>

            {/* Definition Section */}
            <section className="space-y-12 py-12">
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                    <h2 className="text-4xl font-light text-white">Qué es realmente un sistema digital</h2>
                    <p className="text-zinc-400">Un sistema no es una web. Un sistema no es una IA. Un sistema no es un CRM.</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="text-center p-8 border border-emerald-500/20 bg-emerald-500/5 rounded-full mb-8">
                        <p className="text-2xl md:text-3xl text-emerald-400 font-light tracking-wide italic">
                            "Un sistema digital es una cadena de decisiones diseñadas."
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {['Captar', 'Calificar', 'Convertir', 'Operar', 'Escalar'].map((step, i) => (
                        <div key={step} className="flex flex-col items-center gap-3 p-6 text-center group">
                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-zinc-900 border border-white/10 group-hover:border-emerald-500/50 transition-colors">
                                <span className="text-lg font-mono text-zinc-500 group-hover:text-emerald-400">{i + 1}</span>
                            </div>
                            <span className="text-xs uppercase tracking-widest text-zinc-400 group-hover:text-white">{step}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* VARKO Principles (Layers) */}
            <section className="space-y-12">
                <div className="space-y-4">
                    <h2 className="text-3xl font-light text-white">El principio VARKO: la estructura precede al crecimiento</h2>
                    <p className="text-zinc-400">Antes de escribir código, VARKO define tres capas fundamentales:</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-6 p-8 border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors duration-500 group">
                        <div className="w-10 h-10 bg-indigo-500/10 flex items-center justify-center rounded-lg border border-indigo-500/20">
                            <Zap className="w-5 h-5 text-indigo-400" />
                        </div>
                        <h3 className="text-xl text-white font-normal uppercase tracking-wide">Capa de intención</h3>
                        <p className="text-sm text-zinc-400 font-light leading-relaxed">
                            Qué decisión debe tomar el usuario en cada punto. No qué botón presiona. Qué decisión cognitiva ocurre.
                        </p>
                    </div>

                    <div className="space-y-6 p-8 border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors duration-500 group">
                        <div className="w-10 h-10 bg-emerald-500/10 flex items-center justify-center rounded-lg border border-emerald-500/20">
                            <Layers className="w-5 h-5 text-emerald-400" />
                        </div>
                        <h3 className="text-xl text-white font-normal uppercase tracking-wide">Capa de flujo</h3>
                        <p className="text-sm text-zinc-400 font-light leading-relaxed">
                            Qué sucede antes y después de cada acción. Sin saltos. Sin callejones sin salida. Sin automatizaciones ciegas.
                        </p>
                    </div>

                    <div className="space-y-6 p-8 border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors duration-500 group">
                        <div className="w-10 h-10 bg-blue-500/10 flex items-center justify-center rounded-lg border border-blue-500/20">
                            <BarChart3 className="w-5 h-5 text-blue-400" />
                        </div>
                        <h3 className="text-xl text-white font-normal uppercase tracking-wide">Capa de control</h3>
                        <p className="text-sm text-zinc-400 font-light leading-relaxed">
                            Qué datos gobiernan el sistema. No métricas decorativas. Datos que permiten intervenir, ajustar y escalar.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why VARKO Section */}
            <section className="bg-white text-zinc-900 p-8 md:p-16 rounded-3xl space-y-12">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight">Por qué VARKO no vende “servicios”</h2>
                    <p className="text-zinc-600 text-lg max-w-2xl">Los servicios se contratan. <span className="text-zinc-950 font-medium italic">Los sistemas se adoptan.</span></p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <span className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-400">VARKO no entrega:</span>
                        <ul className="space-y-4">
                            {['Páginas', 'Bots', 'Dashboards', 'IA genérica'].map(item => (
                                <li key={item} className="flex items-center gap-3 text-2xl font-light text-zinc-300 line-through">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-8">
                        <span className="text-xs uppercase tracking-[0.3em] font-bold text-emerald-600">VARKO entrega:</span>
                        <p className="text-2xl font-light leading-tight">
                            Máquinas digitales funcionales.
                        </p>
                        <div className="space-y-4 pt-4 border-t border-zinc-100">
                            {[
                                "El frontend guía comportamiento",
                                "La automatización reduce fricción",
                                "La IA amplifica decisiones existentes",
                                "El negocio gana visibilidad y control"
                            ].map(item => (
                                <div key={item} className="flex items-center gap-3">
                                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                    <span className="text-zinc-700 font-light">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Automation & AI Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <section className="space-y-6">
                    <h2 className="text-2xl font-light text-white uppercase tracking-wider">Automatización sin fragilidad</h2>
                    <p className="text-zinc-400 leading-relaxed font-light">
                        Automatizar sin estructura es acelerar el error. Por eso en VARKO:
                    </p>
                    <ul className="space-y-4 text-sm text-zinc-300 font-light italic">
                        <li>— Nunca se automatiza una decisión mal definida</li>
                        <li>— Nunca se conecta una herramienta sin rol claro</li>
                        <li>— Nunca se escala un flujo que no puede explicarse en una frase</li>
                    </ul>
                    <div className="pt-4 border-t border-white/10">
                        <p className="text-emerald-400 font-mono text-xs">IF (CANNOT_EXPLAIN) THEN (CANNOT_SCALE);</p>
                    </div>
                </section>

                <section className="space-y-6 bg-zinc-900/50 p-8 border border-white/5 rounded-2xl">
                    <h2 className="text-2xl font-light text-white uppercase tracking-wider">El rol real de la IA</h2>
                    <p className="text-zinc-400 leading-relaxed font-light">
                        La IA no reemplaza el sistema. Lo <span className="text-white">expande</span>.
                    </p>
                    <div className="space-y-3">
                        <div className="flex gap-4">
                            <Network className="w-5 h-5 text-zinc-600 shrink-0" />
                            <p className="text-sm text-zinc-400"><span className="text-zinc-200">Clasifica</span> cuando el humano ya decidió el criterio</p>
                        </div>
                        <div className="flex gap-4">
                            <Workflow className="w-5 h-5 text-zinc-600 shrink-0" />
                            <p className="text-sm text-zinc-400"><span className="text-zinc-200">Responde</span> cuando el flujo ya está diseñado</p>
                        </div>
                        <div className="flex gap-4">
                            <BarChart3 className="w-5 h-5 text-zinc-600 shrink-0" />
                            <p className="text-sm text-zinc-400"><span className="text-zinc-200">Optimiza</span> cuando el sistema ya funciona</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Red Flags */}
            <section className="space-y-8 py-12">
                <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-light text-white uppercase tracking-widest leading-none">Señales de intervención</h2>
                    <div className="flex-1 h-px bg-white/10"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        "Tus leads llegan, pero no avanzan",
                        "Tu equipo responde más de lo que decide",
                        "Tienes herramientas que nadie domina",
                        "Cada cambio rompe algo",
                        "No sabes dónde se pierde el usuario"
                    ].map((signal, i) => (
                        <div key={i} className="p-6 border border-red-500/10 bg-red-500/5 rounded-xl text-zinc-400 font-light text-sm italic">
                            "{signal}"
                        </div>
                    ))}
                </div>
                <p className="text-center text-zinc-500 text-xs uppercase tracking-widest pt-4">Si reconoces dos o más, ya estás perdiendo dinero.</p>
            </section>

            {/* Infrastructure Section */}
            <section className="border-t border-b border-white/10 py-20 text-center space-y-8">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h2 className="text-3xl md:text-5xl font-extralight text-white leading-tight">
                        VARKO como infraestructura, <br />
                        <span className="font-normal">no como proveedor.</span>
                    </h2>
                    <p className="text-lg text-zinc-400 font-light">
                        VARKO no acompaña eternamente. <br />
                        Interviene, corrige, diseña y deja un sistema <span className="text-white italic">estable</span>.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-12 pt-8">
                    <div className="flex flex-col items-center gap-2">
                        <ShieldCheck className="w-6 h-6 text-emerald-500" />
                        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Tolera cambios</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Zap className="w-6 h-6 text-emerald-500" />
                        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Absorbe crecimiento</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Cpu className="w-6 h-6 text-emerald-500" />
                        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Reduce dependencia</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <BarChart3 className="w-6 h-6 text-emerald-500" />
                        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Mantiene criterio</span>
                    </div>
                </div>
            </section>

            {/* Conclusion */}
            <footer className="space-y-12">
                <div className="space-y-6 text-center max-w-2xl mx-auto">
                    <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
                        El crecimiento sin estructura es <span className="italic">suerte</span>. <br />
                        La estructura sin crecimiento es <span className="italic">diseño estéril</span>.
                    </p>
                    <p className="text-zinc-400">
                        VARKO existe en el punto exacto donde ambos se encuentran.
                    </p>
                </div>

                <div className="bg-emerald-500 p-12 md:p-20 text-black text-center space-y-8 rounded-[40px] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white opacity-10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:opacity-20 transition-opacity"></div>
                    <h3 className="text-3xl md:text-6xl font-normal tracking-tighter leading-tight relative z-10">
                        Construye sistemas que <br />no se rompen.
                    </h3>
                    <div className="pt-4 relative z-10">
                        <Link
                            href="/contact"
                            className="inline-block bg-black text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:scale-105 transition-transform"
                        >
                            Hablar con ingeniería
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-6 pt-12">
                    <ShareArticle
                        title="El Sistema VARKO | INSIGHTS"
                        text="Un análisis profundo sobre cómo VARKO diseña infraestructuras digitales para el crecimiento real."
                        url="/insights/el-sistema-varko"
                        className="scale-110"
                    />
                    <p className="text-[10px] text-zinc-600 uppercase tracking-widest">Varko Systems // Article [RE-005]</p>
                </div>
            </footer>
        </article>
    );
}
