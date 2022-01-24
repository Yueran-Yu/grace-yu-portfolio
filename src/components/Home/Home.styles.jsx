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
    height: 40vh;
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
    width: 33vw;
    height: 33vw;
    transition: all 0.5s ease-in-out;


    @media screen and ${deviceSize.tablet} {
      width: 230px;
      height: 230px;
    }

    @media screen and ${deviceSize.mobile} {
      width: 180px;
      height: 180px;
    }

    img {
      width: 30vw;
      height: 30vw;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-55deg);
      cursor: pointer;
      transition: all 0.5s linear;
      -webkit-transition: all 0.5s linear;
      box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

      @media screen and ${deviceSize.tablet} {
        width: 230px;
        height: 230px;
      }

      @media screen and ${deviceSize.mobile} {
        width: 160px;
        height: 160px;
      }
    }
  }

  .photo:hover {
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.25) 0 14px 28px, rgba(0, 0, 0, 0.22) 0 10px 10px;


    @media screen and ${deviceSize.tablet} {
      width: 260px;
      height: 260px;
    }

    @media screen and ${deviceSize.mobile} {
      width: 180px;
      height: 180px;
    }
  }
`