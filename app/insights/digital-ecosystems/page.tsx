import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ShareArticle } from '@/components/insights/ShareArticle';

export default function DigitalEcosystemsPage() {
    return (
        <article className="max-w-3xl mx-auto space-y-12 pb-20 animate-in fade-in duration-700">
            {/* Navigation */}
            <header className="space-y-8">
                <div className="flex items-center justify-between">
                    <Link
                        href="/insights"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-white transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Volver a Insights
                    </Link>
                    <ShareArticle
                        title="Ecosistemas Digitales"
                        text="Más allá de las landing pages. Construyendo entornos digitales vivos que reaccionan al comportamiento del usuario en tiempo real."
                        url="/insights/digital-ecosystems"
                    />
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-4 text-xs text-zinc-500 uppercase tracking-widest font-mono">
                        <span className="text-zinc-300">Filosofía</span>
                        <div className="h-px w-8 bg-zinc-800"></div>
                        <span>15 Sep, 2025</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-light text-white leading-tight tracking-tight">
                        Ecosistemas Digitales
                    </h1>
                </div>
            </header>

            {/* Content Body */}
            <div className="prose prose-invert prose-lg max-w-none text-zinc-400 font-light leading-relaxed space-y-8">
                <p className="text-xl md:text-2xl text-white font-normal leading-relaxed">
                    Durante mucho tiempo, el crecimiento digital se ha reducido a una secuencia de páginas: una landing, un formulario y un botón de compra.
                </p>

                <p>
                    Funcional, pero limitado. Ese enfoque ignora una verdad clave del entorno actual: los negocios digitales no crecen como páginas, crecen como sistemas vivos.
                </p>

                <div className="pl-6 border-l-2 border-white/20 italic text-zinc-300 my-8">
                    Un ecosistema digital no es un conjunto de pantallas. <br />
                    Es un entorno que reacciona, aprende y evoluciona con el comportamiento del usuario.
                </div>

                <h3 className="text-2xl text-white font-normal pt-4">Más allá de las landing pages</h3>

                <p>
                    Las landing pages son herramientas. Útiles, necesarias, pero insuficientes. Cuando se convierten en el centro de la estrategia, el negocio queda atrapado en una lógica estática: mismo mensaje, mismo recorrido, misma experiencia para todos.
                </p>

                <p className="border-l-2 border-zinc-700 pl-4 py-1">
                    Los usuarios no se comportan igual. <br />
                    Los sistemas tampoco deberían hacerlo.
                </p>

                <p>
                    Un ecosistema digital entiende que cada interacción deja una señal y que esa señal debe influir en lo que ocurre después.
                </p>

                <h3 className="text-2xl text-white font-normal pt-4">Sistemas que responden al comportamiento</h3>

                <p>Un ecosistema bien diseñado:</p>

                <ul className="list-none space-y-2 pl-0">
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Ajusta mensajes según la intención del usuario</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Conecta datos entre canales</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Reduce fricción con cada interacción</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Aprende del uso real, no de supuestos</span>
                    </li>
                </ul>

                <p>
                    No se trata de automatizar por automatizar. <br />
                    <span className="text-white">Se trata de crear coherencia dinámica.</span>
                </p>

                <p>
                    Cuando el sistema responde al usuario, la experiencia deja de sentirse genérica y empieza a sentirse pensada.
                </p>

                <h3 className="text-2xl text-white font-normal pt-4">El error de diseñar piezas aisladas</h3>

                <p>
                    Muchas empresas construyen activos digitales como silos: la web por un lado, el CRM por otro, el contenido por otro, la publicidad desconectada. El resultado es fragmentación.
                </p>

                <div className="bg-card border border-border p-8 my-8 text-center space-y-2">
                    <p className="text-white font-medium">Un ecosistema no funciona por piezas sueltas.</p>
                    <p className="text-muted-foreground text-sm">Funciona por relaciones.</p>
                </div>

                <p>
                    Cada componente debe alimentar al otro. Cada decisión debe tener impacto sistémico.
                </p>


                <h3 className="text-2xl text-white font-normal pt-4">La visión VARKO</h3>

                <p>
                    En VARKO diseñamos ecosistemas, no páginas. Pensamos en flujos, señales, respuestas y evolución. Construimos entornos digitales que no solo convierten, sino que se adaptan.
                </p>

                <p>
                    Porque el crecimiento sostenible no viene de empujar tráfico hacia un punto fijo. Viene de crear sistemas capaces de absorber, interpretar y responder a la complejidad del mercado.
                </p>

                <p className="pt-4">
                    Antes de lanzar otra landing, la pregunta es:
                </p>

                <div className="pl-6 border-l-2 border-emerald-500/50 text-xl text-white font-medium py-2">
                    ¿Nuestro entorno digital está vivo o solo está publicado?
                </div>

                <p>
                    La diferencia es profunda. <br />
                    Y define quién escala… y quién se estanca.
                </p>

                <div className="pt-8 space-y-1">
                    <p className="text-white font-medium text-lg">
                        Las landing convierten.
                    </p>
                    <p className="text-white font-medium text-lg">
                        Los ecosistemas sostienen.
                    </p>
                    <p className="text-zinc-500 text-sm uppercase tracking-wide">
                        Y solo lo que se sostiene, crece.
                    </p>
                </div>
            </div>
        </article>
    );
}
