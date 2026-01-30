'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Lightbulb, Mail, Command } from 'lucide-react';
import { InstallApp } from './InstallApp';

const MAIN_ITEMS = [
    { name: 'VARKO', path: '/', icon: LayoutDashboard },
    { name: 'Insights', path: '/insights', icon: Lightbulb },
    { name: 'Contact', path: '/contact', icon: Mail },
];

export function MobileNav() {
    const pathname = usePathname();

    const triggerHaptic = () => {
        if (typeof window !== 'undefined' && window.navigator.vibrate) {
            window.navigator.vibrate(10);
        }
    };

    return (
        <div className="md:hidden">
            {/* Top Branding (Minimal Glassy) */}
            <header className="fixed top-0 left-0 right-0 h-16 glass-dark z-50 flex items-center justify-between px-6 border-b border-white/5">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    <h1 className="text-sm font-bold tracking-[0.4em] text-white uppercase">VARKO</h1>
                </Link>
                <div className="flex items-center gap-4">
                    <div className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest hidden sm:block">v3.5 Build</div>
                    <InstallApp variant="mobile" />
                </div>
            </header>

            {/* Bottom Tab Bar (Glassy) */}
            <nav className="fixed bottom-0 left-0 right-0 h-[calc(4.5rem+env(safe-area-inset-bottom))] glass-dark z-50 px-6 pb-[env(safe-area-inset-bottom)] border-t border-emerald-500/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
                <div className="grid grid-cols-3 h-full items-center gap-4">
                    {MAIN_ITEMS.map((item) => {
                        const isHome = item.path === '/';
                        const isActive = isHome ? pathname === '/' : pathname.startsWith(item.path);

                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={triggerHaptic}
                                className={cn(
                                    "flex flex-col items-center justify-center gap-1.5 transition-all duration-500 relative py-2",
                                    isActive ? "text-white scale-110" : "text-zinc-500"
                                )}
                            >
                                {isActive && (
                                    <div className="absolute top-0 w-8 h-[2px] bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] rounded-full" />
                                )}
                                <div className={cn(
                                    "p-1.5 rounded-lg transition-all duration-500",
                                    isActive ? "bg-emerald-500/10" : "bg-transparent hover:bg-white/5"
                                )}>
                                    <Icon className={cn("w-5 h-5 transition-transform", isActive ? "text-emerald-500 scale-110" : "text-zinc-500 group-hover:text-zinc-300")} />
                                </div>
                                <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{item.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Spacer for Top Bar */}
            <div className="h-16"></div>
        </div>
    );
}
