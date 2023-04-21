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
        <div className='container'>
            <h2>Monster: {monster?.name}</h2>
            {monster?.image ? <img src={`${url}${monster?.image}`} alt="Monster_img" /> : ''}
            <p>Size: {monster?.size}</p>
            <p>Type: {monster?.type}</p>
            <p>Alignment: {monster?.alignment}</p>
            <div id='armor_class'>
                <h4>Armor class:</h4>
                <ul>
                    {monster?.armor_class.map((iesim) => (
                        <React.Fragment >
                            <li>Type: {iesim.type}</li>
                            <li>Value: {iesim.value}</li>
                        </React.Fragment>
                    ))}
                </ul>
            </div>
            <p>Hit points: {monster?.hit_points}</p>
            <p>Hit dice: {monster?.hit_dice}</p>
            <p>Hit points roll: {monster?.hit_points_roll}</p>
            <div id='speed'>
                <h4>Speed: </h4>
                <ul>
                    <li>Walk: {monster?.speed?.walk ?? 'null.'}</li>
                    <li>Fly: {monster?.speed?.fly ?? 'null.'}</li>
                    <li>Swim: {monster?.speed?.swim ?? 'null.'}</li>
                </ul>
            </div>
            <p>Strength: {monster?.strength}</p>
            <p>Dexterity: {monster?.dexterity}</p>
            <p>Constitution: {monster?.constitution}</p>
            <p>Intelligence: {monster?.intelligence}</p>
            <p>Wisdom: {monster?.wisdom}</p>
            <p>Charisma: {monster?.charisma}</p>
            <div id='proficiencies'>
                <h4>Proficiencies:</h4>
                <ul>
                    {monster?.proficiencies.map((iesim) => (
                        <li key={iesim.proficiency.name}>
                            <p>{iesim.proficiency.name} <br />
                                Value: {iesim.value}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
            <div id='damage_vulnerabilities'>
                <h4>Damage vulnerabilities:</h4>
                <ul>
                    {monster?.damage_vulnerabilities.map((iesim) => (
                        <li key={iesim.index}>{iesim.name}</li>
                    ))}
                </ul>
            </div>
            <div id='damage_resistances'>
                <h4>Damage resistance:</h4>
                <ul>
                    {monster?.damage_resistances?.map((iesim) => (
                        <li key={iesim.index}>{iesim.name}</li>
                    ))}
                </ul>
            </div>
            <div id='damage_immunities'>
                <h4>Damage immunities:</h4>
                <ul>
                    {monster?.damage_immunities.map((iesim) => (
                        <li key={iesim}>{iesim}</li>
                    ))}
                </ul>
            </div>
            <div id='condition_immunities'>
                <h4>Condition immunities:</h4>
                <ul>
                    {monster?.condition_immunities.map((iesim) => (<li key={iesim.name}>{iesim.name}</li>))}
                </ul>
            </div>
            <div id='senses'>
                <h4>Senses:</h4>
                <ul>
                    <li>Blindsight: {monster?.senses?.blindsight ?? 'null.'}</li>
                    <li>Dark vision: {monster?.senses?.darkvision ?? 'null.'}</li>
                    <li>Passive perception: {monster?.senses?.passive_perception ?? 'null.'}</li>
                </ul>
            </div>
            <p>Languages: {monster?.languages ?? 'null.'}</p>
            <p>Challenge rating: {monster?.challenge_rating ?? 'null.'}</p>
            <p>XP: {monster?.xp ?? 'null.'}</p>
            <div id='special_abilities'>
                <h4>Special abilities:</h4>
                <ul>
                    {monster?.special_abilities?.map((ability) => (
                        <li key={ability?.name}>
                            <p>
                                {ability?.name} <br />
                                Desc: {ability?.desc}
                            </p>
                            {ability?.usage && (
                                <p>
                                    usage: <br />
                                    <ul>
                                        <li>type: {ability.usage.type}</li>
                                        <li>times: {ability.usage.times}</li>
                                        <li>rest types: {ability.usage.rest_types?.join(', ')}</li>
                                    </ul>
                                </p>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div id='actions'>
                <h4>Actions:</h4>
                <ul>
                    {monster?.actions?.map((action) => (
                        <li key={action?.name}>
                            <p>
                                Name: {action?.name} <br />
                                Description: {action?.desc} <br />
                                Attack bonus: {action?.attack_bonus} <br />
                                Dc:
                                <ul>
                                    <li>dc type: {action?.dc?.dc_type?.name}</li>
                                    <li>dc value: {action?.dc?.dc_value}</li>
                                    <li>success type: {action?.dc?.success_type}</li>
                                </ul>
                                Damage:
                                <ul>
                                    {action?.damage?.map((damage) => (
                                        <li key={damage?.damage_type?.name}>
                                            Type: {damage?.damage_type?.name}.<br />
                                            Dice: {damage?.damage_dice}.
                                        </li>
                                    ))}
                                </ul>
                                Actions:
                                <ul>
                                    {action?.actions?.map((subAction) => (
                                        <li key={subAction?.action_name}>
                                            name: {subAction?.action_name}
                                            <ul>
                                                <li>count: {subAction?.count}</li>
                                                <li>type: {subAction?.type}</li>
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                                Multi attack type: {action?.multiattack_type} <br />
                                Usage:
                                <ul>
                                    <li>dice: {action?.usage?.dice}</li>
                                    <li>min value: {action?.usage?.min_value}</li>
                                    <li>type: {action?.usage?.type}</li>
                                </ul>
                            </p>
                            <br />
                            <hr />
                        </li>
                    ))}
                </ul>
            </div>
            <div id='legendary_actions'>
                <h4>Legendary actions:</h4>
                <ul>
                    {monster?.legendary_actions.map((legendary_action) => (
                        <li>
                            <p>
                                Name: {legendary_action.name} <br />
                                description: {legendary_action.desc} <br />
                                Dc:
                                <ul>
                                    <li>dc type: {legendary_action?.dc?.dc_type?.name}</li>
                                    <li>dc value: {legendary_action?.dc?.dc_value}</li>
                                    <li>success type: {legendary_action?.dc?.success_type}</li>
                                </ul>
                                Damage:
                                {legendary_action?.damage?.map((item) => (
                                    <ul>
                                        <li>Type: {item?.damage_type?.name}.</li>
                                        <li>Dice: {item?.damage_dice}.</li>
                                    </ul>
                                ))}
                                <br />
                            </p>
                            <hr />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Monster