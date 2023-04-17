import React from 'react'
import { Character } from '../../models/Character'



type CardProps = {
  character?: Character
}

const CharacterCard = ({ character }: CardProps) => {
  return (
    <>
    <div className='container'>
      <h2>Class: {character?.name}</h2>
      <p>index: {character?.index}</p>
      <p>Hit Die: {character?.hit_die}</p>
      </div>
    </>
  )
}

export default CharacterCard