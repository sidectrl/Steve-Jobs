import React, { createContext, useState } from 'react';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';

export const ThemeContext = createContext<string>('light');
function App() {
  const [theme, setTheme] = useState('light');
  return (
    <>
      <div>
        <ThemeContext.Provider value={theme}>
          <label>
            <input
              type="checkbox"
              checked={theme === 'dark'}
              onChange={(e) => {
                setTheme(e.target.checked ? 'dark' : 'light')
              }}
            />
            Use dark mode
          </label>
          <Wrapper />
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;
