'use client';

import { useState, useEffect } from 'react';
import { Download, Laptop, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InstallAppProps {
    className?: string;
    variant?: 'sidebar' | 'mobile' | 'floating';
}

export function InstallApp({ className, variant = 'sidebar' }: InstallAppProps) {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [isInstallable, setIsInstallable] = useState(false);
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        const handler = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setIsInstallable(true);
        };

        window.addEventListener('beforeinstallprompt', handler);

        // Check for iOS
        const isDeviceIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
        // Check if already in standalone mode
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;

        if (isDeviceIOS && !isStandalone) {
            setIsIOS(true);
        }

        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            setDeferredPrompt(null);
            setIsInstallable(false);
        }
    };

    if (!isInstallable && !isIOS) return null;

    if (variant === 'mobile') {
        return (
            <button
                onClick={isIOS ? () => alert("Para instalar en iOS: pulsa el botón 'Compartir' y luego 'Agregar a Inicio'.") : handleInstallClick}
                className={cn(
                    "flex flex-col items-center justify-center gap-1 text-zinc-500 hover:text-emerald-500 transition-colors",
                    className
                )}
            >
                <div className="p-1.5 rounded-lg bg-transparent hover:bg-emerald-500/10 transition-colors">
                    <Download className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{isIOS ? 'Instalar' : 'App'}</span>
            </button>
        );
    }

    if (variant === 'floating') {
        return (
            <div onClick={isIOS ? () => alert("Para instalar en iOS: pulsa el botón 'Compartir' y luego 'Agregar a Inicio'.") : handleInstallClick}
                className={cn(
                    "group flex items-center gap-4 p-4 transition-all duration-300 rounded-sm border bg-emerald-900/10 border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 cursor-pointer",
                    className
                )}
            >
                <div className="w-12 h-12 flex items-center justify-center">
                    <Download className="w-6 h-6 animate-bounce" />
                </div>
                <div className="flex-1">
                    <div className="text-xs font-bold tracking-[0.2em] uppercase mb-1">Instalar Aplicación</div>
                    <div className="text-[10px] text-zinc-400 group-hover:text-zinc-300 tracking-wide uppercase font-mono">
                        {isIOS ? 'Disponible para iOS' : 'Descargar para escritorio/móvil'}
                    </div>
                </div>
            </div>
        );
    }

    // Sidebar Variant (Desktop)
    return (
        <button
            onClick={handleInstallClick}
            className={cn(
                "group flex items-center gap-3 px-4 py-3 w-full mt-4 border border-zinc-800 rounded-lg hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300",
                className
            )}
        >
            <div className="p-2 rounded bg-zinc-900 group-hover:bg-emerald-500/10 transition-colors">
                <Laptop className="w-4 h-4 text-zinc-500 group-hover:text-emerald-500" />
            </div>
            <div className="flex flex-col items-start gap-0.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                    Instalar App
                </span>
                <span className="text-[8px] text-zinc-600 font-mono group-hover:text-emerald-500/80 transition-colors">
                    Versión de Escritorio
                </span>
            </div>
        </button>
    );
}
