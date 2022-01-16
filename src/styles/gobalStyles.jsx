import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

export const lightTheme = {
  bodyColor: '#FFFFFF',
  color: '#1b2f50',
  fixedNavColor: '#f1faee',
  toTopColor: '#f1faee',
  toTopBackground: '#457b9d'
}

export const darkTheme = {
  bodyColor: '#1b2f50',
  color: '#f1faee',
  fixedNavColor: '#457b9d',
  toTopColor: '#457b9d',
  toTopBackground: '#f1faee'

}

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  :root {
    --prussian-blue: #1b2f50;
    --celadon-blue: #457b9d;
    --powder-blue: #A8DADC;
    --honeydew: #f1faee;
    --imperial-red: #E63946;
    --white: #FFFFFF;
    --font-color: #292929;
    --main-font: 'Roboto', sans-serif;
    --radius: 0.3rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({theme}) => theme.bodyColor};
    height: 100%;
    font-family: var(--main-font);
    background-size: auto;
    color: ${({theme}) => theme.color};
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
