import React from 'react'
import { useParams } from 'react-router-dom';
import { useMonster } from '../../hooks/useMonster';
import '../Styles/CardStyle.css';

const url = 'https://www.dnd5eapi.co'
const Monster = () => {
    const { index } = useParams() as { index: string };
    const [monster] = useMonster(index);
    console.log(monster);
    return (
        <>
            <div className='container'>
                <h2>Monster: {monster?.name}</h2>
                {monster?.image ? <img src={`${url}${monster?.image}`} alt="Monster_img" /> : ''}
                <p>Size: {monster?.size}</p>
                <p>Type: {monster?.type}</p>
                <p>Alignment: {monster?.alignment}</p>
                <div id='armor_class'>
                    <h4>Amor class:</h4>
                    <ul>
                        {monster?.armor_class.map(iesim =>
                            <>
                                <p>Type: {iesim?.type}</p>
                                <p>Value: {iesim?.value}</p>
                            </>)}
                    </ul>
                </div>
                <p>Hit points: {monster?.hit_points}</p>
                <p>Hit dice: {monster?.hit_dice}</p>
                <p>Hit points roll: {monster?.hit_points_roll}</p>
                <div id='speed'>
                    <h4>Speed: </h4>
                    <ul>
                        <p>Walk: {monster?.speed?.walk ? monster?.speed?.walk : 'null.'}</p>
                        <p>Fly: {monster?.speed?.fly ? monster?.speed?.fly : 'null.'}</p>
                        <p>Swim: {monster?.speed?.swim ? monster?.speed?.swim : 'null.'}</p>
                    </ul>
                </div>
                <p>Strenght: {monster?.strength}</p>
                <p>Dexterity: {monster?.dexterity}</p>
                <p>Costitution: {monster?.constitution}</p>
                <p>Intelligence: {monster?.intelligence}</p>
                <p>Wisdom: {monster?.wisdom}</p>
                <p>Charisma: {monster?.charisma}</p>
                <div id='proficiencies'>
                    <h4>Proficiencies:</h4>
                    <ul>
                        {monster?.proficiencies.map((iesim) =>
                            <li>
                                <p>{iesim?.proficiency?.name} <br />
                                    Value: {iesim?.value}
                                </p>
                            </li>)}
                    </ul>
                </div>
                <div id='damage_vulnerabilities'>
                    <h4>Damage vulnerabilities:</h4>
                    <ul>
                        {monster?.damage_vulnerabilities.map(iesim => <li>{iesim}</li>)}
                    </ul>
                </div>
                <div id='damage_resistances'>
                    <h4>Damage resistance:</h4>
                    <ul>
                        {monster?.damage_resistances.map(iesim => <li>{iesim}</li>)}
                    </ul>
                </div>
                <div id='damage_immunities'>
                    <h4>Damage immunities:</h4>
                    <ul>
                        {monster?.damage_immunities.map(iesim => <li>{iesim}</li>)}
                    </ul>
                </div>
                <div id='condition_immunities'>
                    <h4>Damage immunities:</h4>
                    <ul>
                        {monster?.condition_immunities.map(iesim => <li>{iesim}</li>)}
                    </ul>
                </div>
                <div id='senses'>
                    <h4>Senses:</h4>
                    <ul>
                        <p>Blindsight: {monster?.senses?.blindsight ? monster?.senses?.blindsight : 'null.'}</p>
                        <p>Dark vision: {monster?.senses?.darkvision ? monster?.senses?.darkvision : 'null.'}</p>
                        <p>Passive perception: {monster?.senses?.passive_perception ? monster?.senses?.passive_perception : 'null.'}</p>
                    </ul>
                </div>
                <p>Languages: {monster?.languages}</p>
                <p>Challenge rating: {monster?.challenge_rating}</p>
                <p>XP: {monster?.xp}</p>
                <div id='special_abilities'>
                    <h4>Special abilities:</h4>
                    <ul>
                        {monster?.special_abilities.map((iesim) =>
                            <li>
                                <p>{iesim?.name} <br />
                                    Desc: {iesim?.desc}
                                </p>
                                {iesim.usage ? <p>usage: <br/><ul>type: {iesim?.usage.type} <br/> times: {iesim?.usage.times} <br/> rest types: {iesim?.usage.rest_types.map(iesim => iesim)}</ul></p> : ''}
                            </li>)}
                    </ul>

                </div>
            </div>
        </>
    )
}

export default Monster