import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  :root {
    --prussian-blue: #1b2f50;
    --celadon-blue: #457B9D;
    --powder-blue: #A8DADC;
    --honeydew: #F1FAEE;
    --imperial-red: #E63946;
    --white: #FFFFFF;
    --main-font: 'Roboto', sans-serif;
    --radius: 0.3rem;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--prussian-blue);
    height: 100%;
    font-family: var(--main-font);
    background-size: auto;
    color: var(--white);
    min-height: 100vh;
    min-height: -webkit-fill-available;
    //background-image: linear-gradient(to bottom, var(--light-green), var(--dark-green));
      //url(${process.env.PUBLIC_URL + `/images/backgroundImage.jpeg`});
  }


  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
