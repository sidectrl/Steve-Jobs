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
          <Wrapper />
          <div className='col-12 d-flex justify-content-end' style={theme === 'dark' ? { backgroundColor: '#282A3A', color: 'white' } : { backgroundColor: 'white', color: 'black' }}>
            <label >
              <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={(e) => {
                  setTheme(e.target.checked ? 'dark' : 'light')
                }}
              />
              Use dark mode
            </label>
          </div>
        </ThemeContext.Provider>

      </div>
    </>
  );
}

export default App;
