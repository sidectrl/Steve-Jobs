import React, { useState } from 'react';
import './App.css';
import City from './components/City/City';

function App() {
  const [cityName, setCityName] = useState('catania');
  return (
    <>
    <input id='cityBox' type="text"/>
    <button onClick={() => {
      const cityInput = document.getElementById('cityBox') as HTMLInputElement;
      setCityName(cityInput.value);
      console.log(cityInput.value);
    }}>Search</button>
    <City 
    name={cityName}
    />
    </>
  );
}

export default App;
