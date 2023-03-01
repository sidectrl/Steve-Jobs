import React, { ReactNode, useState } from 'react'
import './Card.css'
type CardProps = {
    product: string,
    price: number,
    description: string,
    index: number
}

export const Card = ({ product, description, price, index}: CardProps) => {
    const [x, setX] = useState(0);
    return (
        <div className="card-body">
            <h5 className="card-title">{product}</h5>
            <p className="card-text">{description}</p>
            <p>{price}€</p>
            <div className='price d-flex align-items-center justify-content-center'>
                <button className='btn btn-primary' onClick={() => setX(x > 0 ? x - 1 : x)}>-</button>
                <p className='quant'>{x}</p>
                <button className='btn btn-primary' onClick={() => setX(x + 1)}>+</button>
            </div>
        </div>
    )
}
