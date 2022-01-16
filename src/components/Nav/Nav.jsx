import React from 'react';
import {LeftNavContainer, MiddleNavContainer, NavContainer, RightNavContainer} from "./nav.styles";
import {Logo} from "../Logo";
import {useScrollPosition} from "../../hooks/useScrollPosition";
import {DayNightSwitchButton} from "../DayNightSwitchButton/DayNightSwitchButton";

export const Nav = ({isDay, themeChange}) => {
  const navBar = document.getElementById('nav')
  let scrollHeight = useScrollPosition()
  if (navBar) {
    const navHeight = navBar.getBoundingClientRect().height
    scrollHeight >= navHeight ?
      navBar.classList.add('fixed-nav') :
      navBar.classList.remove('fixed-nav')
  }

  return (
    <NavContainer id='nav'>
      <LeftNavContainer>
        <Logo/>
      </LeftNavContainer>
      <MiddleNavContainer>
        <ul>
          <li>
            <a href='#home' className='scroll-link'>Home</a>
          </li>
          <li>
            <a href='#about' className='scroll-link'>About</a>
          </li>
          <li>
            <a href='#work' className='scroll-link'>Work</a>
          </li>
          <li>
            <a href='#contact' className='scroll-link'>Contact</a>
          </li>
        </ul>
      </MiddleNavContainer>

      <RightNavContainer>
        <DayNightSwitchButton isDay={isDay} themeChange={themeChange}/>
      </RightNavContainer>
    </NavContainer>
  )
}

