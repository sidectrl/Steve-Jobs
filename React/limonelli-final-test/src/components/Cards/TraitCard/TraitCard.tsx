import React from 'react'
import { useTrait } from '../../../hooks/Trait/useTrait';
import { useParams } from 'react-router-dom';

const TraitCard = () => {
    const { index } = useParams() as { index: string };
    const [trait] = useTrait(index);
    return (
        <div>
            <h2>{trait?.name ?? 'Name'}</h2>
            <p>Index: {trait?.index}</p>
            <p>Races:</p>
            <ul>
                {trait?.races.map((race) => (
                    <li key={race.index}>
                        {race.name}
                    </li>
                ))}
            </ul>
            <p>Subraces:</p>
            <ul>
                {trait?.subraces?.map((subrace, i) => (
                    <li key={i}>{subrace.name}</li>
                ))}
            </ul>
            <p>Description:</p>
            <ul>
                {trait?.desc.map((d, i) => (
                    <li key={i}>{d}</li>
                ))}
            </ul>
            <p>Proficiencies:</p>
            <ul>
                {trait?.proficiencies.map((proficiency, i) => (
                    <li key={i}>{proficiency}</li>
                ))}
            </ul>
        </div>
    )
}

export default TraitCard
