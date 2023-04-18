import React from 'react'
import { Character } from '../../models/Character'
import './CharacterCard.css'



type CardProps = {
  character?: Character
}

const CharacterCard = ({ character }: CardProps) => {
  console.log(character);
  return (
    <>
      <div className='container'>
        <h2>Class: {character?.name}</h2>
        <p>Hit Die: {character?.hit_die}</p>
        <div id='multi_classing'>
          <h4>Multi classing:</h4>
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
                  {character?.multi_classing.proficiencies.map(iesim => <li>{iesim.name}</li>)}
                </div>
              </ul>
            </li>
          </ul>
        </div>

        <div id='prerequisites'>
          <h4>
            
          </h4>
        </div>

      </div>
    </>
  )
}

export default CharacterCard