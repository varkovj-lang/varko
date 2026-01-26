import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-left">
            <div className="max-w-md w-full space-y-8">
                <header className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-zinc-600 font-mono tracking-[0.2em]">
                        <span className="w-2 h-2 bg-zinc-800 rounded-full"></span>
                        SYSTEM ERROR // 404
                    </div>
                    <h1 className="text-4xl font-light tracking-tight text-white uppercase">Recurso No Encontrado</h1>
                </header>

                <div className="space-y-4">
                    <p className="text-zinc-400 font-light leading-relaxed">
                        El nodo solicitado no existe dentro de la arquitectura actual del sistema.
                        Es posible que la sección haya sido removida o la dirección sea incorrecta.
                    </p>

                    <div className="h-px w-full bg-zinc-900"></div>

                    <div className="flex flex-col gap-4">
                        <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest">Acción Sugerida</p>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 group text-xs uppercase tracking-widest text-border-hover transition-colors"
                        >
                            <span className="font-mono text-xs text-zinc-700 group-hover:text-zinc-500">→</span>
                            <span className="text-sm font-medium tracking-tight">Regresar al Panel de Control</span>
                        </Link>
                    </div>
                </div>

                <footer className="pt-12">
                    <p className="text-[10px] font-mono text-zinc-800 uppercase tracking-[0.3em]">
                        Varko Operational System // v1.0.4
                    </p>
                </footer>
            </div>
        </div>
    );
}
