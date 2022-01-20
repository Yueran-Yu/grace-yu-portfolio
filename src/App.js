import {useRef} from 'react';
import {Nav, Home, About, Work, Contact, BackToTop, Footer} from "./components";
import {GlobalStyle} from "./components/gobalStyles";
import {useScrollPosition} from "./hooks/useScrollPosition";
import {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme} from './components/gobalStyles'
import {useDayNightTheme} from "./context/ThemeProvider";

const App = () => {
  const scrollPosition = useScrollPosition()
  const {isDark, toggleTheme} = useDayNightTheme()
  const toTop = useRef(null)

  if (toTop.current) {
    scrollPosition > 400 ?
      toTop.current.classList.add('show-btn') :
      toTop.current.classList.remove('show-btn')
  }

  return (
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle/>
        <Nav isDark={isDark} themeChange={toggleTheme}/>
        <Home/>
        <About/>
        <Work/>
        <Contact/>
        <BackToTop toTopRef={toTop}/>
        <Footer/>
        {/*<img src={process.env.PUBLIC_URL + `/images/image-2.jpg`} alt="img"/>*/}
      </ThemeProvider>
  )
}

export default App;
