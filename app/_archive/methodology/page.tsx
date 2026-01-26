import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Metodología",
    description: "Proceso técnico de ejecución VARKO - Diagnóstico, Arquitectura, Implementación, Optimización.",
};

export default function MethodologyPage() {
    return (
        <div className="max-w-6xl space-y-24 pb-20">
            {/* Header */}
            <header className="space-y-4">
                <h1 className="text-4xl font-light tracking-tight text-white">METODOLOGÍA</h1>
                <p className="text-muted-foreground text-lg font-light max-w-3xl">
                    Proceso técnico de ejecución. Cuatro fases secuenciales con entregables medibles y criterios de avance definidos.
                </p>
                <div className="h-px w-32 bg-zinc-700"></div>
            </header>

            {/* Phase 01: Diagnóstico */}
            <section className="space-y-8 border-l-2 border-zinc-800 pl-8">
                <div className="space-y-2">
                    <div className="flex items-center gap-4">
                        <span className="text-4xl font-mono text-zinc-700 font-bold">01</span>
                        <h2 className="text-2xl font-medium text-white">DIAGNÓSTICO</h2>
                    </div>
                    <p className="text-zinc-400 font-light">Análisis de lógica de negocio y mapeo de restricciones operativas</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-bold">Objetivos Técnicos</h3>
                        <ul className="space-y-2 text-zinc-300 font-light">
                            <li className="flex items-start gap-3">
                                <span className="text-zinc-700 mt-1">–</span>
                                <span>Mapear flujo de ingresos actual</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-zinc-700 mt-1">–</span>
                                <span>Identificar cuellos de botella operativos</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-zinc-700 mt-1">–</span>
                                <span>Auditar infraestructura digital existente</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-zinc-700 mt-1">–</span>
                                <span>Definir restricciones presupuestarias y temporales</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-bold">Entregables</h3>
                        <ul className="space-y-2 text-zinc-300 font-light">
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500/40 mt-1">✓</span>
                                <span>Documento de arquitectura actual</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500/40 mt-1">✓</span>
                                <span>Mapa de flujo de conversión</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500/40 mt-1">✓</span>
                                <span>Análisis de métricas clave (CAC, LTV, CR)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500/40 mt-1">✓</span>
                                <span>Informe de viabilidad técnica</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                    <div className="bg-zinc-900/30 border border-zinc-800 p-4">
                        <p className="text-xs uppercase text-zinc-600 mb-1">Duración</p>
                        <p className="text-xl text-white font-mono">1-2 sem</p>
                    </div>
                    <div className="bg-zinc-900/30 border border-zinc-800 p-4">
                        <p className="text-xs uppercase text-zinc-600 mb-1">Reuniones</p>
                        <p className="text-xl text-white font-mono">3-4</p>
                    </div>
                    <div className="bg-zinc-900/30 border border-zinc-800 p-4">
                        <p className="text-xs uppercase text-zinc-600 mb-1">Criterio Avance</p>
                        <p className="text-sm text-white">Aprobación de informe</p>
                    </div>
                    <div className="bg-zinc-900/30 border border-zinc-800 p-4">
                        <p className="text-xs uppercase text-zinc-600 mb-1">Métrica Clave</p>
                        <p className="text-sm text-white">Claridad estructural</p>
                    </div>
                </div>
            </section>

            {/* Phase 02: Arquitectura */}
            <section className="space-y-8 border-l-2 border-blue-900/50 pl-8">
                <div className="space-y-2">
                    <div className="flex items-center gap-4">
                        <span className="text-4xl font-mono text-zinc-700 font-bold">02</span>
                        <h2 className="text-2xl font-medium text-white">ARQUITECTURA</h2>
                    </div>
                    <p className="text-zinc-400 font-light">Diseño de sistema, embudos, automatización e infraestructura de datos</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-bold">Objetivos Técnicos</h3>
                        <ul className="space-y-2 text-zinc-300 font-light">
                            <li className="flex items-start gap-3">
                                <span className="text-zinc-700 mt-1">–</span>
                                <span>Diseñar arquitectura de embudos de conversión</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-zinc-700 mt-1">–</span>
                                <span>Definir flujos de automatización (n8n, Zapier, Make)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-zinc-700 mt-1">–</span>
                                <span>Estructurar modelo de datos y tracking</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-zinc-700 mt-1">–</span>
                                <span>Seleccionar stack tecnológico óptimo</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-bold">Entregables</h3>
                        <ul className="space-y-2 text-zinc-300 font-light">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-500/40 mt-1">✓</span>
                                <span>Blueprint de sistema completo</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-500/40 mt-1">✓</span>
                                <span>Diagrama de flujos de automatización</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-500/40 mt-1">✓</span>
                                <span>Especificación técnica de integraciones</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-500/40 mt-1">✓</span>
                                <span>Plan de implementación por sprints</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                    <div className="bg-zinc-900/30 border border-zinc-800 p-4">
                        <p className="text-xs uppercase text-zinc-600 mb-1">Duración</p>
                        <p className="text-xl text-white font-mono">2-3 sem</p>
                    </div>
                    <div className="bg-zinc-900/30 border border-zinc-800 p-4">
                        <p className="text-xs uppercase text-zinc-600 mb-1">Iteraciones</p>
                        <p className="text-xl text-white font-mono">2-3</p>
                    </div>
                    <div className="bg-zinc-900/30 border border-zinc-800 p-4">
                        <p className="text-xs uppercase text-zinc-600 mb-1">Criterio Avance</p>
                        <p className="text-sm text-white">Blueprint aprobado</p>
                    </div>
                    <div className="bg-zinc-900/30 border border-zinc-800 p-4">
                        <p className="text-xs uppercase text-zinc-600 mb-1">Métrica Clave</p>
                        <p className="text-sm text-white">Viabilidad técnica</p>
                    </div>
                </div>
            </section>

            {/* Phase 03: Implementación */}
            <section className="space-y-8 border-l-2 border-amber-900/50 pl-8">
                <div className="space-y-2">
                    <div className="flex items-center gap-4">
                        <span className="text-4xl font-mono text-zinc-700 font-bold">03</span>
                        <h2 className="text-2xl font-medium text-white">IMPLEMENTACIÓN</h2>
                    </div>
                    <p className="text-zinc-400 font-light">Ejecución de medios, producto e integraciones técnicas</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-bold">Objetivos Técnicos</h3>
                        <ul className="space-y-2 text-zinc-300 font-light">
                            <li className="flex items-start gap-3">
                                <span className="text-zinc-700 mt-1">–</span>
                                <span>Desarrollar infraestructura frontend/backend</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-zinc-700 mt-1">–</span>
                                <span>Configurar automatizaciones y webhooks</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-zinc-700 mt-1">–</span>
                                <span>Integrar plataformas de medios (Meta, Google)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-zinc-700 mt-1">–</span>
                                <span>Implementar tracking y analítica avanzada</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-bold">Entregables</h3>
                        <ul className="space-y-2 text-zinc-300 font-light">
                            <li className="flex items-start gap-3">
                                <span className="text-amber-500/40 mt-1">✓</span>
                                <span>Sistema funcional en producción</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-amber-500/40 mt-1">✓</span>
                                <span>Automatizaciones operativas</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-amber-500/40 mt-1">✓</span>
                                <span>Campañas de medios activas</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-amber-500/40 mt-1">✓</span>
                                <span>Dashboard de métricas en tiempo real</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                    <div className="bg-zinc-900/30 border border-zinc-800 p-4">
                        <p className="text-xs uppercase text-zinc-600 mb-1">Duración</p>
                        <p className="text-xl text-white font-mono">4-6 sem</p>
                    </div>
                    <div className="bg-zinc-900/30 border border-zinc-800 p-4">
                        <p className="text-xs uppercase text-zinc-600 mb-1">Sprints</p>
                        <p className="text-xl text-white font-mono">4-6</p>
                    </div>
                    <div className="bg-zinc-900/30 border border-zinc-800 p-4">
                        <p className="text-xs uppercase text-zinc-600 mb-1">Criterio Avance</p>
                        <p className="text-sm text-white">Sistema operativo</p>
                    </div>
                    <div className="bg-zinc-900/30 border border-zinc-800 p-4">
                        <p className="text-xs uppercase text-zinc-600 mb-1">Métrica Clave</p>
                        <p className="text-sm text-white">Primeros resultados</p>
                    </div>
                </div>
            </section>

            {/* Phase 04: Optimización */}
            <section className="space-y-8 border-l-2 border-emerald-900/50 pl-8">
                <div className="space-y-2">
                    <div className="flex items-center gap-4">
                        <span className="text-4xl font-mono text-zinc-700 font-bold">04</span>
                        <h2 className="text-2xl font-medium text-white">OPTIMIZACIÓN</h2>
                    </div>
                    <p className="text-zinc-400 font-light">Iteración continua basada en métricas reales y evolución del sistema</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-bold">Objetivos Técnicos</h3>
                        <ul className="space-y-2 text-zinc-300 font-light">
                            <li className="flex items-start gap-3">
                                <span className="text-zinc-700 mt-1">–</span>
                                <span>Análisis de datos y detección de patrones</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-zinc-700 mt-1">–</span>
                                <span>Refinamiento de embudos y creatividades</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-zinc-700 mt-1">–</span>
                                <span>Escalado controlado de inversión publicitaria</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-zinc-700 mt-1">–</span>
                                <span>Evolución de automatizaciones y procesos</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-bold">Entregables</h3>
                        <ul className="space-y-2 text-zinc-300 font-light">
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500/40 mt-1">✓</span>
                                <span>Reportes semanales de performance</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500/40 mt-1">✓</span>
                                <span>Ajustes de campaña basados en datos</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500/40 mt-1">✓</span>
                                <span>Nuevas iteraciones de producto/funnel</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-emerald-500/40 mt-1">✓</span>
                                <span>Plan de escalado trimestral</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                    <div className="bg-zinc-900/30 border border-zinc-800 p-4">
                        <p className="text-xs uppercase text-zinc-600 mb-1">Duración</p>
                        <p className="text-xl text-white font-mono">Continuo</p>
                    </div>
                    <div className="bg-zinc-900/30 border border-zinc-800 p-4">
                        <p className="text-xs uppercase text-zinc-600 mb-1">Ciclos</p>
                        <p className="text-xl text-white font-mono">Semanal</p>
                    </div>
                    <div className="bg-zinc-900/30 border border-zinc-800 p-4">
                        <p className="text-xs uppercase text-zinc-600 mb-1">Criterio Avance</p>
                        <p className="text-sm text-white">Mejora sostenida</p>
                    </div>
                    <div className="bg-zinc-900/30 border border-zinc-800 p-4">
                        <p className="text-xs uppercase text-zinc-600 mb-1">Métrica Clave</p>
                        <p className="text-sm text-white">ROI incremental</p>
                    </div>
                </div>
            </section>

            {/* System Statement */}
            <section className="border-t border-zinc-800 pt-12">
                <p className="text-xl text-white font-medium leading-relaxed max-w-3xl">
                    La metodología no es un proceso lineal.<br />
                    Es un sistema que se adapta a la realidad del negocio sin perder estructura.
                </p>
            </section>
        </div>
    );
}
