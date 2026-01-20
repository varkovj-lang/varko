'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Folder, Shield, Cpu, Lightbulb, Mail, MoreHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MAIN_ITEMS = [
    { name: 'Overview', path: '/app/overview', icon: LayoutDashboard },
    { name: 'Projects', path: '/app/projects', icon: Folder },
    { name: 'Strategy', path: '/app/strategy', icon: Shield },
    { name: 'Systems', path: '/app/systems', icon: Cpu },
];

const SECONDARY_ITEMS = [
    { name: 'Insights', path: '/app/insights', icon: Lightbulb },
    { name: 'Contact', path: '/app/contact', icon: Mail },
];

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const triggerHaptic = () => {
        if (typeof window !== 'undefined' && window.navigator.vibrate) {
            window.navigator.vibrate(10);
        }
    };

    // Close menu when path changes
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsOpen(false);
    }, [pathname]);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <div className="md:hidden">
            {/* Top Branding (Minimal) */}
            <header className="fixed top-0 left-0 right-0 h-14 bg-black/80 backdrop-blur-md border-b border-white/5 z-50 flex items-center px-6">
                <h1 className="text-sm font-bold tracking-[0.3em] text-white uppercase">VARKO</h1>
            </header>

            {/* Bottom Tab Bar */}
            <nav className="fixed bottom-0 left-0 right-0 h-[calc(4.5rem+env(safe-area-inset-bottom))] bg-black/90 backdrop-blur-xl border-t border-white/10 z-50 px-4 pb-[env(safe-area-inset-bottom)]">
                <div className="grid grid-cols-5 h-full items-center">
                    {MAIN_ITEMS.map((item) => {
                        const isActive = pathname.startsWith(item.path);
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={triggerHaptic}
                                className={cn(
                                    "flex flex-col items-center justify-center gap-1.5 transition-all duration-300",
                                    isActive ? "text-white" : "text-zinc-500"
                                )}
                            >
                                <div className={cn(
                                    "p-1 rounded-lg transition-colors",
                                    isActive ? "bg-white/5" : "bg-transparent"
                                )}>
                                    <Icon className={cn("w-5 h-5", isActive && "text-emerald-500")} />
                                </div>
                                <span className="text-[10px] font-medium uppercase tracking-widest">{item.name.substring(0, 4)}</span>
                            </Link>
                        );
                    })}

                    {/* More Button */}
                    <button
                        onClick={() => {
                            setIsOpen(!isOpen);
                            triggerHaptic();
                        }}
                        className={cn(
                            "flex flex-col items-center justify-center gap-1.5 transition-all duration-300",
                            isOpen ? "text-white" : "text-zinc-500"
                        )}
                    >
                        <div className={cn(
                            "p-1 rounded-lg transition-colors",
                            isOpen ? "bg-white/5" : "bg-transparent"
                        )}>
                            {isOpen ? <X className="w-5 h-5" /> : <MoreHorizontal className="w-5 h-5" />}
                        </div>
                        <span className="text-[10px] font-medium uppercase tracking-widest">More</span>
                    </button>
                </div>
            </nav>

            {/* More Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed inset-0 bg-black/95 z-40 pt-24 px-8"
                    >
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-[10px] text-zinc-500 uppercase tracking-[0.4em] mb-8">Additional Channels</h2>
                                <div className="grid grid-cols-1 gap-4">
                                    {SECONDARY_ITEMS.map((item) => {
                                        const isActive = pathname.startsWith(item.path);
                                        const Icon = item.icon;
                                        return (
                                            <Link
                                                key={item.path}
                                                href={item.path}
                                                onClick={triggerHaptic}
                                                className={cn(
                                                    "flex items-center gap-6 py-6 border-b border-white/5 group",
                                                    isActive ? "text-white" : "text-zinc-400"
                                                )}
                                            >
                                                <Icon className={cn("w-6 h-6 transition-colors", isActive ? "text-emerald-500" : "text-zinc-800 group-hover:text-zinc-600")} />
                                                <span className="text-2xl font-light tracking-widest uppercase">{item.name}</span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="absolute bottom-28 left-8">
                                <div className="text-[10px] text-zinc-700 uppercase tracking-[0.4em] leading-relaxed">
                                    Strategic Control System <br />
                                    Internal Protocol v2026.1.20 <br />
                                    Access Level: Restricted
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Spacer for Top Bar */}
            <div className="h-14"></div>
        </div>
    );
}
