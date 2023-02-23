import React from 'react';
import './App.css';
import { Card } from './components/Card/Card';

const items = [{
  product: 'Samsung Galaxy',
  price: 3000,
  description: "Nuovo di gamma con 69px di fotocamera"
},
{
  product: 'iPhone SuperIperProMax PLUS',
  price: 15700,
  description: "Nuovo di gamma con 2px di fotocamera"
}
]
function App() {
  return (
    <div>
    {items.map(item =>
      <Card
        product={item.product}
        price={item.price}
        description={item.description} />)}
    </div>
  )
}

export default App;
