import React, { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/Card/Card';
import { Container } from './components/Container/Container';

export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
  qty: number
}

export type Rating = {
  rate: number,
  count: number
}



const App = () => {
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState<Product[]>([])
  useEffect(() => {
    console.log("array vuoto");
  }, [])

  useEffect(() => {
    console.log("senza array");
  })

  useEffect(() => {
    setPrice(items.reduce((acc, { price, qty }) => acc + price * qty, 0));
  }, [items]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data: Product[] = await response.json();
        data.map((item) => item.qty = 0);
        setItems(data);
        // process data here
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  return (
    <>

      <h1>{price}</h1>
      <div className='d-flex flex-wrap'>
        {items.map((item, index) =>
          <Container>
            <Card setItems={setItems} product={item} index={index}></Card>
          </Container>
        )}
      </div>
    </>
  )
}

export default App;
