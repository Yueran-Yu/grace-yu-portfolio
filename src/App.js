import {useRef, useState} from 'react';
import {HomePage} from "./components/Home/Home";
import {Nav} from "./components/Nav/Nav";
import {AboutPage} from "./components/About/About";
import {Footer} from "./components/Footer/Footer";
import {Works} from "./components/Works/Works";
import {Contact} from "./components/Contact/Contact";
import {GlobalStyle} from "./styles/gobalStyles";
import {BackToTop} from "./components/BackToTop/BackToTop";
import {useScrollPosition} from "./hooks/useScrollPosition";
import {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme} from './styles/gobalStyles'

const App = () => {
  const [isDay, setTheme] = useState(false)
  const scrollPosition = useScrollPosition()
  const toTop = useRef(null)

  if (toTop.current) {
    scrollPosition > 400 ?
      toTop.current.classList.add('show-btn') :
      toTop.current.classList.remove('show-btn')
  }

  return (
    <ThemeProvider theme={isDay ? lightTheme : darkTheme}>
      <div className='App'>
        <GlobalStyle/>
        <Nav isDay={isDay} themeChange={() => setTheme(!isDay)}/>
        <HomePage/>
        <AboutPage/>
        <Works/>
        <Contact/>
        <Footer/>
        <BackToTop toTopRef={toTop}/>
        {/*<img src={process.env.PUBLIC_URL + `/images/image-2.jpg`} alt="img"/>*/}
      </div>
    </ThemeProvider>
  )
}

export default App;
