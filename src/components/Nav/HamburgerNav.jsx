import React from 'react';
import {LeftNavContainer, MiddleNavContainer, NavContainer, RightNavContainer} from "./nav.styles";
import {Logo} from "../Logo";
import {DayNightSwitchButton} from "../DayNightSwitchButton/DayNightSwitchButton";

export const HamburgerNav= ({isDay, themeChange}) => {

  return (
    <NavContainer>
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

