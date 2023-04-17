import React from 'react'
import { useClasses } from '../../hooks/useClasses';
import { Link, useLocation} from 'react-router-dom';
export const Classes = () => {
  const [characters, , isLoading] = useClasses();
  const { pathname } = useLocation();

  return (
    <div >
      {pathname}
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
