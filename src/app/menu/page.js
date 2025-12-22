
export default async function MenuPage() {

    console.log(process.env.VERCEL_URL);
    const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";
    const res = await fetch(`https://bleep-pizza.vercel.app/api/menu`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await res.json();

    return (
        <main className="container mx-auto px-4">
            <h1 className="text-3xl font-bold my-8">Menu Page</h1>
            <p>Welcome to the Menu Page</p>
            {data.pizzas.map(pizza => (
                <div key={pizza.id}>
                    <h2>{pizza.name}</h2>
                    <p>{pizza.description}</p>
                </div>
            ))}
        </main>
    )
}