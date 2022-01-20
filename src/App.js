import {useRef, useState} from 'react';
import {Nav, Home, About, Work, Contact, BackToTop, Footer} from "./components";
import {GlobalStyle} from "./components/gobalStyles";
import {useScrollPosition} from "./hooks/useScrollPosition";
import {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme} from './components/gobalStyles'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

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
      <Router>
        <GlobalStyle/>
        <Nav isDay={isDay} themeChange={() => setTheme(!isDay)}/>
        <Home/>
        <About/>
        <Work/>
        <Contact/>

        <Routes>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/work' element={<Work/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
        </Routes>
        <BackToTop toTopRef={toTop}/>
        <Footer/>
      </Router>
      {/*<img src={process.env.PUBLIC_URL + `/images/image-2.jpg`} alt="img"/>*/}
    </ThemeProvider>
  )
}

export default App;
