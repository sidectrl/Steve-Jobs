import axios from "axios";
import { useEffect, useState } from "react";
import { Character } from "../types/Character";
const url = "https://rickandmortyapi.com/api/character";



export const useCharacters = (id = 1) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setTimeout(async () => {
        const { data } = await axios.get(`${url}:id`);
        setCharacters(data.results);
        setLoading(false);
      }, 2000);
    };
    load();
  }, [id]);
  return [characters, setCharacters, isLoading] as [
    Character[],
    Function,
    boolean
  ];
};
