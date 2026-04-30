import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black text-center gap-6">
                <h1 className="text-6xl font-bold tracking-tight text-black dark:text-zinc-50">
                    404
                </h1>
                <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
                    Page introuvable
                </h2>
                <Link href="/" className="mt-4 flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-8 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium"
                >
                    Retour à l'accueil
                </Link>
            </main>
        </div>
    );
}