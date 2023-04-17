import React, { useState } from 'react';
import { useCharacters } from '../../hooks/useCharacters';
import { Link, useLocation, useNavigate } from 'react-router-dom';


export const Characters = () => {
  const [characters, , isLoading] = useCharacters(0);
  const {pathname} = useLocation();
  return (
    <div>
      {pathname}
      {isLoading && <p>loading</p>}
      {!isLoading && <ul>
        {characters.map(item =><Link to={String(item.id)}> <li>{item.name}</li></Link>)}
      </ul>}
    </div>
  )

}
