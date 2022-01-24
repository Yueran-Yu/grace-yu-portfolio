import styled from 'styled-components';
import {deviceSize} from "../Utils/DeviceSize";

export const HomeContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: relative;

  div {
    width: 30vw;
    align-self: center;
  }


  .photo {
    width: 24vw;
    height: 24vw;
    border-radius: 50%;
    overflow: hidden;

    @media screen and ${deviceSize.tablet} {
      width: 220px;
      height: 220px;
    }

    @media screen and ${deviceSize.mobile} {
      width: 160px;
      height: 160px;
    }

    img {
      width: 30vw;
      height: 30vw;
      transform: translateX(-50px) translateY(-10px) rotate(-55deg);

      @media screen and ${deviceSize.tablet} {
        width: 280px;
        height: 280px;
      }

      @media screen and ${deviceSize.mobile} {
        width: 220px;
        height: 220px;
      }

    }
  }
`