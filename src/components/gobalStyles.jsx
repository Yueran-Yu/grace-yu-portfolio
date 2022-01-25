import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';
import {deviceSize} from "./Utils/DeviceSize";

export const fontSize = {
  small: '1.1rem',
  middle: '1.4rem',
  large: '1.6rem',
  xLarge: '1.8rem',
  xxLarge: '2rem'
}

export const lightTheme = {
  bodyColor1: 'white',
  bodyColor2: 'ghostwhite',
  bodyColor3: 'azure',
  navHover: '#133467',
  color: '#133467',
  fixedNavColor: '#f1faee',
  toTopColor: '#e8efe8',
  nightBackground: '#133467',
  nightModeColor: 'ghostwhite',
  toTopBackground: '#457b9d'
}

export const darkTheme = {
  bodyColor1: '#030f20',
  bodyColor2: '#295496',
  bodyColor3: '#133467',
  navHover: 'ghostwhite',
  color: 'ghostwhite',
  nightBackground: 'ghostwhite',
  nightModeColor: '#133467',
  fixedNavColor: '#457b9d',
  toTopColor: '#457b9d',
  toTopBackground: '#e8efe8'
}

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  :root {
    --gradient: linear-gradient(135deg,
    #845ec2,
    #d65db1,
    #ff6f91,
    #ffc75f);

    --dark-blue: #030f20;
    --second-dark-blue: #062e5b;
    --prussian-blue: #1b2f50;
    --celadon-blue: #457b9d;
    --powder-blue: #A8DADC;
    --honeydew: #f1faee;
    --imperial-red: #E63946;
    --ghostwhite: ghostwhite;
    --azure: azure;
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
    background: linear-gradient(135deg, ${({theme: {chosenTheme}}) => chosenTheme.bodyColor2}, ${({theme: {chosenTheme}}) => chosenTheme.bodyColor1});
    height: 100%;
    font-family: var(--main-font);
    background-size: auto;
    color: ${({theme: {chosenTheme}}) => chosenTheme.color};
    min-height: 100vh;
    min-height: -webkit-fill-available;
    //background-image: linear-gradient(to bottom, var(--light-green), var(--dark-green));
      //url(${process.env.PUBLIC_URL + `/images/backgroundImage.jpeg`});

    @media screen and ${deviceSize.tablet} {
      overflow-y: ${({theme: {isOpen}}) => (isOpen ? 'hidden' : 'visible')};
    }
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
