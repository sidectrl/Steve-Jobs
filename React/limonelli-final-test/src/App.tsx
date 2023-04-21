import React, { createContext, useState } from 'react';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Navbar from './components/Navbar/Navbar';


export const ThemeContext = createContext<string>('light');
function App() {
  const [theme, setTheme] = useState('light');
  return (
    <>
      <div>
        <ThemeContext.Provider value={theme}>
          <Navbar />
          <div style={{marginTop:'56px'}}>
            <label className='col-12' style={theme === 'dark' ? { backgroundColor: '#282A3A', color: 'white'} : { backgroundColor: 'white', color: 'black' }}>
              <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={(e) => {
                  setTheme(e.target.checked ? 'dark' : 'light')
                }}
              />
              Use dark mode
            </label>
            <Wrapper /></div>
        </ThemeContext.Provider>
      
    </div>
    </>
  );
}

export default App;
