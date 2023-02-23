import React, { ReactNode } from 'react'
import "./Container.css";
import giga from "./img/giga.jpg";
type containerProps = {
    children: ReactNode
}
export const Container = (props : containerProps) => {
  return (
    <div className='card'>
        {props.children}
        <img src={giga} alt="giga" />

        
    </div>

  )
}
