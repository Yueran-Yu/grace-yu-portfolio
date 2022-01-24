import styled from 'styled-components';
import {deviceSize} from "../Utils/DeviceSize";

export const HomeContainer = styled.div`
  position: relative;
  height: 90vh;
  display: grid;
  margin: 0 60px;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  justify-items: center;
  align-content: center;

  @media screen and ${deviceSize.tablet} {
    padding-top: 30px;
    height: 60vh;
    gap: 10px;
    margin: 0 40px;
  }


  @media screen and ${deviceSize.mobile} {
    padding-top: 30px;
    height: 50vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
    justify-items: center;
    align-content: center;

    .photo {
      grid-row-start: 1;
      grid-row-end: 2;
    }
  }


  div {
    width: 30vw;
    align-self: center;
    position: relative;
    padding: 10px;

  }

  .photo {
    order: 3;
    position: relative;
    border-radius: 50%;
    width: 32vw;
    height: 32vw;
    transition: all 0.2s ease-in-out;
    max-width: 380px;
    max-height: 380px;

    @media screen and ${deviceSize.tablet} {
      width: 230px;
      height: 230px;
    }

    @media screen and ${deviceSize.mobile} {
      width: 160px;
      height: 160px;
    }

    img {
      width: 30vw;
      height: 30vw;
      max-width: 350px;
      max-height: 350px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-55deg);
      cursor: pointer;
      transition: all 0.5s linear;
      -webkit-transition: all 0.5s linear;
      box-shadow: rgba(105, 105, 162, 0.25) 0 50px 100px -20px, rgba(40, 38, 38, 0.3) 0px 30px 60px -30px, rgba(38, 85, 131, 0.35) 0px -2px 6px 0px inset;

      @media screen and ${deviceSize.tablet} {
        width: 230px;
        height: 230px;
      }

      @media screen and ${deviceSize.mobile} {
        width: 140px;
        height: 140px;
      }
    }
  }

  .photo:hover {
    transform: scale(1.02);
    background-color: ${({theme: {chosenTheme}}) => (chosenTheme.color)};
    box-shadow: rgba(0, 0, 0, 0.25) 0 14px 28px, rgba(0, 0, 0, 0.22) 0 10px 10px;


    @media screen and ${deviceSize.tablet} {
      width: 250px;
      height: 250px;
    }

    @media screen and ${deviceSize.mobile} {
      width: 160px;
      height: 160px;
    }
  }
`