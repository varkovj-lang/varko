import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Core Strategy",
    description: "Directrices centrales de marca y posicionamiento.",
};

export default function StrategyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}
