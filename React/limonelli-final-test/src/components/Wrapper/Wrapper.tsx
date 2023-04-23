import React, { useContext } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Classes from '../ElementListCard/ElementListCard'
import Character from '../Character/Character'
import { ThemeContext } from '../../App'
import { useClasses } from '../../hooks/useClasses'
import { useMonsters } from '../../hooks/useMonsters'
import Monster from '../Monster/Monster'
import MultiClassingCard from '../MultiClassing/MultiClassingCard'
import SpellCastingCard from '../SpellCastingCard/SpellCastingCard'


const Wrapper = () => {
    const theme = useContext(ThemeContext);
    const customStyle = theme === 'dark' ? { backgroundColor: '#282A3A', color: 'white' } : { backgroundColor: 'white', color: 'black' }
    return (
        <div style={customStyle}>
            <BrowserRouter>
                <Routes>
                    <Route path="classes" element={<><div style={{ display: 'flex' }}><p><Classes customHook={useClasses()} /></p><Outlet /></div></>}>
                        <Route index />
                        <Route path=":index" element={<div style={{ paddingLeft: '10%' }}><Character /><Outlet/></div>}>
                            <Route path="multi-classing" element={<div ><MultiClassingCard /></div>} />
                            <Route path="spell-casting" element={<div><SpellCastingCard /></div>} />
                        </Route>
                    </Route>

                    <Route path="monsters" element={<><div style={{ display: 'flex' }}><p><Classes customHook={useMonsters()} /></p><Outlet /></div></>}>
                        <Route index />
                        <Route path=":index" element={<div style={{ paddingLeft: '10%' }}><Monster /></div>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Wrapper