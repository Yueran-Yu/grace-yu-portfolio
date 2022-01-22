import React from 'react';
import {NavLink, NavItem, MenuListContainer} from "./MenuList.styles";
import {DayNightSwitchButton} from "../../DayNightSwitchButton/DayNightSwitchButton";
import {useWindowSize} from "../../../hooks/useWindowSize";
import {size} from "../../Utils/DeviceSize";

const MenuList = (props) => {
  const {setOpen} = props
  const {width} = useWindowSize()

  const Items = () => (
    <>
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
      {/*<NavItem>*/}
      {/*  {width <= size.tablet ? <div>Night/Day</div> : <DayNightSwitchButton {...props}/>}*/}
      {/*</NavItem>*/}
      <DayNightSwitchButton {...props}/>
    </>
  )

  return (
    <>
      {
        width <= size.tablet ?
          (<MenuListContainer onClick={() => setOpen(false)}>
            <Items/>
          </MenuListContainer>) :
          (<MenuListContainer>
            <Items/>
          </MenuListContainer>)
      }
    </>

  )
}

export default MenuList;
