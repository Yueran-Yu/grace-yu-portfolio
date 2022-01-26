import styled from 'styled-components';
import {deviceSize} from "../../Utils/DeviceSize";
import {motion} from "framer-motion";

export const NavContainer = styled.div`
  background: linear-gradient(to right, ${({theme: {chosenTheme}}) => chosenTheme.bodyColor2}, ${({theme: {chosenTheme}}) => chosenTheme.bodyColor3} 66%);
  top: 0;
  display: grid;
  position: sticky;
  position: -webkit-sticky;
  grid-template-columns: 3fr 1fr;
  padding: 10px;
  font-size: 14px;
  transition: 0.2s;
  z-index: 9999;
  box-shadow: rgb(132, 133, 136, 0.3) 0 1px 4px 0;
`

export const LeftNavContainer = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;

  .logo {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  @media screen and ${deviceSize.tablet} {
    width: 40px;
    height: 40px;
    align-self: center;
    cursor: pointer;
  }
`

export const RightNavContainer = styled.div`
  position: relative;
  z-index: 9999;
`

export const MenuContainer = styled(motion.div)`
  width: 100%;
  height: 100%;

  @media screen and ${deviceSize.tablet} {
    min-width: 300px;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9999;
    transform: translateX(100%);
    user-select: none;
    background-color: rgb(48, 51, 57, 0.10);
    backdrop-filter: blur(5px);
  }

`
