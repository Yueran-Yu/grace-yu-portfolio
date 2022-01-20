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
import {deviceSize} from '../Utils/DeviceSize'

const Nav = (props) => {
  const [isClick, setClick] = useState(false)
  const handleClick = () => setClick(!isClick)
  const navBar = document.getElementById('nav')
  const scrollLinks = document.querySelectorAll('.scroll-link')

  scrollLinks.forEach((link) => {
    link.addEventListener('click', e => {
      e.preventDefault()
      const id = e.currentTarget.getAttribute('href').slice(1)
      const element = document.getElementById(id)
      let position = element.offsetTop
      if (window.innerWidth < deviceSize.tablet) setClick(false)
      const navHeight = navBar.clientHeight
      window.scrollTo(0, (position - navHeight))
    })
  })

  return (
    <NavContainer id='nav'>
      <LeftNavContainer>
        <Logo/>
      </LeftNavContainer>

      <MiddleNavContainer>
        <HamburgerIcon onClick={handleClick}>{isClick ? <FaTimes/> : <FaBars/>}</HamburgerIcon>
        <NavMenu onClick={handleClick} isClick={isClick}>
          <NavItem>
            <NavLink href='#home' className='scroll-link'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#about' className='scroll-link'>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#work' className='scroll-link'>Work</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#contact' className='scroll-link'>Contact</NavLink>
          </NavItem>
        </NavMenu>
      </MiddleNavContainer>

      <RightNavContainer>
        <DayNightSwitchButton {...props}/>
      </RightNavContainer>
    </NavContainer>
  )
}

export default Nav;
