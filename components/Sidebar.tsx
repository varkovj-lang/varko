'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { LayoutDashboard, Lightbulb, Mail, ArrowRight } from 'lucide-react';
import { InstallApp } from './InstallApp';

const MENU_ITEMS = [
    { name: 'VARKO', path: '/', icon: LayoutDashboard },
    { name: 'Insights', path: '/insights', icon: Lightbulb },
    { name: 'Contact', path: '/contact', icon: Mail },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-black text-sidebar-foreground hidden md:flex flex-col border-r border-white/5 z-50">
            {/* Logo Section */}
            <div className="p-10">
                <Link href="/" className="group inline-block">
                    <h1 className="text-3xl font-bold tracking-[0.2em] text-white uppercase transition-transform duration-500 group-hover:scale-105">
                        VARKO
                    </h1>
                    <div className="h-[2px] w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full mt-1"></div>
                </Link>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 px-6 space-y-4 pt-10">
                <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-mono mb-8 px-4">
                    Menu Principal
                </div>
                {MENU_ITEMS.map((item) => {
                    const isHome = item.path === '/';
                    const isActive = isHome ? pathname === '/' : pathname.startsWith(item.path);

                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "group relative flex items-center gap-4 px-4 py-3 text-xs font-medium tracking-[0.2em] uppercase transition-all duration-500 rounded-sm",
                                isActive
                                    ? "text-white bg-white/5 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]"
                                    : "text-zinc-500 hover:text-white hover:bg-white/[0.02]"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="sidebar-active"
                                    className="absolute left-0 w-1 h-2/3 bg-emerald-500 rounded-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <item.icon className={cn(
                                "w-4 h-4 transition-all duration-500",
                                isActive ? "text-emerald-500 scale-110" : "group-hover:text-emerald-400 group-hover:scale-110"
                            )} />
                            <span>{item.name}</span>
                            {!isActive && (
                                <ArrowRight className="w-3 h-3 ml-auto opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-40 group-hover:translate-x-0" />
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Sidebar Footer */}
            <div className="p-10 space-y-4">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <InstallApp variant="sidebar" />
                <div className="flex flex-col gap-2 pt-2">
                    <span className="text-[10px] text-zinc-700 tracking-[0.4em] uppercase font-mono">
                        V3.5 INTERNAL
                    </span>
                    <span className="text-[9px] text-zinc-800 tracking-[0.1em] uppercase font-mono leading-tight">
                        Protocolo de Eficiencia Activo
                    </span>
                </div>
            </div>
        </aside>
    );
}
