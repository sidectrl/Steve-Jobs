import { useParams } from 'react-router-dom';
import { useCharacter } from '../../../hooks/Character/useCharacter';
import '../../Styles/CardStyle.css';
import PopupButton from '../../PopupButton/PopupButton';
const Character = () => {
  const { index } = useParams() as { index: string };
  const [character] = useCharacter(index);


  console.log(character);
  return (
    <>
      <div className='container'>
        <h2>Class: {character?.name}</h2>
        <p>Hit Die: {character?.hit_die}</p>
        <div id='multi_classing'>
          <PopupButton
            name={'Multi Classing'}
          />
          <ul>

            <li><p>Prerequisites:</p>
              <ul>
                <div>
                  {
                    character?.name !== 'Fighter' ? character?.multi_classing.prerequisites.map(
                      iesim =>
                        <li>
                          <p>Ability score: {iesim.ability_score.name}</p>
                          <p>Minimum score: {iesim.minimum_score}</p>
                        </li>) : character?.multi_classing.prerequisite_options?.from.options.map(
                          iesim =>
                            <li>
                              <p>Ability score: {iesim.ability_score.name}</p>
                              <p>Minimum score: {iesim.minimum_score}</p>
                            </li>)
                  }
                </div>
              </ul>
            </li>
            <li><p>Proficiencies:</p>
              <ul>
                <div>
                  {character?.multi_classing.proficiencies.map(iesim => <li><p>{iesim.name}</p></li>)}
                </div>
              </ul>
            </li>
          </ul>
        </div>

        <div id='proficiencies'>
          <h4>
            Proficiencies:
          </h4>
          <ul>
            {character?.proficiencies.map((iesim) => <li><p>{iesim.name}</p></li>)}
          </ul>
        </div>

        <div id='proficiency_choices'>
          <h4>
            Proficiency choices:
          </h4>
          <ul>
            <p>Chose two from:</p>
            <ul>
              {character?.proficiency_choices.map((iesim) => iesim.from.options.map((iesimOption) => <li><p>{iesimOption.item?.name}</p></li>))}
            </ul>
          </ul>
        </div>
        {
          character?.index !== 'barbarian' || 'fighter' || 'rogue' ? <PopupButton name='Spell Casting' /> : ''
        }

        <div id='starting_equipment'>
          <h4>Starting equipment</h4>
          <ul>
            {character?.starting_equipment.map((iesim) => <li><p>Name: {iesim.equipment.name}<br></br> Quantity: {iesim.quantity}</p></li>)}
          </ul>
        </div>

        <div id='starting_equipment_options'>
          <h4>Starting equipment options</h4>
          <ul>
            <li>{character?.starting_equipment_options.map((iesimOption, index) =>
              <p><b>Choose {index}:</b> <br />
                {iesimOption.desc}
              </p>
            )}</li></ul>
        </div>
        <div id='subclasses'>
          <h4>Sub-Classes</h4>
          <ul>
            {character?.subclasses.map((iesim) => <li>{iesim.name}</li>)}
          </ul>
        </div>
      </div>
    </>
  )

}

export default Character;