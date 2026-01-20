'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Folder, Shield, Cpu, Lightbulb, Mail } from 'lucide-react';

const MENU_ITEMS = [
    { name: 'Overview', path: '/app/overview', icon: LayoutDashboard },
    { name: 'Projects', path: '/app/projects', icon: Folder },
    { name: 'Strategy', path: '/app/strategy', icon: Shield },
    { name: 'Systems', path: '/app/systems', icon: Cpu },
    { name: 'Insights', path: '/app/insights', icon: Lightbulb },
    { name: 'Contact', path: '/app/contact', icon: Mail },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar text-sidebar-foreground hidden md:flex flex-col border-r border-border">
            <div className="p-8 pb-12">
                <h1 className="text-2xl font-bold tracking-widest text-white uppercase">VARKO</h1>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {MENU_ITEMS.map((item) => {
                    const isActive = pathname.startsWith(item.path);
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "group flex items-center gap-4 px-4 py-3 text-sm font-medium tracking-wide uppercase transition-colors duration-200",
                                isActive
                                    ? "text-sidebar-active"
                                    : "text-sidebar-foreground hover:text-white"
                            )}
                        >
                            <item.icon className={cn("w-4 h-4 transition-colors", isActive ? "text-white" : "text-sidebar-foreground group-hover:text-white")} />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-8 text-xs text-muted-foreground uppercase tracking-widest opacity-50">
                Internal System
            </div>
        </aside>
    );
}
