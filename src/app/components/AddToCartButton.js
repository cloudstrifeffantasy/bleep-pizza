'use client';

import { useState } from 'react'

export default function AddToCartButton({pizza}) {
    const [added, setAdded] = useState(false)

    const handleClick = () => {
        setAdded(true)
    }

    return (
        <button 
            onClick={handleClick}
            className={`px-4 py-2 rounded ${added ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}
        >
            {added ? 'Added to cart' : 'Add to cart'}
        </button>
    )
}