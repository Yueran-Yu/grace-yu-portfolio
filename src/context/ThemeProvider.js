import React, {createContext, useEffect, useContext, useState} from 'react';

 const DayNightThemeContext = createContext(true)

const DayNightThemeProvider = ({children}) => {
  const [isDark, setTheme] = useState(localStorage.getItem('darkMode') === 'true')

  useEffect(()=>{
    localStorage.setItem('darkMode',  JSON.stringify(isDark))
  },[isDark])

  const toggleTheme = () => setTheme(!isDark)

  return (
    <DayNightThemeContext.Provider value={{isDark, toggleTheme}}>
      {children}
    </DayNightThemeContext.Provider>
  );
};

export const useDayNightTheme = () => {
  const {isDark, toggleTheme} = useContext(DayNightThemeContext)
  return {isDark, toggleTheme}
}

export default DayNightThemeProvider;
