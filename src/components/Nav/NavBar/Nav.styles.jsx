import styled from 'styled-components';
import {deviceSize} from "../../Utils/DeviceSize";
import {motion} from "framer-motion";

export const NavContainer = styled.div`
  background-color: ${({theme}) => theme.chosenTheme.fixedNavColor};
  top: 0;
  display: grid;
  position: sticky;
  position: -webkit-sticky;
  grid-template-columns: 3fr 1fr;
  padding: 10px;
  font-size: 14px;
  transition: 0.2s;
  box-shadow: 0 1px 3px rgb(198, 221, 221);
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
    z-index: 1989;
    transform: translateX(100%);
    user-select: none;
    background-color: rgb(48, 51, 57, 0.10);
    backdrop-filter: blur(5px);
  }

`
