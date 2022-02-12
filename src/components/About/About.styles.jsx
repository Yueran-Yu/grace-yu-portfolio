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

export const AboutContent = styled.ul`
  margin: 5vw;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  li {
    padding: 1rem;
    border-radius: 5px;
    box-shadow: rgba(135, 206, 235, 0.2) 1.95px 1.95px 2.6px;
  }


  @media screen and ${deviceSize.mobile} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }


  @media screen and ${deviceSize.mobileSmall} {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 10px;
    padding: 1rem 0;
    box-shadow: rgb(135, 206, 244, 0.5) 0 1px 4px;
    li {
      padding: 0.5rem 1rem;
      box-shadow: none;

    }
  }
`

export const ATag = styled.a`
  text-decoration: underline;
`
