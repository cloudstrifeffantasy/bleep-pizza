'use client'

import { useState } from 'react'

export default function AddToCartButton({pizza}) {
    const [added, setAdded] = useState(false)

    const handleClick = () => {
        setAdded(true)
    }

    return (
        <button onClick={handleClick}>
            {added ? 'Added to cart' : 'Add to cart'}
        </button>
    )
}