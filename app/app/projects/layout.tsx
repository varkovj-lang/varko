import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Projects",
    description: "Portafolio de proyectos activos y finalizados.",
};

export default function ProjectsLayout({
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
