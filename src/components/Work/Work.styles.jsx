import styled from 'styled-components';
import {deviceSize} from "../Utils/DeviceSize";

export const WorkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const SectionContainer = styled.div`
  width: 80%;
  height: inherit;
  @media screen and ${deviceSize.tablet} {
    width: 100%;
  }
`
