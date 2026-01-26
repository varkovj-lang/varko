import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function StructurePrecedesGrowthPage() {
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
                        <span className="text-emerald-500/80">Estrategia</span>
                        <div className="h-px w-8 bg-zinc-800"></div>
                        <span>12 Oct, 2025</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-light text-white leading-tight tracking-tight">
                        La mayoría de empresas no necesita más publicidad. Necesita estructura.
                    </h1>
                </div>
            </header>

            {/* Content Body */}
            <div className="prose prose-invert prose-lg max-w-none text-zinc-400 font-light leading-relaxed space-y-8">
                <p className="text-xl md:text-2xl text-white font-normal leading-relaxed">
                    El crecimiento no se construye a punta de anuncios. <br />
                    Se construye con criterio.
                </p>

                <p>
                    Hoy muchas empresas creen que su problema es la falta de visibilidad, cuando en realidad es la falta de estructura. Invierten más en publicidad esperando resultados distintos, sin corregir lo que realmente limita el crecimiento.
                </p>

                <div className="pl-6 border-l-2 border-white/20 italic text-zinc-300 my-8">
                    El mercado no premia al que hace más ruido. <br />
                    Premia al que tiene una señal clara.
                </div>

                <h3 className="text-2xl text-white font-normal pt-4">Publicidad sin estructura no escala</h3>

                <p>
                    Aumentar el presupuesto en ads sin un sistema sólido detrás no es una estrategia: es una fuga de capital. La publicidad no crea negocios fuertes; los expone.
                </p>

                <p>Cuando no existe:</p>
                <ul className="list-none space-y-2 pl-0">
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Un posicionamiento definido</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Una propuesta de valor entendible</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Un sistema de captación y conversión medible</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Procesos claros de venta y seguimiento</span>
                    </li>
                </ul>

                <p>La publicidad solo amplifica el desorden.</p>

                <h3 className="text-2xl text-white font-normal pt-4">La estructura siempre va primero</h3>

                <p>
                    En VARKO entendemos una verdad simple: <strong className="text-white font-medium">la estructura precede al crecimiento.</strong>
                </p>

                <p>
                    La estructura es lo que sostiene a una empresa cuando empieza a atraer más clientes, más tráfico y más atención. Es lo que convierte el interés en resultados y la visibilidad en valor real.
                </p>

                <p>Hablar de estructura es hablar de:</p>
                <ul className="list-none space-y-2 pl-0">
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Identidad y dirección claras</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Sistemas que funcionan sin improvisación</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Procesos diseñados para escalar</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Decisiones basadas en datos, no en impulsos</span>
                    </li>
                </ul>

                <div className="bg-card border border-border p-8 my-8 text-center space-y-2">
                    <h4 className="text-white text-lg tracking-wide uppercase">Menos ruido. Más intención.</h4>
                    <p className="text-sm text-muted-foreground">Las marcas sólidas no compiten por atención, compiten por claridad.</p>
                </div>

                <p>
                    No gritan más fuerte, comunican mejor. <br />
                    No persiguen tendencias, construyen bases.
                </p>

                <p>
                    Cuando la estructura es correcta, la publicidad deja de ser una apuesta y se convierte en una herramienta precisa.
                </p>

                <h3 className="text-2xl text-white font-normal pt-4">La pregunta correcta</h3>

                <p>
                    Antes de invertir más en anuncios, toda empresa debería detenerse y preguntarse:
                </p>

                <p className="text-xl text-white border-l-2 border-emerald-500/50 pl-6 py-2">
                    ¿Mi negocio está preparado para crecer?
                </p>

                <p>
                    Si la respuesta es incierta, el camino no es más publicidad. El camino es ordenar, definir y estructurar.
                </p>

                <p>
                    Porque en VARKO no creemos en el crecimiento improvisado. Creemos en construir primero lo que sostiene.
                </p>

                <p className="text-white font-medium">
                    La estructura no es opcional. <br />
                    Es el punto de partida.
                </p>
            </div>
        </article>
    );
}
