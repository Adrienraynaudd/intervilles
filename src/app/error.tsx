"use client";


export default function Error({
}: {
}) {

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black text-center gap-6">
                <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
                    Une erreur s'est produite
                </h2>
                <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    Nous n'avons pas pu charger cette page correctement.
                </p>
            </main>
        </div>
    );
}