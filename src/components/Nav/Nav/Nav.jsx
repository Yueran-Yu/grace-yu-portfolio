import React, {useState} from 'react';
import {
  NavContainer,
  LeftNavContainer,
  RightNavContainer,
  MenuContainer
} from "./Nav.styles";
import {Logo} from "../../Logo";
import {deviceSize, size} from '../../Utils/DeviceSize'
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
  const [isOpen, setOpen] = useState(false)
  const handleClick = () => setOpen(!isOpen)
  const navBar = document.getElementById('nav')
  const scrollLinks = document.querySelectorAll('.scroll-link')
  const {width} = useWindowSize()

  scrollLinks.forEach((link) => {
    link.addEventListener('click', e => {
      e.preventDefault()
      const id = e.currentTarget.getAttribute('href').slice(1)
      const element = document.getElementById(id)
      let position = element.offsetTop
      if (window.innerWidth < deviceSize.tablet) setOpen(false)
      const navHeight = navBar.clientHeight
      window.scrollTo(0, (position - navHeight))
    })
  })

  return (
    <NavContainer id='nav'>
      <LeftNavContainer>
        <Logo/>
      </LeftNavContainer>
      <ToggleBtn toggle={handleClick} isOpen={isOpen}/>
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
