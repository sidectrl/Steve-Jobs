import React, { ReactNode } from 'react'
import './Card.css'
type CardProps = {
    product: string,
    price: number,
    description: string,
    quantity: number,
    setX: Function

}

export const Card = ({ product, description, price, quantity, setX }: CardProps) => {
    return (
        <div className="card-body">
            <h5 className="card-title">{product}</h5>
            <p className="card-text">{description}</p>
            <p>{price}€</p>
            <div className='price d-flex align-items-center justify-content-center'>
                <button className='btn btn-primary' onClick={() => setX(quantity > 0 ? quantity - 1 : quantity)}>-</button>
                <p className='quant'>{quantity}</p>
                <button className='btn btn-primary' onClick={() => setX(quantity + 1)}>+</button>
            </div>

        </div>
    )
}
