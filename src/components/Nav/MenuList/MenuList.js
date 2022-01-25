import React from 'react';
import {NavLink, NavItem, MenuListContainer} from "./MenuList.styles";
import {DayNightSwitchButton} from "../DayNightSwitchButton/DayNightSwitchButton";
import {useWindowSize} from "../../../hooks/useWindowSize";
import {size} from "../../Utils/DeviceSize";
import MobileDayNight from "../MobileDayNight/MobileDayNight";

const MenuList = (props) => {
  const {isOpen, setOpen} = props
  const {width} = useWindowSize()
  const closeMenu = () => setOpen(false)

  const variants = {
    show: {
      transform: 'translateX(0em)',
      opacity: 1,
    },
    hide: {
      transform: 'translateX(5em)',
      opacity: 0
    }
  }

  return (
    <>
      {
        width <= size.tablet ?
          (<MenuListContainer onClick={closeMenu}>
            <NavItem
              initial={false}
              animate={isOpen ? 'show' : 'hide'}
              variants={
                {
                  show:
                    {
                      ...variants.show,
                      transition: {delay: 0.2, duration: 0.2}
                    },
                  hide: {
                    ...variants.hide,
                    transition: {delay: 0.05, duration: 0.05}
                  }
                }}>
              <NavLink to='home' spy={true} offset={-100} className='scroll-link' onClick={closeMenu}>Home</NavLink>
            </NavItem>
            <NavItem
              initial={false}
              animate={isOpen ? 'show' : 'hide'}
              variants={
                {
                  show:
                    {
                      ...variants.show,
                      transition: {delay: 0.3, duration: 0.2}
                    },
                  hide: {
                    ...variants.hide,
                    transition: {delay: 0.1, duration: 0.1}
                  }
                }}>
              <NavLink to='about' spy={true} offset={-70} className='scroll-link' onClick={closeMenu}>About</NavLink>
            </NavItem>
            <NavItem
              initial={false}
              animate={isOpen ? 'show' : 'hide'}
              variants={
                {
                  show:
                    {
                      ...variants.show,
                      transition: {delay: 0.4, duration: 0.2}
                    },
                  hide: {
                    ...variants.hide,
                    transition: {delay: 0.15, duration: 0.15}
                  }
                }}>
              <NavLink to='work' spy={true} offset={-70} className='scroll-link' onClick={closeMenu}>Work</NavLink>
            </NavItem>
            <NavItem
              initial={false}
              animate={isOpen ? 'show' : 'hide'}
              variants={
                {
                  show:
                    {
                      ...variants.show,
                      transition: {delay: 0.5, duration: 0.2}
                    },
                  hide: {
                    ...variants.hide,
                    transition: {delay: 0.2, duration: 0.2}
                  }
                }}>
              <NavLink to='contact' spy={true} offset={-90} className='scroll-link'
                       onClick={closeMenu}>Contact</NavLink>
            </NavItem>
            <NavItem
              initial={false}
              animate={isOpen ? 'show' : 'hide'}
              variants={
                {
                  show:
                    {
                      ...variants.show,
                      transition: {delay: 0.6, duration: 0.2}
                    },
                  hide: {
                    ...variants.hide,
                    transition: {delay: 0.25, duration: 0.25}
                  }
                }}
            >
              {width <= size.tablet ? <MobileDayNight {...props} onClick={closeMenu}/> :
                <DayNightSwitchButton {...props}/>}
            </NavItem>
          </MenuListContainer>)
          :
          (<MenuListContainer onClick={closeMenu}>
            <NavItem>
              <NavLink to='home' spy={true} offset={-100} className='scroll-link'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='about' spy={true} offset={-70} className='scroll-link'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='work' spy={true} offset={-70} className='scroll-link'>Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='contact' spy={true} offset={-90} className='scroll-link'>Contact</NavLink>
            </NavItem>
            <NavItem>
              {width <= size.tablet ? <MobileDayNight {...props}/> : <DayNightSwitchButton {...props}/>}
            </NavItem>
          </MenuListContainer>)
      }
    </>
  )
}

export default MenuList;
