import React from 'react'
import { Link, useLocation} from 'react-router-dom';
import '../../Styles/StyleInterface.css';
import { Monster } from '../../../models/Monster';
import { Character } from '../../../models/Character';
import { Race } from '../../../models/Race';

type ClassesProps = {
  customHook: [Character[] | Monster[]| Race[], Function, boolean]
}

export const ElementListCard = ({customHook} :ClassesProps) => {
  const [items, , isLoading] = customHook;
  const { pathname } = useLocation();
  return (
    <div className='items--list'>
      <p>{pathname}</p>
      <h2>Item List</h2>
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

