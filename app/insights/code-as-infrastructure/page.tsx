import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CodeAsInfrastructurePage() {
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
                        <span className="text-blue-400/80">Ingeniería</span>
                        <div className="h-px w-8 bg-zinc-800"></div>
                        <span>28 Sep, 2025</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-light text-white leading-tight tracking-tight">
                        El Código como Infraestructura
                    </h1>
                </div>
            </header>

            {/* Content Body */}
            <div className="prose prose-invert prose-lg max-w-none text-zinc-400 font-light leading-relaxed space-y-8">
                <p className="text-xl md:text-2xl text-white font-normal leading-relaxed">
                    Durante años, muchas empresas han tratado el código frontend como un gasto operativo: algo que se hace “para que funcione”, se ajusta cuando falla y se reemplaza cuando ya no da más.
                </p>

                <p>
                    Ese enfoque es uno de los errores más costosos en productos digitales.
                </p>

                <div className="pl-6 border-l-2 border-white/20 italic text-zinc-300 my-8">
                    El código no es un gasto. <br />
                    Es infraestructura.
                </div>

                <p>
                    Así como nadie construiría una empresa sólida sobre cimientos débiles, tampoco debería construirse un negocio digital sobre código improvisado, frágil o mal pensado.
                </p>

                <h3 className="text-2xl text-white font-normal pt-4">El frontend no es estética. Es sistema.</h3>

                <p>
                    Reducir el frontend a “lo visual” es no entender su verdadero impacto. El frontend es el punto donde la estrategia se encuentra con el usuario. Es donde se decide si un producto se entiende, se usa, se confía y se adopta.
                </p>

                <p>Un frontend bien construido:</p>
                <ul className="list-none space-y-2 pl-0">
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Reduce fricción</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Mejora la conversión</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Facilita el crecimiento</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Disminuye costos futuros</span>
                    </li>
                </ul>

                <p>
                    Un frontend mal estructurado hace lo contrario, incluso si “se ve bien”.
                </p>

                <h3 className="text-2xl text-white font-normal pt-4">La deuda técnica no es abstracta. Es financiera.</h3>

                <p>
                    Cada decisión rápida, cada parche temporal y cada “luego lo arreglamos” se acumula. Esa acumulación tiene un nombre: deuda técnica. <br />
                    Y como cualquier deuda, cobra intereses.
                </p>

                <p>Intereses en forma de:</p>
                <ul className="list-none space-y-2 pl-0">
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Desarrollo más lento</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Bugs recurrentes</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Dificultad para escalar</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Dependencia excesiva del equipo técnico</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Costos crecientes por cada nuevo cambio</span>
                    </li>
                </ul>

                <div className="bg-card border border-border p-8 my-8 text-center space-y-2">
                    <p className="text-sm text-muted-foreground">Lo que parecía ahorro inicial termina siendo una pérdida estructural.</p>
                </div>

                <h3 className="text-2xl text-white font-normal pt-4">Pensar el código como capital</h3>

                <p>
                    Cuando el código se trata como infraestructura, las decisiones cambian. Se piensa en mantenibilidad, en escalabilidad, en claridad. Se construye para crecer, no solo para lanzar.
                </p>

                <p>Invertir bien en código significa:</p>
                <ul className="list-none space-y-2 pl-0">
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Arquitecturas claras</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Patrones consistentes</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Decisiones técnicas alineadas al negocio</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></div>
                        <span>Menos fricción a largo plazo</span>
                    </li>
                </ul>

                <p className="border-l-2 border-blue-500/50 pl-4 py-1 text-zinc-300">
                    No es ir más lento. Es avanzar con control.
                </p>

                <h3 className="text-2xl text-white font-normal pt-4">La visión VARKO</h3>

                <p>
                    En VARKO no vemos el código como un recurso desechable. Lo vemos como un activo estratégico. Algo que sostiene al negocio hoy y lo prepara para mañana.
                </p>

                <div className="pl-6 border-l-2 border-white/20 italic text-zinc-300 my-8">
                    La tecnología no debe perseguir al crecimiento. <br />
                    Debe anticiparlo.
                </div>

                <p>
                    Por eso, antes de escalar usuarios, tráfico o inversión, hay una pregunta que siempre debe responderse:
                </p>

                <p className="text-xl text-white font-medium">
                    ¿Nuestra base tecnológica está preparada para crecer?
                </p>

                <p>
                    Si la respuesta no es clara, el problema no es el mercado. <br />
                    Es la infraestructura.
                </p>

                <p>
                    Porque el código bien hecho no se nota cuando funciona. <br />
                    Pero cuando falta, todo se detiene.
                </p>

                <div className="pt-8 space-y-1">
                    <p className="text-white font-medium text-lg">
                        El código no es un gasto.
                    </p>
                    <p className="text-white font-medium text-lg">
                        Es infraestructura.
                    </p>
                    <p className="text-zinc-500 text-sm uppercase tracking-wide">
                        Y la infraestructura define hasta dónde puedes llegar.
                    </p>
                </div>
            </div>
        </article>
    );
}
