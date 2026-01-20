import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "System Status",
    description: "Monitorización de infraestructura y servicios activos.",
};

export default function SystemsLayout({
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
