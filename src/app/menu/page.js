
export default async function MenuPage() {

    //const res = await fetch("http://localhost:3000/api/menu");
    //const data = await res.json();

    const pizzas = [
        { id: 1, name: "Margherita", description: "A classic Italian pizza with tomato sauce, mozzarella, and fresh basil." },
        { id: 2, name: "Pepperoni", description: "A spicy pizza with tomato sauce, mozzarella, and slices of pepperoni." },
        { id: 3, name: "Veggie Delight", description: "A colorful pizza with a variety of vegetables and mozzarella." }
    ];

    return (
        <main className="container mx-auto px-4">
            <h1 className="text-3xl font-bold my-8">Menu Page</h1>
            <p>Welcome to the Menu Page</p>
            {pizzas.map(pizza => (
                <div key={pizza.id}>
                    <h2>{pizza.name}</h2>
                    <p>{pizza.description}</p>
                </div>
            ))}
        </main>
    )
}