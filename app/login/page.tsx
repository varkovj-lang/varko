import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
            <div className="max-w-md w-full space-y-12 animate-in fade-in duration-700">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-[0.2em] uppercase">Varko</h1>
                    <div className="h-px w-12 bg-white/20"></div>
                    <p className="text-zinc-500 text-sm uppercase tracking-widest pt-2">System Access</p>
                </div>

                <form className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs uppercase tracking-widest text-zinc-500">Identity</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="ACCESS ID"
                                className="w-full bg-transparent border-b border-zinc-800 py-2 text-white placeholder:text-zinc-800 focus:outline-none focus:border-white transition-colors"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="text-xs uppercase tracking-widest text-zinc-500">Key</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-transparent border-b border-zinc-800 py-2 text-white placeholder:text-zinc-800 focus:outline-none focus:border-white transition-colors"
                            />
                        </div>
                    </div>

                    <Link
                        href="/app/overview"
                        className="block w-full bg-white text-black py-4 text-center text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors"
                    >
                        Enter System
                    </Link>
                </form>

                <p className="text-[10px] text-zinc-800 uppercase tracking-widest text-center">
                    Restricted Access / Authorized Personnel Only
                </p>
            </div>
        </div>
    );
}
