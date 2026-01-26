'use client';

import { Server, Database, LayoutGrid, Workflow, LucideIcon } from 'lucide-react';
import { SystemCard } from '@/components/systems/SystemCard';
import { useState, useEffect } from 'react';

// Types for our system state
interface SystemState {
    name: string;
    description: string;
    status: 'Estable' | 'Activo' | 'En Optimización' | 'Mantenimiento';
    icon: LucideIcon;
    metrics: {
        label: string;
        value: string;
        trend?: 'up' | 'down' | 'neutral';
        trendValue?: string;
    }[];
}

export default function SystemsPage() {
    // Initial State
    const [systems, setSystems] = useState<SystemState[]>([
        {
            name: "Sistema Comercial",
            description: "Arquitectura modular orientada a conversión y escalabilidad.",
            status: "Estable",
            icon: Database,
            metrics: [
                { label: "Leads Hoy", value: "142", trend: "up", trendValue: "+12%" },
                { label: "Conversión", value: "4.8%", trend: "up", trendValue: "+0.3%" }
            ]
        },
        {
            name: "Motor de Automatización",
            description: "Flux n8n para procesamiento de leads cualificados.",
            status: "En Optimización",
            icon: Workflow,
            metrics: [
                { label: "Ejecuciones", value: "8,932", trend: "up", trendValue: "+5%" },
                { label: "Tasa Éxito", value: "98.2%", trend: "down", trendValue: "-0.5%" }
            ]
        },
        {
            name: "Infraestructura Frontend",
            description: "Next.js 14 + Edge Caching. Cargas sub-100ms.",
            status: "Activo",
            icon: LayoutGrid,
            metrics: [
                { label: "Vercel Build", value: "42s", trend: "neutral", trendValue: "~" },
                { label: "LCP", value: "82ms", trend: "up", trendValue: "-12ms" }
            ]
        },
        {
            name: "Servidor Dedicado",
            description: "Node de procesamiento para analítica interna.",
            status: "Mantenimiento",
            icon: Server,
            metrics: [
                { label: "CPU Load", value: "42%", trend: "neutral", trendValue: "Stable" },
                { label: "RAM Usage", value: "6.4GB", trend: "up", trendValue: "+200MB" }
            ]
        }
    ]);

    // Simulate Live Data Updates
    useEffect(() => {
        const interval = setInterval(() => {
            setSystems(prevSystems => prevSystems.map(sys => {
                // Randomly update metrics slightly to simulate live data
                const newMetrics = sys.metrics.map(m => {
                    if (m.label === "CPU Load") {
                        const val = parseInt(m.value);
                        const change = Math.floor(Math.random() * 5) - 2;
                        return { ...m, value: `${Math.max(10, Math.min(90, val + change))}%` };
                    }
                    if (m.label === "Ejecuciones") {
                        const val = parseInt(m.value.replace(',', ''));
                        return { ...m, value: (val + Math.floor(Math.random() * 3)).toLocaleString() };
                    }
                    return m;
                });
                return { ...sys, metrics: newMetrics };
            }));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleAction = (systemName: string, action: string) => {
        // Here we would handle real actions
        console.log(`Action ${action} triggered for ${systemName}`);
    };

    return (
        <div className="space-y-12 pb-20">
            <header className="space-y-4">
                <div className="flex justify-between items-end">
                    <div>
                        <h2 className="text-4xl font-light tracking-tight text-white">SYSTEMS</h2>
                        <div className="h-px w-24 bg-white/20 mt-4"></div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        LIVE MONITORING
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {systems.map((sys, idx) => (
                    <SystemCard
                        key={idx}
                        name={sys.name}
                        description={sys.description}
                        status={sys.status}
                        icon={sys.icon}
                        metrics={sys.metrics}
                        onAction={(action) => handleAction(sys.name, action)}
                    />
                ))}
            </div>

            {/* Global Metrics Summary (Optional footer) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-zinc-800 pt-8">
                <div className="space-y-1">
                    <p className="text-xs uppercase text-zinc-600">Total Requests</p>
                    <p className="text-xl text-zinc-400 font-mono">1.2M/mo</p>
                </div>
                <div className="space-y-1">
                    <p className="text-xs uppercase text-zinc-600">Avg. Response</p>
                    <p className="text-xl text-zinc-400 font-mono">45ms</p>
                </div>
                <div className="space-y-1">
                    <p className="text-xs uppercase text-zinc-600">Error Rate</p>
                    <p className="text-xl text-emerald-500 font-mono">0.02%</p>
                </div>
                <div className="space-y-1">
                    <p className="text-xs uppercase text-zinc-600">Version</p>
                    <p className="text-xl text-zinc-400 font-mono">v2.4.0</p>
                </div>
            </div>
        </div>
    );
}
