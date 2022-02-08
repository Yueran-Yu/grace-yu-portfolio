import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';
import {deviceSize} from "./Utils/DeviceSize";

export const fontCollection = {
  small: '1.1rem',
  middle: '1.4rem',
  large: '1.6rem',
  xLarge: '1.8rem',
  xxLarge: '2rem',
  sectionTitleSize: '2.4rem'
}

export const lightTheme = {
  bodyColor1: 'white',
  bodyColor2: 'ghostwhite',
  bodyColor3: '#ebf6ff',
  navHover: '#133467',
  color: '#133467',
  imgBg: '#1c4d97',
  fixedNavColor: '#f1faee',
  toTopColor: '#e8efe8',
  nightBackground: '#133467',
  nightModeColor: 'ghostwhite',
  toTopBackground: '#1c4d97',
  cardBgColor1: '#c6dffc',
  cardBgColor2: 'white',
}

export const darkTheme = {
  bodyColor1: '#030f20',
  bodyColor2: '#295496',
  bodyColor3: '#133467',
  navHover: 'ghostwhite',
  color: 'ghostwhite',
  imgBg: 'rgba(255, 255, 255);',
  nightBackground: 'ghostwhite',
  nightModeColor: '#133467',
  fixedNavColor: '#457b9d',
  toTopColor: '#1c4d97',
  toTopBackground: '#e8efe8',
  cardBgColor1: '#07234e',
  cardBgColor2: '#d5e6fa',
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
    --card-bgColor: #a0e2f8;
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
