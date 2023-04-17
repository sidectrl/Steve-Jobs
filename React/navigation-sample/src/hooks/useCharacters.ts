import axios from "axios";
import { useEffect, useState } from "react";
import { Character } from "../types/Character";
const url = "https://rickandmortyapi.com/api/character";



export const useCharacters = (page = 1) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setTimeout(async () => {
        const { data } = await axios.get(`${url}?page=${page}`);
        setCharacters(data.results);
        setLoading(false);
      }, 2000);
    };
    load();
  }, [page]);
  return [characters, setCharacters, isLoading] as [
    Character[],
    Function,
    boolean
  ];
};
