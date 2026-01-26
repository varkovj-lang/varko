import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About",
    description: "VARKO System Overview - Arquitectura estratégica para negocios escalables.",
};

export default function AboutPage() {
    return (
        <div className="max-w-5xl space-y-24 pb-20">
            {/* Header */}
            <header className="space-y-4">
                <h1 className="text-4xl font-light tracking-tight text-white">SISTEMA VARKO</h1>
                <p className="text-muted-foreground text-lg font-light">Arquitectura estratégica para negocios escalables</p>
                <div className="h-px w-32 bg-zinc-700"></div>
            </header>

            {/* System Definition */}
            <section className="space-y-4">
                <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-bold">Definición del Sistema</h2>
                <p className="text-2xl text-white font-semibold leading-relaxed max-w-3xl">
                    VARKO no es una agencia.<br />
                    Es un sistema operativo diseñado para estructurar, ejecutar y escalar crecimiento con control.
                </p>
            </section>

            {/* Core Purpose */}
            <section className="space-y-6">
                <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-bold">Propósito Central</h2>
                <ul className="space-y-3 text-lg text-zinc-300 font-light">
                    <li className="flex items-start gap-3">
                        <span className="text-zinc-700 mt-1">–</span>
                        <span>Reemplazar intuición con estructura</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-zinc-700 mt-1">–</span>
                        <span>Convertir publicidad en infraestructura</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-zinc-700 mt-1">–</span>
                        <span>Construir sistemas que permanecen estables bajo escala</span>
                    </li>
                </ul>
            </section>

            {/* Operating Principles */}
            <section className="space-y-8">
                <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-bold">Principios Operativos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-zinc-900/30 border border-zinc-800 p-6 space-y-2 hover:border-zinc-700 transition-colors">
                        <h3 className="text-sm uppercase tracking-widest text-white font-medium">Sistemas Antes que Tácticas</h3>
                        <p className="text-zinc-400 font-light">La ejecución es una consecuencia, no un punto de partida.</p>
                    </div>
                    <div className="bg-zinc-900/30 border border-zinc-800 p-6 space-y-2 hover:border-zinc-700 transition-colors">
                        <h3 className="text-sm uppercase tracking-widest text-white font-medium">Datos Sobre Opiniones</h3>
                        <p className="text-zinc-400 font-light">Las decisiones se validan, no se asumen.</p>
                    </div>
                    <div className="bg-zinc-900/30 border border-zinc-800 p-6 space-y-2 hover:border-zinc-700 transition-colors">
                        <h3 className="text-sm uppercase tracking-widest text-white font-medium">Control Sobre Volumen</h3>
                        <p className="text-zinc-400 font-light">Escala sin control es fragilidad.</p>
                    </div>
                    <div className="bg-zinc-900/30 border border-zinc-800 p-6 space-y-2 hover:border-zinc-700 transition-colors">
                        <h3 className="text-sm uppercase tracking-widest text-white font-medium">Viabilidad a Largo Plazo</h3>
                        <p className="text-zinc-400 font-light">Las victorias a corto plazo son irrelevantes sin estructura.</p>
                    </div>
                </div>
            </section>

            {/* System Workflow */}
            <section className="space-y-8">
                <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-bold">Flujo del Sistema</h2>
                <div className="space-y-6">
                    <div className="flex gap-6 items-start">
                        <span className="text-2xl font-mono text-zinc-700 font-bold">01</span>
                        <div className="space-y-1">
                            <h3 className="text-sm uppercase tracking-widest text-white font-medium">Diagnóstico</h3>
                            <p className="text-zinc-400 font-light">Lógica de negocio y restricciones</p>
                        </div>
                    </div>
                    <div className="flex gap-6 items-start">
                        <span className="text-2xl font-mono text-zinc-700 font-bold">02</span>
                        <div className="space-y-1">
                            <h3 className="text-sm uppercase tracking-widest text-white font-medium">Arquitectura</h3>
                            <p className="text-zinc-400 font-light">Sistema, embudos, automatización, datos</p>
                        </div>
                    </div>
                    <div className="flex gap-6 items-start">
                        <span className="text-2xl font-mono text-zinc-700 font-bold">03</span>
                        <div className="space-y-1">
                            <h3 className="text-sm uppercase tracking-widest text-white font-medium">Implementación</h3>
                            <p className="text-zinc-400 font-light">Medios, producto, integraciones</p>
                        </div>
                    </div>
                    <div className="flex gap-6 items-start">
                        <span className="text-2xl font-mono text-zinc-700 font-bold">04</span>
                        <div className="space-y-1">
                            <h3 className="text-sm uppercase tracking-widest text-white font-medium">Optimización</h3>
                            <p className="text-zinc-400 font-light">Iteración continua basada en métricas reales</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Filter */}
            <section className="space-y-8">
                <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-bold">Filtro de Clientes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                        <h3 className="text-sm uppercase tracking-widest text-white font-medium">Aceptados</h3>
                        <ul className="space-y-2 text-zinc-300 font-light">
                            <li className="flex items-start gap-3">
                                <span className="text-zinc-700">–</span>
                                <span>Mentalidad de crecimiento estructurado</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-zinc-700">–</span>
                                <span>Visión a largo plazo</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-zinc-700">–</span>
                                <span>Disciplina operativa</span>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm uppercase tracking-widest text-zinc-600 font-medium">Rechazados</h3>
                        <ul className="space-y-2 text-zinc-600 font-light">
                            <li className="flex items-start gap-3">
                                <span className="text-zinc-800">–</span>
                                <span>Mentalidad de victorias rápidas</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-zinc-800">–</span>
                                <span>Dependencia de anuncios</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-zinc-800">–</span>
                                <span>Decisiones basadas en improvisación</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* System Statement */}
            <section className="border-t border-zinc-800 pt-12 space-y-6">
                <div className="h-px w-1 bg-zinc-700"></div>
                <p className="text-2xl text-white font-medium leading-relaxed max-w-2xl">
                    El crecimiento sin estructura es temporal.<br />
                    VARKO construye lo que no colapsa cuando escala.
                </p>
            </section>
        </div>
    );
}
