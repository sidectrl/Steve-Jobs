import React from 'react';
import { Product } from '../../App';
import './Card.css';

type CardProps = { setItems: Function, product: Product, index: number };



export const Card = (props: CardProps) => {
  const product = props.product;
  const changeQty = (value: number) => {
    props.setItems((prevState: Product[]) => {
      prevState[props.index].qty = Math.max(prevState[props.index].qty + value, 0);
      return [...prevState];
    })
  }

  return (

    <div className="card justify-content-center align-items-center" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{product.category} {props.index}</h5>
        <img src={product.image} alt="Image" />
        <p className="card-text">{product.description}</p>
        <a href="#" className="btn btn-primary justify-content-center align-items-center d-flex">€{product.price}</a>
        <hr></hr>
        <div className='d-flex justify-content-center align-items-center'>
          <button className='btn btn-primary' onClick={() => changeQty(-1)}>-</button>
          <span>{product.qty}</span>
          <button className='btn btn-primary' onClick={() => changeQty(1)}>+</button>

        </div>
      </div>
    </div>
  )
}
