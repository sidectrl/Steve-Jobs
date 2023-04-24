import axios from "axios";
import { useEffect, useState } from "react";
import { Race } from "../models/Race";
const url = "https://www.dnd5eapi.co/api";



export const useRaces = () => {
    const [races, setRaces] = useState<Race[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            setTimeout(async () => {
                const { data } = await axios.get(`${url}/races`);
                setRaces(data.results);
                setLoading(false);
            }, 100);
        };
        load();
    }, []);
    return [races, setRaces, isLoading] as [
        Race[],
        Function,
        boolean
    ];
};