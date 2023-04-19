import axios from "axios";
import { useEffect, useState } from "react";
import { Monster } from "../models/Monster";
const url = "https://www.dnd5eapi.co/api/";



export const useMonsters = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setTimeout(async () => {
        const { data } = await axios.get(`${url}monsters`);
        setMonsters(data.results);
        setLoading(false);
      }, 100);
    };
    load();
  }, []);
  return [monsters, setMonsters, isLoading] as [
    Monster[],
    Function,
    boolean
  ];
};