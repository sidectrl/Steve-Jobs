import React from 'react'
import { useClasses } from '../../hooks/useClasses';
import { Link, useLocation} from 'react-router-dom';
import './Character.css';

export const Classes = () => {
  const [characters, , isLoading] = useClasses();
  const { pathname } = useLocation();

  return (
    <div className='character--list'>
      <h2>Character List</h2>
      {/*pathname*/}
      {isLoading && <p>loading</p>}
      {!isLoading && (
        <ul>
          {characters.map((character) => (
            <Link to={String(character.index)} key={character.index}>
              <li>{character.name}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Classes;
