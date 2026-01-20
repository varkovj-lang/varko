import { FeaturedInsight } from '@/components/insights/FeaturedInsight';
import { InsightCard } from '@/components/insights/InsightCard';

export default function InsightsPage() {
    return (
        <div className="space-y-16 animate-in fade-in duration-700">
            <header className="space-y-4">
                <h2 className="text-4xl font-light tracking-tight text-white">INSIGHTS</h2>
                <div className="h-px w-24 bg-white/20"></div>
                <p className="text-muted-foreground text-lg font-light max-w-2xl">
                    Pensamiento estratégico, ingeniería de software y modelos de negocio.
                </p>
            </header>

            <FeaturedInsight
                date="Jan 20, 2026"
                category="Automatización"
                title="Automation Without Fragility"
                description="La automatización mal diseñada crea sistemas rápidos… pero frágiles. Funcionan hasta que algo cambia. Y en un mercado que cambia constantemente, la fragilidad no escala."
                href="/app/insights/automation-without-fragility"
            />

            <div className="space-y-8">
                <div className="flex items-center justify-between border-b border-border pb-4">
                    <h3 className="text-xl font-light text-white tracking-wide">Recientes</h3>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">Archivo 2024-2026</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <InsightCard
                        date="Oct 12, 2025"
                        category="Estrategia"
                        title="Structure Precedes Growth"
                        description="El crecimiento no se construye a punta de anuncios. Se construye con criterio. La estructura precede al crecimiento."
                        href="/app/insights/structure-precedes-growth"
                    />
                    <InsightCard
                        date="Sep 28, 2025"
                        category="Ingeniería"
                        title="Code as Infrastructure"
                        description="Por qué tratamos el código frontend como una inversión de capital y no como un gasto operativo. La deuda técnica es un pasivo financiero real."
                        href="/app/insights/code-as-infrastructure"
                    />
                    <InsightCard
                        date="Sep 15, 2025"
                        category="Filosofía"
                        title="Digital Ecosystems"
                        description="Más allá de las landing pages. Construyendo entornos digitales vivos que reaccionan al comportamiento del usuario en tiempo real."
                        href="/app/insights/digital-ecosystems"
                    />
                    <InsightCard
                        date="Aug 30, 2025"
                        category="Automatización"
                        title="The Automator's Dilemma"
                        description="Cuándo automatizar y cuándo mantener el toque humano. Un framework de decisión para escalar operaciones sin perder alma."
                        href="/app/insights/the-automators-dilemma"
                    />
                </div>
            </div>
        </div>
    );
}
