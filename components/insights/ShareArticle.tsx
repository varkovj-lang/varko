'use client';

import { useState } from 'react';
import { Share2, Link2, Check, Twitter, Mail, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ShareArticleProps {
    title: string;
    text: string;
    url: string;
    className?: string;
}

export function ShareArticle({ title, text, url, className }: ShareArticleProps) {
    const [copied, setCopied] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const fullUrl = typeof window !== 'undefined' ? `${window.location.origin}${url}` : url;

    const handleNativeShare = async () => {
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
            name: 'Copy Link',
            icon: copied ? Check : Link2,
            onClick: copyToClipboard,
            color: 'bg-zinc-800',
        },
        {
            name: 'Twitter',
            icon: Twitter,
            onClick: () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(fullUrl)}`, '_blank'),
            color: 'bg-[#1DA1F2]/10 text-[#1DA1F2]',
        },
        {
            name: 'WhatsApp',
            icon: MessageSquare,
            onClick: () => window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + fullUrl)}`, '_blank'),
            color: 'bg-[#25D366]/10 text-[#25D366]',
        },
        {
            name: 'Email',
            icon: Mail,
            onClick: () => window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text + ' ' + fullUrl)}`),
            color: 'bg-white/10 text-white',
        },
    ];

    return (
        <div className={cn("relative inline-block", className)}>
            <button
                onClick={handleNativeShare}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300 group"
            >
                <Share2 className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                <span>Compartir</span>
            </button>

            {/* Desktop Popover / Fallback */}
            {isOpen && (
                <div className="absolute bottom-full left-0 mb-4 w-64 bg-zinc-900 border border-white/10 p-4 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-300 z-50">
                    <div className="grid grid-cols-2 gap-3">
                        {shareOptions.map((option) => (
                            <button
                                key={option.name}
                                onClick={() => {
                                    option.onClick();
                                    if (option.name !== 'Copy Link') setIsOpen(false);
                                }}
                                className={cn(
                                    "flex flex-col items-center justify-center gap-2 p-3 rounded-xl transition-all duration-200 hover:scale-105",
                                    option.color
                                )}
                            >
                                <option.icon className="w-5 h-5" />
                                <span className="text-[10px] uppercase tracking-tighter font-medium opacity-80">{option.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
