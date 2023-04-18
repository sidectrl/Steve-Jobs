import axios from "axios";
import { useEffect, useState } from "react";
import { Character } from "../models/Character";
const url = "https://www.dnd5eapi.co/api/classes";



export const useCharacter = (index: string) => {
  const [characters, setCharacter] = useState<Character>();
  const [isLoading, setLoading] = useState<boolean>(false);
  
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setTimeout(async () => {
        const { data } = await axios.get(`${url}/${index}`);
        console.log(data);
        setCharacter(data);
        setLoading(false);
      }, 100);
    };  
    load();
  }, [index]);
  return [characters, setCharacter, isLoading] as [
    Character,
    Function,
    boolean
  ];
};


/*export const useCharacter = (index: string) => {
  const [character, setCharacter] = useState<Character>();
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`${url}/${index}`);
        setCharacter(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [index]);

  return [character, setCharacter, isLoading] as [
    Character,
    (value: Character) => void,
    boolean
  ];
};
*/