import React, { useEffect, useState } from 'react'
import { Character } from '../../types/Character'
import { useParams } from 'react-router-dom';
import axios from 'axios';
const SingleCharacter = () => {
  const { id } = useParams() as { id: string };
  const [character, setCharacter] = useState<Character>();
  useEffect(() => {
    loadData();
  }, [id]);
  const loadData = async () => {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    setCharacter(data);
  }
  return (
    <>
      <div>
        <img src={character?.image} alt="" />
      </div>
      <div>
        <h1>{character?.name}</h1>
        <p>ID: {character?.id}</p>
        <p>Gender: {character?.gender}</p>
        <p>Location: {character?.location.name}</p>
      </div>
    </>
  )

}

export default SingleCharacter;;