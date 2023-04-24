import React, { useContext } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Character from '../Cards/Character/Character'
import { ThemeContext } from '../../App'
import { useClasses } from '../../hooks/useClasses'
import { useMonsters } from '../../hooks/useMonsters'
import Monster from '../Cards/Monster/Monster'
import MultiClassingCard from '../Cards/MultiClassing/MultiClassingCard'
import SpellCastingCard from '../Cards/SpellCastingCard/SpellCastingCard'
import { useRaces } from '../../hooks/useRaces'
import { ElementListCard } from '../Cards/ElementListCard/ElementListCard'
import { RaceCard } from '../Cards/RaceCard/RaceCard'


const Wrapper = () => {
    const theme = useContext(ThemeContext);
    const customStyle = theme === 'dark' ? { backgroundColor: '#282A3A', color: 'white' } : { backgroundColor: 'white', color: 'black' }
    return (
        <div style={customStyle}>
            <BrowserRouter>
                <Routes>
                    <Route path='/'>
                        <Route path="classes" element={<><div style={{ display: 'flex' }}><p><ElementListCard customHook={useClasses()} /></p><Outlet /></div></>}>
                            <Route index />
                            <Route path=":index" element={<div style={{ paddingLeft: '10%' }}><Character /><Outlet /></div>}>
                                <Route path="multi-classing" element={<div ><MultiClassingCard /></div>} />
                                <Route path="spellcasting" element={<div><SpellCastingCard /></div>} />
                            </Route>
                        </Route>
                        <Route path="monsters" element={<><div style={{ display: 'flex' }}><p><ElementListCard customHook={useMonsters()} /></p><Outlet /></div></>}>
                            <Route index />
                            <Route path=":index" element={<div style={{ paddingLeft: '10%' }}><Monster /></div>} />
                        </Route>
                        <Route path="races" element={<><div style={{ display: 'flex' }}><p><ElementListCard customHook={useRaces()} /></p><Outlet /></div></>}>
                            <Route index />
                            <Route path=":index" element={<div style={{ paddingLeft: '10%' }}><RaceCard /></div>} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Wrapper