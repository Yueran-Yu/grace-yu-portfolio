import React, {useRef} from 'react';
import {LeftNavContainer, MiddleNavContainer, NavContainer, RightNavContainer} from "./nav.styles";
import {Logo} from "../Logo";
import {useScrollPosition} from "../../hooks/useScrollPosition";
import {DayNightSwitchButton} from "../DayNightSwitchButton/DayNightSwitchButton";

export const Nav = () => {
  const navBar = useRef(null)
  let scrollHeight = useScrollPosition()
  if (navBar.current) {
    const navHeight = navBar.current.getBoundingClientRect().height
    scrollHeight > navHeight ?
      navBar.current.classList.add('fixed-nav') :
      navBar.current.classList.remove('fixed-nav')
  }

  return (
    <NavContainer ref={navBar}>
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
        <DayNightSwitchButton />
      </RightNavContainer>
    </NavContainer>
  )
}

