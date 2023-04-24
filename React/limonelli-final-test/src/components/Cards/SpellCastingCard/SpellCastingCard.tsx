import React from 'react'
import { useLocation } from 'react-router-dom';
import { useSpellCasting } from '../../../hooks/useSpellCasting';
const SpellCastingCard = () => {
    var { pathname } = useLocation();
  pathname += '/spellcasting'
  const [spellCasting,] = useSpellCasting(pathname)
    return (
        <div>    
          <h4>Spell Casting</h4>
          <p>Level: {spellCasting?.level}</p>
          <h3>Spellcasting Ability</h3>
          <p>Index: {spellCasting?.spellcasting_ability.index}</p>
          <p>Name: {spellCasting?.spellcasting_ability.name}</p>
          <p>URL: {spellCasting?.spellcasting_ability.url}</p>
          <h3>Info</h3>
          {spellCasting?.info?.map((infoItem, index) => (
            <div>
              <h4>{infoItem.name}</h4>
              {infoItem?.desc?.map((descItem, index) => (
                <p key={descItem}>{descItem}</p>
              ))}
            </div>
          ))}
        </div>
      );
    };
export default SpellCastingCard