export default function Loading() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
            <div className="flex flex-col items-center gap-6">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-zinc-200 border-t-foreground dark:border-zinc-800 dark:border-t-zinc-50"></div>
                
                <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                    Chargement...
                </h2>
            </div>
        </div>
    );
}