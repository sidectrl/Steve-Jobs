import React from 'react'
import MultiClassingCard from '../Cards/MultiClassing/MultiClassingCard'
import SpellCastingCard from '../Cards/SpellCastingCard/SpellCastingCard';
import { Dropdown } from 'react-bootstrap';

type PopupProps = {
    name: string
}


const PopupButton = ({ name }: PopupProps) => {
    return (

        <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic" size='lg' >
                <h4>{name}</h4>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {name === 'Multi Classing' ? <MultiClassingCard /> : <SpellCastingCard />}
            </Dropdown.Menu>
        </Dropdown>

    )
}

export default PopupButton