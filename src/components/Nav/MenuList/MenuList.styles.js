import styled from 'styled-components';
import {deviceSize} from "../../Utils/DeviceSize";

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
    position: absolute;
    width: 50%;
    height: 100vh;
    top: 0;
    right: 0;
    background-color: yellow;
    transition: all 0.5s ease;
  }
`

export const NavItem = styled.li`
  align-self: center;
  letter-spacing: 1.5px;
  transition: 0.3s;
  font-weight: 600;
  color: ${({theme}) => theme.color};

  @media screen and ${deviceSize.tablet} {
    color: #282c34;
    height: 60px;

  }

`

export const NavLink = styled.a`
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
    background-color: var(--prussian-blue);
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