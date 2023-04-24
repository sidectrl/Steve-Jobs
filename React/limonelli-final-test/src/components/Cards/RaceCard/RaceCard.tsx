import React from 'react';
import { useParams } from 'react-router-dom';
import { useRace } from '../../../hooks/Race/useRace';

export const RaceCard = () => {
    
    const { index } = useParams() as { index: string };
    const [race] = useRace(index);
    return (
        <div>
            <h2> {race?.name ?? 'Name'}</h2>
            <p>Speed: {race?.speed}</p>
            <p>Age: {race?.age}</p>
            <p>Alignment: {race?.alignment}</p>
            <p>Size: {race?.size}</p>
            <p>Size Description: {race?.size_description}</p>
            <p>Language Description: {race?.language_desc}</p>
            <h3>Ability Bonuses:</h3>
            <ul>
                {race?.ability_bonuses.map((bonus) => (
                    <li key={bonus?.ability_score.index}>
                        {bonus?.ability_score.name}: {bonus?.bonus}
                    </li>
                ))}
            </ul>
            <h3>Starting Proficiencies:</h3>
            <ul>
                {race?.starting_proficiencies.map((proficiency) => (
                    <li key={proficiency.index}>{proficiency.name}</li>
                ))}
            </ul>
            <h3>Languages:</h3>
            <ul>
                {race?.languages.map((language) => (
                    <li key={language.index}>{language?.name}</li>
                ))}
            </ul>
            <h3>Traits:</h3>
            <ul>
                {race?.traits.map((trait) => (
                    <li key={trait.index}>{trait.name}</li>
                ))}
            </ul>
            <h3>Subraces:</h3>
            <ul>
                {race?.subraces.map((subrace) => (
                    <li key={subrace.index}>{subrace.name}</li>
                ))}
            </ul>
        </div>
    );
};

