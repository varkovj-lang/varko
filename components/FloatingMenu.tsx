'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
    Menu,
    X,
    LayoutDashboard,
    Lightbulb,
    Mail,
    Command,
    Search,
    ChevronRight,
    Lock
} from 'lucide-react';

const NODES = [
    { name: 'VARKO Main', path: '/', icon: LayoutDashboard, description: 'Panel de control principal del sistema' },
    { name: 'Insights Hub', path: '/insights', icon: Lightbulb, description: 'Análisis estratégico e ingeniería' },
    { name: 'Terminal de Contacto', path: '/contact', icon: Mail, description: 'Solicitud de evaluación estratégica' },
];

export function FloatingMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Close menu when path changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Keyboard shortcut to open (Cmd/Ctrl + K)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 z-[60] w-14 h-14 rounded-full glass border border-emerald-500/30 flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 md:bottom-12 md:right-12"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <Command className="w-6 h-6 text-emerald-500" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
            </motion.button>

            {/* Overlay Menu */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                        />

                        {/* Menu Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/5 shadow-2xl overflow-hidden"
                            style={{ borderRadius: '0.5rem' }}
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center">
                                        <Search className="w-4 h-4 text-emerald-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold tracking-[0.2em] text-white uppercase">System Nodes</h3>
                                        <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Arquitectura VARKO v3.5</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/5 rounded-full transition-colors group"
                                >
                                    <X className="w-5 h-5 text-zinc-500 group-hover:text-white" />
                                </button>
                            </div>

                            {/* Node List */}
                            <div className="p-4 max-h-[60vh] overflow-y-auto custom-scrollbar">
                                <div className="grid gap-2">
                                    {NODES.map((node) => {
                                        const isActive = pathname === node.path;
                                        return (
                                            <Link
                                                key={node.path}
                                                href={node.path}
                                                className={cn(
                                                    "group flex items-center gap-4 p-4 transition-all duration-300 rounded-sm border",
                                                    isActive
                                                        ? "bg-emerald-500/5 border-emerald-500/20 text-white"
                                                        : "bg-transparent border-transparent hover:bg-white/[0.03] hover:border-white/5 text-zinc-400 hover:text-white"
                                                )}
                                            >
                                                <div className={cn(
                                                    "w-12 h-12 flex items-center justify-center transition-colors duration-500",
                                                    isActive ? "text-emerald-500" : "group-hover:text-emerald-400"
                                                )}>
                                                    <node.icon className="w-6 h-6" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-xs font-bold tracking-[0.2em] uppercase mb-1">{node.name}</div>
                                                    <div className="text-[10px] text-zinc-500 group-hover:text-zinc-400 tracking-wide uppercase font-mono">
                                                        {node.description}
                                                    </div>
                                                </div>
                                                <ChevronRight className={cn(
                                                    "w-4 h-4 transition-all duration-500",
                                                    isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-40 group-hover:translate-x-0"
                                                )} />
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Footer / Shortcut Hint */}
                            <div className="p-6 border-t border-white/5 bg-white/[0.01] flex justify-between items-center text-[10px] font-mono tracking-widest text-zinc-600 uppercase">
                                <div className="flex items-center gap-4">
                                    <span>Esc para cerrar</span>
                                    <div className="h-4 w-px bg-zinc-800" />
                                    <div className="flex items-center gap-1">
                                        <span className="px-1.5 py-0.5 border border-zinc-800 rounded bg-black">CMD</span>
                                        <span>+</span>
                                        <span className="px-1.5 py-0.5 border border-zinc-800 rounded bg-black">K</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span>Sistema Operativo</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
