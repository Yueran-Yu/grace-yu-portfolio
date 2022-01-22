import React from 'react';
import {NavLink, NavItem, MenuListContainer} from "./MenuList.styles";
import {DayNightSwitchButton} from "../../DayNightSwitchButton/DayNightSwitchButton";

const MenuList = (props) => {
  const {setOpen} = props;
  return (
    <MenuListContainer onClick={() => setOpen(false)}>
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
      <NavItem>
        <DayNightSwitchButton {...props}/>
      </NavItem>
    </MenuListContainer>
  );
};

export default MenuList;
