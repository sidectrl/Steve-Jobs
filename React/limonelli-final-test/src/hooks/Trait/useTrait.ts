import axios from "axios";
import { useEffect, useState } from "react";
import { Trait } from "../../models/Trait";
const url = "https://www.dnd5eapi.co/api/traits";



export const useTrait = (index: string) => {
  const [trait, setTrait] = useState<Trait>();
  const [isLoading, setLoading] = useState<boolean>(false);
  
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setTimeout(async () => {
        const { data } = await axios.get(`${url}/${index}`);
        setTrait(data);
        setLoading(false);
      }, 100);
    };  
    load();
  }, [index]);
  return [trait, setTrait, isLoading] as [
    Trait,
    Function,
    boolean
  ];
};