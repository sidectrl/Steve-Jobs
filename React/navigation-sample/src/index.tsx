import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Characters } from './components/Characters/Characters';
import SingleCharacter from './components/SingleCharacter/SingleCharacter';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<BrowserRouter>
    <Routes>
      <Route path="characters" element={<><div style={{display:'flex', justifyContent:'space-between'}}><p><Characters/></p><Outlet /></div></>}>
        <Route
          index  
        />
        <Route path=":id" element={<><SingleCharacter/></>} />
      </Route>
    </Routes>
  </BrowserRouter>
);