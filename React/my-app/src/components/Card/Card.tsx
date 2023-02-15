import React from 'react'
import './Card.css'
export const Card = () => {
    return (
        <div className="card bg">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <img src="https://essereuomo.it/wp-content/uploads/2021/10/sdsdsd.jpg" style={{height : '10rem'}} alt="giganigga"/>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
