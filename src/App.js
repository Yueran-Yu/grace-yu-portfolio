import {useRef} from 'react';
import {Nav, Home, About, Work, Contact, BackToTop, Footer} from "./components";
import {fontSize, GlobalStyle} from "./components/gobalStyles";
import {useScrollPosition} from "./hooks/useScrollPosition";
import {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme} from './components/gobalStyles'
import {useDayNightTheme} from "./context/ThemeProvider";
import {useOpenClose} from "./context/OpenCloseProvider";

const App = () => {
  const scrollPosition = useScrollPosition()
  const {isDark, toggleTheme} = useDayNightTheme()
  const {isOpen, setOpen, toggleOpenClose} = useOpenClose()
  const toTop = useRef(null)
  if (toTop.current) {
    scrollPosition >= 400 ?
      toTop.current.classList.add('show-btn') :
      toTop.current.classList.remove('show-btn')
  }

  const chosenTheme = isDark ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={{chosenTheme, fontSize, isOpen}}>
      <GlobalStyle/>
      <Nav isDark={isDark}
           themeChange={toggleTheme}
           isOpen={isOpen}
           setOpen={setOpen}
           toggleOpenClose={toggleOpenClose}/>
      <Home/>
      <About/>
      <Work/>
      <Contact/>
      <BackToTop toTopRef={toTop}/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App;
