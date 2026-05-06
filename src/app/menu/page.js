
// Helper Function

import AddToCartButton from "../components/AddToCartButton";

async function getMenu() {
    const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/menu`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch menu');
    }
    return res.json();
}

// Menu Page Server Component

export default async function MenuPage() {
    const data = await getMenu();

    return (
        <main className="container mx-auto px-4">
            <h1 className="text-3xl font-bold my-8">Menu Page</h1>
            <p>Welcome to the Menu Page</p>
            {data.pizzas.map(pizza => (
                <div key={pizza.id}>
                    <h2>{pizza.name}</h2>
                    <p>{pizza.description}</p>
                    <p>${pizza.price.toFixed(2)}</p>
                    <AddToCartButton pizza={pizza} />
                </div>
            ))}
        </main>
    )
}