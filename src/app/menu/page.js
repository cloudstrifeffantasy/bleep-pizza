
export default async function MenuPage() {

    const res = await fetch("http://localhost:3000/api/menu");
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