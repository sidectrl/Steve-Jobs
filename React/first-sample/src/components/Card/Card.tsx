import React from 'react'
import './Card.css'
export const Card = ({ product, price, description }: any) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{product}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">{price}</a>
            </div>
        </div>
    )
}
