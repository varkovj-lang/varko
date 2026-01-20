'use client';

import { LucideIcon, RefreshCw, TerminalSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

interface Metric {
    label: string;
    value: string;
    trend?: 'up' | 'down' | 'neutral';
    trendValue?: string;
}

interface SystemCardProps {
    name: string;
    description: string;
    status: 'Estable' | 'Activo' | 'En Optimización' | 'Mantenimiento';
    icon: LucideIcon;
    metrics: Metric[];
    onAction?: (action: string) => void;
}

export function SystemCard({ name, description, status, icon: Icon, metrics, onAction }: SystemCardProps) {
    const [isPulsing, setIsPulsing] = useState(true);

    // Simulate random activity pulse
    useEffect(() => {
        const interval = setInterval(() => {
            setIsPulsing(prev => !prev);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Estable':
            case 'Activo':
                return 'bg-emerald-500';
            case 'En Optimización':
                return 'bg-blue-500';
            case 'Mantenimiento':
                return 'bg-amber-500';
            default:
                return 'bg-zinc-500';
        }
    };

    return (
        <div className="bg-zinc-900/40 border border-zinc-800 p-6 hover:border-zinc-700 transition-all duration-300 group relative overflow-hidden">
            {/* Background Grid Pattern (Subtle) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="relative z-10 space-y-6">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                        <div className={cn("p-2 rounded-lg bg-zinc-900 border border-zinc-800", status === 'Activo' && "text-emerald-400 border-emerald-500/20")}>
                            <Icon className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-white tracking-tight">{name}</h3>
                            <div className="flex items-center gap-2 mt-1">
                                <div className={cn("w-1.5 h-1.5 rounded-full", getStatusColor(status), isPulsing && "animate-pulse")}></div>
                                <span className={cn("text-[10px] uppercase tracking-widest", status === 'Mantenimiento' ? "text-amber-500" : "text-zinc-500")}>
                                    {status}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Actions Menu */}
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => onAction?.('refresh')} className="p-1.5 hover:bg-zinc-800 rounded text-zinc-500 hover:text-white transition-colors" title="Reload System">
                            <RefreshCw className="w-3.5 h-3.5" />
                        </button>
                        <button onClick={() => onAction?.('logs')} className="p-1.5 hover:bg-zinc-800 rounded text-zinc-500 hover:text-white transition-colors" title="View Logs">
                            <TerminalSquare className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-400 font-light leading-relaxed border-l-2 border-zinc-800 pl-3">
                    {description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-800/50">
                    {metrics.map((metric, idx) => (
                        <div key={idx} className="space-y-1">
                            <p className="text-[10px] uppercase tracking-wider text-zinc-600 font-mono">{metric.label}</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-xl font-light text-white">{metric.value}</span>
                                {metric.trend && (
                                    <span className={cn("text-[10px]",
                                        metric.trend === 'up' ? "text-emerald-500" :
                                            metric.trend === 'down' ? "text-red-500" : "text-zinc-500"
                                    )}>
                                        {metric.trend === 'up' ? '↑' : metric.trend === 'down' ? '↓' : '•'} {metric.trendValue}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Activity Line (Decorative) */}
                <div className="h-0.5 w-full bg-zinc-800/50 mt-4 overflow-hidden rounded-full">
                    <div className={cn("h-full bg-emerald-500/50 w-1/3 animate-[shimmer_2s_infinite]", status === 'Mantenimiento' && "bg-amber-500/50")}></div>
                </div>
            </div>
        </div>
    );
}
