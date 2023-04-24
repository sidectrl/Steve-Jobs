import axios from "axios";
import { useEffect, useState } from "react";
import { SpellCasting } from "../../models/SpellCasting";

const url = "https://www.dnd5eapi.co/api";



export const useSpellCasting = (index: string) => {
    const [spellCasting, setSpellCasting] = useState<SpellCasting>();
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            setTimeout(async () => {
                const { data } = await axios.get(`${url}${index}`);
                console.log(data);
                setSpellCasting(data);
                setLoading(false);
            }, 100);
        };
        load();
    }, [index]);
    return [spellCasting, setSpellCasting, isLoading] as [
        SpellCasting,
        Function,
        boolean
    ];
};
