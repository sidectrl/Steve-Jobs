import axios from "axios";
import { useEffect, useState } from "react";
import { Monster } from "../models/Monster";
const url = "https://www.dnd5eapi.co/api/monsters";



export const useMonster = (index: string) => {
  const [monsters, setMonster] = useState<Monster>();
  const [isLoading, setLoading] = useState<boolean>(false);
  
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setTimeout(async () => {
        const { data } = await axios.get(`${url}/${index}`);
        setMonster(data);
        setLoading(false);
      }, 100);
    };  
    load();
  }, [index]);
  return [monsters, setMonster, isLoading] as [
    Monster,
    Function,
    boolean
  ];
};