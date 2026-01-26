import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Evaluation",
    description: "Solicitud de evaluación estratégica.",
};

export default function ContactPage() {
    return (
        <div className="min-h-[60vh] flex flex-col justify-center max-w-2xl">
            <div className="space-y-8 mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    ¿Tu empresa está lista para jugar en serio?
                </h2>
                <p className="text-xl text-zinc-400 font-light">
                    Si no tienes claridad estratégica,
                    <br />
                    <span className="text-white font-medium">VARKO no es para ti.</span>
                </p>
            </div>

            <div>
                <a
                    href="https://wa.me/573144112693?text=Hola,%20me%20interesa%20una%20evaluación%20estratégica%20para%20mi%20empresa."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black text-sm font-bold uppercase tracking-widest overflow-hidden transition-transform hover:scale-105 active:scale-95"
                >
                    <span className="relative z-10 group-hover:text-black">Solicitar Evaluación</span>
                    <div className="absolute inset-0 bg-zinc-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                </a>
            </div>

            <div className="mt-16 pt-8 border-t border-white/5 flex gap-8 text-xs text-zinc-600 uppercase tracking-widest">
                <span>Bogotá, COL</span>
                <span>Est. 2024</span>
            </div>
        </div>
    );
}
