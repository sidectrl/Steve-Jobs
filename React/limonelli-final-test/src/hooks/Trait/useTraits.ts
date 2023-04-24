import axios from "axios";
import { useEffect, useState } from "react";
import { Trait } from "../../models/Trait";
const url = "https://www.dnd5eapi.co/api/";



export const useTraits = () => {
  const [traits, setTraits] = useState<Trait[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setTimeout(async () => {
        const { data } = await axios.get(`${url}traits`);
        setTraits(data.results);
        setLoading(false);
      }, 2000);
    };
    load();
  }, []);
  return [traits, setTraits, isLoading] as [
    Trait[],
    Function,
    boolean
  ];
};