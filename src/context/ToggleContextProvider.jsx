import React, {createContext, useState} from "react";

export const ThemeContext = createContext('')

export const ToggleContext = ({children})=>{
  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    // console.log(theme)
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }



  return(
    <ThemeContext.Provider value={{theme, themeToggler}}>
      {children}
    </ThemeContext.Provider>
  )
}

