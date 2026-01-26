import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AutomatorsDilemmaPage() {
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
                        <span>30 Ago, 2025</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-light text-white leading-tight tracking-tight">
                        El Dilema del Automatizador
                    </h1>
                </div>
            </header>

            {/* Content Body */}
            <div className="prose prose-invert prose-lg max-w-none text-zinc-400 font-light leading-relaxed space-y-8">
                <p className="text-xl md:text-2xl text-white font-normal leading-relaxed">
                    La automatización promete eficiencia, velocidad y escala. Y cumple.
                </p>

                <p>
                    Pero mal aplicada, también puede erosionar lo más valioso de una empresa: su humanidad.
                </p>

                <div className="pl-6 border-l-2 border-white/20 italic text-zinc-300 my-8">
                    El dilema no es si automatizar o no. <br />
                    El dilema es qué automatizar, cuándo y hasta dónde.
                </div>

                <h3 className="text-2xl text-white font-normal pt-4">Automatizar no es eliminar personas</h3>

                <p>
                    Uno de los errores más comunes es pensar la automatización como un reemplazo del factor humano. En realidad, la automatización bien diseñada no sustituye criterio, lo amplifica.
                </p>

                <p>Cuando todo se automatiza sin intención:</p>
                <ul className="list-none space-y-2 pl-0">
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>La experiencia se vuelve fría</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Las decisiones pierden contexto</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Los usuarios se sienten tratados como tickets, no como personas</span>
                    </li>
                </ul>

                <p className="border-l-2 border-amber-500/50 pl-4 py-1 text-zinc-200">
                    La eficiencia sin criterio termina siendo fricción.
                </p>

                <h3 className="text-2xl text-white font-normal pt-4">El momento correcto importa</h3>

                <p>
                    No todo proceso está listo para ser automatizado. Automatizar un sistema mal definido solo acelera el caos. Primero debe existir claridad: qué valor aporta el proceso, qué decisiones requiere y qué nivel de juicio humano es indispensable.
                </p>

                <p className="font-medium text-white">Un principio clave:</p>

                <p className="bg-zinc-900/50 p-4 border border-zinc-800 text-center">
                    Si un proceso aún necesita ser entendido, no debe ser automatizado.
                </p>

                <p>
                    La automatización debe llegar cuando el proceso ya es estable, repetible y medible.
                </p>

                <h3 className="text-2xl text-white font-normal pt-4">Un framework de decisión</h3>

                <p>En VARKO utilizamos un marco simple para decidir:</p>

                <ul className="list-none space-y-2 pl-0">
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Automatizar lo repetitivo, predecible y de bajo contexto</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Mantener humano lo estratégico, lo sensible y lo relacional</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Diseñar híbridos cuando la velocidad y el criterio deben convivir</span>
                    </li>
                </ul>

                <p>
                    El objetivo no es maximizar automatización, sino optimizar la experiencia y la operación al mismo tiempo.
                </p>

                <h3 className="text-2xl text-white font-normal pt-4">Escalar sin perder alma</h3>

                <p>
                    Las empresas que escalan bien no son las más automatizadas, sino las más conscientes. Saben dónde la tecnología debe intervenir y dónde debe retirarse.
                </p>

                <p>
                    La automatización correcta libera tiempo, reduce errores y permite que las personas se enfoquen en lo que realmente importa: pensar, decidir y crear valor.
                </p>

                <h3 className="text-2xl text-white font-normal pt-4">La visión VARKO</h3>

                <p>
                    En VARKO no automatizamos por moda ni por presión. Automatizamos con intención. Diseñamos sistemas que respetan el contexto, la marca y al usuario.
                </p>

                <p>
                    Porque escalar no debería significar volverse impersonal. <br />
                    Y la eficiencia no debería sacrificar la identidad.
                </p>

                <p className="pt-4">
                    Antes de automatizar, la pregunta es:
                </p>

                <p className="text-xl text-white border-l-2 border-white pl-6 py-2">
                    ¿Esto mejora la experiencia o solo la acelera?
                </p>

                <p>
                    La diferencia define el resultado.
                </p>

                <div className="pt-8 space-y-1">
                    <p className="text-white font-medium text-lg">
                        Automatizar sin criterio es perder control.
                    </p>
                    <p className="text-white font-medium text-lg">
                        Automatizar con intención es escalar con sentido.
                    </p>
                </div>
            </div>
        </article>
    );
}
