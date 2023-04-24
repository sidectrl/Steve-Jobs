import axios from "axios";
import { useEffect, useState } from "react";
import { MultiClassing } from "../../models/MultiClassing";

const url = "https://www.dnd5eapi.co/api";



export const useMultiClassing = (index: string) => {
    const [multiClassing, setMultiClassing] = useState<MultiClassing>();
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            setTimeout(async () => {
                const { data } = await axios.get(`${url}${index}`);
                //console.log(data);
                setMultiClassing(data);
                setLoading(false);
            }, 100);
        };
        load();
    }, [index]);
    return [multiClassing, setMultiClassing, isLoading] as [
        MultiClassing,
        Function,
        boolean
    ];
};
