import React from 'react';
import './App.css';
import { Card } from './components/Card/Card';
import { Container } from './components/Container/Container';

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
    <div className='container d-flex'>
      {items.map(({product, price, description}) =>
        <Container>
          <Card product={product}
            price={price}
            description={description} />
        </Container>
      )}
    </div>
  )
}

export default App;
