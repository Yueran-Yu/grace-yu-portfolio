import React, {useRef, lazy, Suspense} from 'react';
import {Loading} from "./components";
import {fontCollection, GlobalStyle} from "./components/gobalStyles";
import {useScrollPosition} from "./hooks/useScrollPosition";
import {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme} from './components/gobalStyles'
import {useDayNightTheme} from "./context/ThemeProvider";
import {useOpenClose} from "./context/OpenCloseProvider";

const Nav = lazy(() => import('../src/components/Nav/NavBar/Nav'))
const Home = lazy(() => import('../src/components/Home/Home'))
const About = lazy(() => import('../src/components/About/About'))
const Works = lazy(() => import('../src/components/Works/Works'))
const Contact = lazy(() => import('../src/components/Contact/Contact'))
const BackToTop = lazy(() => import('../src/components/BackToTop/BackToTop'))
const Footer = lazy(() => import('../src/components/Footer/Footer'))

const App = () => {
  const scrollPosition = useScrollPosition()
  const {isDay, toggleTheme} = useDayNightTheme()
  const {isOpen, setOpen, toggleOpenClose} = useOpenClose()
  const toTop = useRef(null)
  if (toTop.current) {
    scrollPosition >= 400 ?
      toTop.current.classList.add('show-btn') :
      toTop.current.classList.remove('show-btn')
  }

  const Loader = () => <Loading/>
  const chosenTheme = isDay ? lightTheme : darkTheme

  return (
    <Suspense fallback={Loader()}>
      <ThemeProvider theme={{chosenTheme, fontCollection, isOpen}}>
        <GlobalStyle/>
        <Nav isDay={isDay}
             themeChange={toggleTheme}
             isOpen={isOpen}
             setOpen={setOpen}
             toggleOpenClose={toggleOpenClose}/>
        <Home/>
        <About/>
        <Works/>
        <Contact/>
        <BackToTop toTopRef={toTop}/>
        <Footer/>
      </ThemeProvider>
    </Suspense>
  )
}

export default App;
