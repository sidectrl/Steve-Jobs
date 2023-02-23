import React from 'react'
import './Card.css'
type CardProps = {
    product: string,
    price: number,
    description: string,
}

export const Card = ({product, description, price}: CardProps) => {
    return (
        <div className="card-body">
            <h5 className="card-title">{product}</h5>
            <p className="card-text">{description}</p>
            <a className="btn btn-primary">{price}€</a>
        </div>
    )
}
