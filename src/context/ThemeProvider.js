import React, {createContext, useContext, useState} from 'react';

export const DayNightThemeContext = createContext(true)

const DayNightThemeProvider = ({children}) => {
  const [isDark, setTheme] = useState(true)
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
