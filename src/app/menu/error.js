"use client";

export default function MenuError({error}) {
    return (
        <main className="container mx-auto px-4">
            <h1 className="text-3xl font-bold my-8">Error Loading Menu</h1>
            <p>Sorry, there was an error loading the menu. Please try again later.</p>
            <p className="text-red-500 mt-4">{error.message}</p>
        </main>
    );
}