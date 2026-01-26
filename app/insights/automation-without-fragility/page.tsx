import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AutomationWithoutFragilityPage() {
    return (
        <article className="max-w-3xl mx-auto space-y-12 pb-20 animate-in fade-in duration-700">
            {/* Navigation */}
            <header className="space-y-8">
                <Link
                    href="/insights"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-white transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Volver a Insights
                </Link>

                <div className="space-y-4">
                    <div className="flex items-center gap-4 text-xs text-zinc-500 uppercase tracking-widest font-mono">
                        <span className="text-amber-500/80">Automatización</span>
                        <div className="h-px w-8 bg-zinc-800"></div>
                        <span>20 Ene, 2026</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-light text-white leading-tight tracking-tight">
                        Automatización Sin Fragilidad
                    </h1>
                </div>
            </header>

            {/* Content Body */}
            <div className="prose prose-invert prose-lg max-w-none text-zinc-400 font-light leading-relaxed space-y-8">
                <p className="text-xl md:text-2xl text-white font-normal leading-relaxed">
                    La automatización mal diseñada crea sistemas rápidos… pero frágiles. Funcionan hasta que algo cambia.
                </p>

                <p>
                    Y en un mercado que cambia constantemente, la fragilidad no escala.
                </p>

                <div className="pl-6 border-l-2 border-white/20 italic text-zinc-300 my-8">
                    Automatizar no debería significar rigidez. <br />
                    Debería significar resiliencia.
                </div>

                <h3 className="text-2xl text-white font-normal pt-4">Velocidad sin tolerancia al error</h3>

                <p>
                    Muchas automatizaciones están pensadas solo para el escenario ideal. Asumen datos limpios, comportamientos previsibles y flujos lineales. En la práctica, eso casi nunca ocurre.
                </p>

                <p>Cuando el sistema no tolera excepciones:</p>
                <ul className="list-none space-y-2 pl-0">
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Se rompe ante cambios mínimos</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Requiere intervención constante</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Genera dependencia técnica</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Pierde la promesa de eficiencia</span>
                    </li>
                </ul>

                <p className="border-l-2 border-amber-500/50 pl-4 py-1 text-zinc-200">
                    La automatización que no contempla el error está mal diseñada desde el inicio.
                </p>

                <h3 className="text-2xl text-white font-normal pt-4">Diseñar para lo inesperado</h3>

                <p>
                    Un sistema automatizado sólido no es el que nunca falla, sino el que sabe cómo fallar. Tiene salidas, validaciones, límites y mecanismos de recuperación.
                </p>

                <p>Diseñar con resiliencia implica:</p>
                <ul className="list-none space-y-2 pl-0">
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Manejar excepciones como parte del flujo</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Registrar y aprender de los fallos</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Permitir intervención humana cuando es necesario</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Evitar automatizaciones “todo o nada”</span>
                    </li>
                </ul>

                <p>
                    La robustez no es complejidad. Es previsión.
                </p>

                <h3 className="text-2xl text-white font-normal pt-4">Modularidad sobre monolitos</h3>

                <p>
                    Las automatizaciones frágiles suelen ser monolíticas: un flujo largo, rígido y difícil de modificar. Cuando una parte falla, todo falla.
                </p>

                <p>
                    La alternativa es la modularidad. Sistemas compuestos por piezas pequeñas, claras y reemplazables. Eso permite ajustar, escalar o corregir sin rehacerlo todo.
                </p>

                <div className="bg-card border border-border p-8 my-8 text-center space-y-2">
                    <p className="text-white font-medium">Automatizar por módulos es pensar a largo plazo.</p>
                </div>

                <h3 className="text-2xl text-white font-normal pt-4">La visión VARKO</h3>

                <p>
                    En VARKO diseñamos automatizaciones que resisten el cambio. Sistemas que no dependen de condiciones perfectas para funcionar y que pueden evolucionar sin colapsar.
                </p>

                <p>
                    Porque automatizar no es solo ejecutar más rápido. <br />
                    Es construir sistemas que sobreviven al crecimiento.
                </p>

                <p className="pt-4">
                    Antes de automatizar, la pregunta correcta es:
                </p>

                <div className="pl-6 border-l-2 border-emerald-500/50 text-xl text-white font-medium py-2">
                    ¿Este sistema seguirá funcionando cuando el contexto cambie?
                </div>

                <p>
                    Si la respuesta no es clara, no es un problema técnico. <br />
                    Es un problema de diseño.
                </p>

                <div className="pt-8 space-y-1">
                    <p className="text-white font-medium text-lg">
                        La automatización frágil acelera el fallo.
                    </p>
                    <p className="text-white font-medium text-lg">
                        La automatización resiliente sostiene el crecimiento.
                    </p>
                </div>
            </div>
        </article>
    );
}
