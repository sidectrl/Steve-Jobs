import { useParams } from 'react-router-dom';
import CharacterCard from '../Card/CharacterCard';
import { useCharacter } from '../../hooks/useCharacter';
const Character = () => {
  const { index } = useParams() as { index: string };
  const [character] = useCharacter(index);

  return (
    <>
    <CharacterCard
    character={character}
    />
    </>
  )

}

export default Character;