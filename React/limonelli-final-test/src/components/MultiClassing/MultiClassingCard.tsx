import React from 'react'

import { useLocation } from 'react-router-dom';
import { useMultiClassing } from '../../hooks/useMultiClassing';
const MultiClassingCard = () => {
  var { pathname } = useLocation();
  pathname += '/multi-classing'
  const [multiClassing] = useMultiClassing(pathname)
  console.log(pathname)
  return (
    <div>
      <h4>Prerequisites:</h4>
      <ul>
        {multiClassing?.prerequisites?.map((prerequisite, index) => (
          <li key={index}>
            {prerequisite?.ability_score.name} ({prerequisite?.minimum_score})
          </li>
        ))}
      </ul>
      <h4>Proficiencies:</h4>
      <ul>
        {multiClassing?.proficiencies?.map((proficiency, index) => (
          <li key={index}>{proficiency?.name}</li>
        ))}
      </ul>
      <h4>{multiClassing?.proficiency_choices ? 'Proficiency Choices:' : ''}</h4>
      <ul>
        {multiClassing?.proficiency_choices?.map((choice, index) => (
          <li key={index}>
            {choice.desc} (Choose {choice.choose})
            <ul>
              {choice?.from?.options?.map((option, index) => (
                <li key={index}>{option?.item.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}


export default MultiClassingCard