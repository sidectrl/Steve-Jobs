import axios from "axios";
import { useEffect, useState } from "react";
import { Character } from "../../models/Character";
const url = "https://www.dnd5eapi.co/api/";



export const useClasses = () => {
  const [classes, setClasses] = useState<Character[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setTimeout(async () => {
        const { data } = await axios.get(`${url}classes`);
        setClasses(data.results);
        setLoading(false);
      }, 2000);
    };
    load();
  }, []);
  return [classes, setClasses, isLoading] as [
    Character[],
    Function,
    boolean
  ];
};
