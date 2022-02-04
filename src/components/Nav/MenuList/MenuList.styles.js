import styled from 'styled-components';
import {deviceSize} from "../../Utils/DeviceSize";
import {Link} from 'react-scroll';
import {motion} from "framer-motion";

export const MenuListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 10px;
  margin: 12px;
  align-items: center;
  text-align: center;

  @media screen and ${deviceSize.tablet} {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 35%;
    height: 50%;
    z-index: 9999;;
    top: 60px;
    right: 10%;
    min-width: 240px;
    max-width: 600px;
    transition: all 0.5s ease;
  }
`

export const NavItem = styled(motion.li)`

  align-self: center;
  letter-spacing: 1.5px;
  transition: 0.3s;
  font-weight: 600;
  cursor: pointer;
  color: ${({theme}) => theme.chosenTheme.color};

  @media screen and ${deviceSize.tablet} {
    padding-top: 20px;
    height: 60px;
    font-size: 20px;
    width: 100%;
    cursor: pointer;
  }
`

export const NavLink = styled(Link)`
  &.scroll-link {
    display: block;
    padding: 6px 8px;
    cursor: pointer;
    position: relative;
  }

  &.scroll-link::after {
    content: '';
    position: absolute;
    width: 100%;
    background-color: ${({theme: {chosenTheme}}) => (chosenTheme.navHover)};
    transform: scaleX(0);
    height: 3px;
    bottom: 0;
    left: 0;
    transform-origin: bottom right;
    transition: transform 0.35s ease-out;
  }

  &.scroll-link:hover::after, &.scroll-link:focus::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`