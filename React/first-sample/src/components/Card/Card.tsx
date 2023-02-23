import React from 'react'
import './Card.css'
type CardProps = {
    product: string,
    price:number,
    description:string
}

export const Card = (props : CardProps) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{props.product}</h5>
                <p className="card-text">{props.description}</p>
                <a className="btn btn-primary">{props.price}€</a>
            </div>
        </div>
    )
}
