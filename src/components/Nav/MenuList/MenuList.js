import React from 'react';
import {NavLink, NavItem, MenuListContainer} from "./MenuList.styles";
import {DayNightSwitchButton} from "../../DayNightSwitchButton/DayNightSwitchButton";
import {useWindowSize} from "../../../hooks/useWindowSize";
import {size} from "../../Utils/DeviceSize";

const MenuList = (props) => {
  const {setOpen} = props
  const {width} = useWindowSize()

  const _closeMenu = () => setOpen(false)

  const Items = ({closeMenu = _closeMenu}) => {
    return (
      <>
        <NavItem>
          <NavLink to='home' spy={true} offset={-100} className='scroll-link' onClick={closeMenu}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='about' spy={true} offset={-70} className='scroll-link' onClick={closeMenu}>About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='work' spy={true} offset={-70} className='scroll-link' onClick={closeMenu}>Work</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='contact' spy={true} offset={-90} className='scroll-link' onClick={closeMenu}>Contact</NavLink>
        </NavItem>
        <NavItem>
          {width <= size.tablet ? <div onClick={closeMenu}>Night/Day</div> : <DayNightSwitchButton {...props}/>}
        </NavItem>
      </>
    )
  }

  return (
    <>
      {
        width <= size.tablet ?
          (<MenuListContainer>
            <Items closeMenu={_closeMenu}/>
          </MenuListContainer>) :
          (<MenuListContainer>
            <Items/>
          </MenuListContainer>)
      }
    </>

  )
}

export default MenuList;
