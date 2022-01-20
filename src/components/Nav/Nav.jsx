import React, {useState} from 'react';
import {
  HamburgerIcon,
  LeftNavContainer,
  MiddleNavContainer,
  NavContainer, NavItem, NavLink,
  NavMenu,
  RightNavContainer
} from "./Nav.styles";
import {Logo} from "../Logo";
import {DayNightSwitchButton} from "../DayNightSwitchButton/DayNightSwitchButton";
import {FaBars, FaTimes} from 'react-icons/fa';

const Nav = ({isDay, themeChange}) => {
  // const navBar = document.getElementById('nav')
  // let scrollHeight = useScrollPosition()
  // if (navBar) {
  //   const navHeight = navBar.getBoundingClientRect().height
  //   scrollHeight >= navHeight ?
  //     navBar.classList.add('fixed-nav') :
  //     navBar.classList.remove('fixed-nav')
  // }
  const [isClick, setClick] = useState(false)

  const handleClick = () => setClick(!isClick)

  return (
    <NavContainer>
      <LeftNavContainer>
        <Logo/>
      </LeftNavContainer>

      <MiddleNavContainer>
        <HamburgerIcon onClick={handleClick}>{isClick ? <FaTimes/> : <FaBars/>}</HamburgerIcon>
        <NavMenu onClick={handleClick} isClick={isClick}>
          <NavItem>
            <NavLink to='/home' className='scroll-link'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/about' className='scroll-link'>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/work' className='scroll-link'>Work</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='/contact' className='scroll-link'>Contact</NavLink>
          </NavItem>
        </NavMenu>
      </MiddleNavContainer>


      <RightNavContainer>
        <DayNightSwitchButton isDay={isDay} themeChange={themeChange}/>
      </RightNavContainer>
    </NavContainer>
  )
}

export default Nav;
