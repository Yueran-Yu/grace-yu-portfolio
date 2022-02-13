import React, {createContext, useEffect, useContext, useState} from 'react';

const DayNightThemeContext = createContext(false)

const DayNightThemeProvider = ({children}) => {
  const [isDay, setTheme] = useState(localStorage.getItem('dayMode') === 'false')


  useEffect(() => {
    localStorage.setItem('dayMode', JSON.stringify(isDay))
  }, [isDay])

  const toggleTheme = () => setTheme(!isDay)

  return (
    <DayNightThemeContext.Provider value={{isDay, toggleTheme}}>
      {children}
    </DayNightThemeContext.Provider>
  );
};

export const useDayNightTheme = () => {
  const {isDay, toggleTheme} = useContext(DayNightThemeContext)
  return {isDay, toggleTheme}
}

export default DayNightThemeProvider;
