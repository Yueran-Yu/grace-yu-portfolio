import styled from 'styled-components';

export const MobileDayNightContainer = styled.div`

  .outside {
    width: 100%;
    height: 35px;
    padding: 5px 0;
    line-height: 25px;
    border-radius: 5px;
    font-size: 15px;
    font-family: "Comic Sans MS", sans-serif;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    background-color: ${({theme: {chosenTheme}}) => (chosenTheme.nightBackground)};
    color: ${({theme: {chosenTheme}}) => (chosenTheme.nightModeColor)};
    box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;
  }

  .outside:hover, .outside:focus, .outside:active {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`