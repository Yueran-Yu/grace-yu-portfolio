import React, {createContext, useEffect, useContext, useState} from 'react';

export const DayNightThemeContext = createContext(true)

const DayNightThemeProvider = ({children}) => {
  const dark = localStorage.getItem('darkMode')
  const [isDark, setTheme] = useState(JSON.parse(dark)||true)

  useEffect(()=>{
    localStorage.setItem('darkMode',  JSON.stringify (isDark))
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
