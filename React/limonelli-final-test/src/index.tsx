import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Classes } from './components/Characters/Characters';
import SingleCharacter from './components/Character/Character';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<BrowserRouter>
    <Routes>
      <Route path="classes" element={<><div style={{display:'flex'}}><p><Classes/></p><Outlet /></div></>}>
        <Route
          index  
        />
        <Route path=":index" element={<div style={{paddingLeft:'10%'}}><SingleCharacter/></div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
