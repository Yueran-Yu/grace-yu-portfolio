import React from 'react';
import {
  NavContainer,
  LeftNavContainer,
  RightNavContainer,
  MenuContainer
} from "./Nav.styles";
import {Logo} from "../../Logo";
import {size} from '../../Utils/DeviceSize'
import ToggleBtn from "../ToggleBtn/ToggleBtn";
import MenuList from "../MenuList/MenuList";
import {useWindowSize} from "../../../hooks/useWindowSize";

const menuVariants = {
  open: {
    transform: 'translateX(0%)'
  },
  closed: {
    transform: 'translateX(100%)'
  }
}

const menuTransition = {
  duration: 0.2,
  delay: 0.1
}

const Nav = (props) => {
  const {isOpen, setOpen, toggleOpenClose} = props
  const {width} = useWindowSize()
  return (
    <NavContainer id='nav'>
      <LeftNavContainer>
        <Logo id ='home'/>
      </LeftNavContainer>
      <ToggleBtn toggle={toggleOpenClose} isOpen={isOpen}/>
      <RightNavContainer>
        {
          width <= size.tablet ?
            <MenuContainer initial={false}
                           animate={isOpen ? 'open' : 'closed'}
                           variants={menuVariants}
                           transition={menuTransition}>
              <MenuList setOpen={setOpen} {...props}/>
            </MenuContainer> :
            <MenuList {...props}/>
        }
      </RightNavContainer>
    </NavContainer>
  )
}

export default Nav;
