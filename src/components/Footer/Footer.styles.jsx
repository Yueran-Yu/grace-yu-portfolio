import styled from "styled-components";
import {deviceSize} from "../Utils/DeviceSize";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin: 40px 0 20px 0;
  font-family: 'DengXian Light', sans-serif;

  @media screen and ${deviceSize.mobile} {
    margin: 50px 0 10px 0;
    font-size: 0.8rem;
  }
`