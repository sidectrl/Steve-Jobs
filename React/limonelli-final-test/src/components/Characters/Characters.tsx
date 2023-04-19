import React from 'react'
import { Link, useLocation} from 'react-router-dom';
import '../Styles/StyleInterface.css';
import { Monster } from '../../models/Monster';
import { Character } from '../../models/Character';

type ClassesProps = {
  customHook: [Character[] | Monster[], Function, boolean]
}

export const Classes = ({customHook} :ClassesProps) => {
  const [items, , isLoading] = customHook;
  const { pathname } = useLocation();

  return (
    <div className='items--list'>
      <p>{pathname}</p>
      <h2>item List</h2>
      {isLoading && <p>loading</p>}
      {!isLoading && (
        <ul>
          {items.map((item) => (
            <Link to={String(item.index)} key={item.index}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Classes;
