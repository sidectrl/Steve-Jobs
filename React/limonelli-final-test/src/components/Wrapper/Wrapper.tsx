import React, { useContext } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Classes from '../Characters/Characters'
import Character from '../Character/Character'
import { ThemeContext } from '../../App'

const Wrapper = () => {
    const theme = useContext(ThemeContext);
    return (
        <div style={theme === 'dark' ? {backgroundColor: '#282A3A', color:'white'}: {backgroundColor:'white', color:'black'} }>
            <BrowserRouter>
                <Routes>
                    <Route path="classes" element={<><div style={{ display: 'flex'}}><p><Classes /></p><Outlet /></div></>}>
                        <Route
                            index
                        />
                        <Route path=":index" element={<div style={{ paddingLeft: '10%' }}><Character /></div>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Wrapper