import { Sidebar } from '@/components/Sidebar';
import { MobileNav } from '@/components/MobileNav';
import { PageTransition } from '@/components/PageTransition';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row">
            <Sidebar />
            <MobileNav />
            <main className="flex-1 md:ml-64 p-8 md:p-12 lg:p-16 pb-32 md:pb-12 lg:pb-16 transition-all duration-300 ease-out">
                <div className="max-w-7xl mx-auto">
                    <PageTransition>
                        {children}
                    </PageTransition>
                </div>
            </main>
        </div>
    );
}
