'use client';

import { useState } from 'react';
import { Share2, Link2, Twitter, MessageSquare, Mail, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface ShareArticleProps {
    title: string;
    text: string;
    url: string;
    className?: string;
    variant?: 'text' | 'icon';
}

export function ShareArticle({ title, text, url, className, variant = 'icon' }: ShareArticleProps) {
    const [copied, setCopied] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const fullUrl = typeof window !== 'undefined' ? `${window.location.origin}${url}` : url;

    const handleNativeShare = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (navigator.share) {
            try {
                await navigator.share({
                    title,
                    text,
                    url: fullUrl,
                });
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            setIsOpen(!isOpen);
        }
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(fullUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const shareOptions = [
        {
            name: 'Copy',
            icon: copied ? Check : Link2,
            onClick: copyToClipboard,
            color: 'text-zinc-300 hover:text-white',
        },
        {
            name: 'X',
            icon: Twitter,
            onClick: () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(fullUrl)}`, '_blank'),
            color: 'text-zinc-300 hover:text-[#1DA1F2]',
        },
        {
            name: 'WA',
            icon: MessageSquare,
            onClick: () => window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + fullUrl)}`, '_blank'),
            color: 'text-zinc-300 hover:text-[#25D366]',
        },
        {
            name: 'Email',
            icon: Mail,
            onClick: () => window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text + ' ' + fullUrl)}`),
            color: 'text-zinc-300 hover:text-white',
        },
    ];

    return (
        <div className={cn("relative z-50", className)}>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNativeShare}
                className={cn(
                    "flex items-center justify-center rounded-full transition-all duration-300 outline-none focus:outline-none",
                    variant === 'icon'
                        ? "w-10 h-10 bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-600 text-zinc-400 hover:text-white"
                        : "gap-2 px-4 py-2 bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-white/10"
                )}
            >
                <Share2 className={cn("transition-transform", variant === 'icon' ? "w-4 h-4" : "w-3.5 h-3.5")} />
                {variant === 'text' && <span>Compartir</span>}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 top-full mt-2 p-2 bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl flex items-center gap-1 min-w-[180px] z-[60]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {shareOptions.map((option) => (
                            <button
                                key={option.name}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    option.onClick();
                                    if (option.name !== 'Copy') setIsOpen(false);
                                }}
                                className={cn(
                                    "p-2 rounded-lg transition-colors hover:bg-zinc-800",
                                    option.color
                                )}
                                title={option.name}
                            >
                                <option.icon className="w-4 h-4" />
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
