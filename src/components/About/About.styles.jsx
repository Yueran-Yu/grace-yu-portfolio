import styled from 'styled-components';
import {deviceSize} from "../Utils/DeviceSize";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 50px;
  }
`

export const AboutContent = styled.div`
  margin: 5vw 10vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows:  1fr 1fr;
  row-gap: 2vw;
  column-gap: 5vw;


  @media screen and ${deviceSize.mobile} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    row-gap: 30px;
  }
`

export const ATag = styled.a`
  text-decoration: underline;
`
