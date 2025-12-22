import { NextResponse } from "next/server";

const pizzas = [
    { id: 1, name: "Margherita", price: 10, description: "A classic Italian pizza with tomato sauce, mozzarella cheese, and fresh basil." },
    { id: 2, name: "Pepperoni", price: 12, description: "A spicy Italian pizza with tomato sauce, mozzarella cheese, and pepperoni." },
    { id: 3, name: "Hawaiian", price: 14, description: "A sweet and savory pizza with tomato sauce, mozzarella cheese, ham, and pineapple." }
]

export async function GET() {
    return NextResponse.json({pizzas});
}