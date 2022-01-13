import {HomePage} from "./components/Home/Home";
import {Nav} from "./components/Nav/Nav";
import {Resume} from "./components/Resume/Resume";
import {AboutPage} from "./components/About/About";
import {Footer} from "./components/Footer/Footer";
import {Works} from "./components/Works/Works";
import {Contact} from "./components/Contact/Contact";
import {GlobalStyle} from "./styles/gobalStyles";

const App = () => {
  return (
    <div className='App'>
      <GlobalStyle/>
      <Nav/>
      <HomePage/>
      <AboutPage/>
      <Works/>
      <Resume/>
      <Contact/>
      <Footer/>
      {/*<img src={process.env.PUBLIC_URL + `/images/image-2.jpg`} alt="img"/>*/}
    </div>
  );
}

export default App;
