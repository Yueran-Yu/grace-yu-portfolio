import styled from 'styled-components';
import {deviceSize} from "../../Utils/DeviceSize";

export const ToggleButton = styled.div`
  display: none;


  @media screen and ${deviceSize.tablet} {
    display: block;
    height: 24px;
    margin: 12px 0;
    text-align: center;
    position: relative;
    padding-left: 30%;
    font-size: 24px;
    cursor: pointer;
    align-self: center;
    z-index: 1990;
  }

`

