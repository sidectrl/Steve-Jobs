import React, { useState } from 'react'
import MultiClassingCard from '../MultiClassing/MultiClassingCard'
import SpellCastingCard from '../SpellCastingCard/SpellCastingCard';

type PopupProps = {
    name: string
}


const PopupButton = ({name} : PopupProps) => {
    const [isShown, setIsShown] = useState(false);
    return (
        <div>
            <h4
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            >
                <a style={{textDecoration:'none'}} href="">
                    {name}:</a>
            </h4>
            {isShown && (
                <ul>
                    {name === 'Multi Classing' ? <MultiClassingCard /> : <SpellCastingCard />}
                </ul>
            )}
        </div>
    )
}

export default PopupButton