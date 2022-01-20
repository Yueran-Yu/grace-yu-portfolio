import styled from 'styled-components';
import {deviceSize} from "../Utils/DeviceSize";
import {Link} from "react-router-dom";

export const NavContainer = styled.div`
  background-color: ${({theme}) => theme.fixedNavColor};
  top: 0;
  display: grid;
  position: sticky;
  position: -webkit-sticky;
  grid-template-columns: 7fr 2fr 1fr;
  padding: 10px;
  font-size: 14px;
  transition: 0.2s;
  box-shadow: 0 1px 3px rgb(198, 221, 221);
`

export const LeftNavContainer = styled.div`
  width: 50px;
  height: 50px;

  .logo {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  @media screen and ${deviceSize.tablet} {
    width: 40px;
    height: 40px;
    align-self: center;
  }
`

export const MiddleNavContainer = styled.div`
  // ul {
  //   display: flex;
  //   height: 50px;
  //
  //   li {
  //     align-self: center;
  //     letter-spacing: 1.5px;
  //     transition: 0.3s;
  //     font-weight: 600;
  //     margin: 2px;
    //     color: ${({theme}) => theme.color};
  //
  //     .scroll-link {
  //       display: block;
  //       margin: 0 6px;
  //       padding: 6px;
  //       cursor: pointer;
  //       position: relative;
  //     }
  //
  //     .scroll-link::after {
  //       content: '';
  //       position: absolute;
  //       width: 100%;
  //       background-color: var(--prussian-blue);
  //       transform: scaleX(0);
  //       height: 3px;
  //       bottom: 0;
  //       left: 0;
  //       transform-origin: bottom right;
  //       transition: transform 0.35s ease-out;
  //     }
  //
  //     .scroll-link:hover::after, .scroll-link:focus::after {
  //       transform: scaleX(1);
  //       transform-origin: bottom left;
  //     }
  //   }
  // }
}
`

export const HamburgerIcon = styled.div`
  display: none;

  @media screen and ${deviceSize.tablet} {
    display: block;
    height: 24px;
    margin: 12px 0;
    text-align: center;
    position: relative;
    padding-left: 30%;
    font-size: 24px;
    align-self: center;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  margin: 12px 0;
  align-items: center;
  text-align: center;

  @media screen and ${deviceSize.tablet} {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 56px;
    left: ${({isClick}) => (isClick ? 0 : '-100%')};
    width: 100%;
    height: 100vh;
    opacity: 1;
    transition: all 0.5s ease;
    background: #7884a0;
  }
`

export const NavItem = styled.li`
  align-self: center;
  letter-spacing: 1.5px;
  transition: 0.3s;
  font-weight: 600;
  color: ${({theme}) => theme.color};

  @media screen and ${deviceSize.tablet} {
    width: 100%;
    margin: 0;
    padding: 0;
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

  @media screen and ${deviceSize.tablet} {
    &.scroll-link {
      display: block;
      font-size: 1.2rem;
      width: 100%;
      padding: 18px 0;
    }

    &.scroll-link:hover::after, &.scroll-link:focus::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

`

export const RightNavContainer = styled.div`
  justify-self: center;
  align-self: center;
`