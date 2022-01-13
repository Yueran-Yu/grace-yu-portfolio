import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  :root {
    --dark-green: #1b7a85;
    --medium-green: #2d98b3;
    --light-green: #9DC88D;
    --natural-yellow: #F1B24A;
    --white: #FFFFFF;
    --main-font: 'Roboto', sans-serif;;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--dark-green);
    height: 100%;
    font-family: var(--main-font);
    background-size: auto;
    color: var(--white);
    min-height: 100vh;
    min-height: -webkit-fill-available;
    //background-image: linear-gradient(to bottom, var(--light-green), var(--dark-green));
      //url(${process.env.PUBLIC_URL + `/images/backgroundImage.jpeg`});
  }


  a {
    text-decoration: none;
    font-weight: 800;
  }
`
