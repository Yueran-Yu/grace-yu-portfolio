import React, {useRef, useEffect} from 'react';
import {NavContainer} from "./nav.styles";
import {HeadLink} from "./HeadLink";
import {Logo} from "../Logo";
import {useScrollPosition} from "../../hooks/useScrollPosition";

export const Nav = () => {
  const navBar = useRef(null)
  let scrollHeight = useScrollPosition()

  useEffect(() => {
    const navHeight = navBar.current.getBoundingClientRect().height

  }, [])

  return (
    <NavContainer ref={navBar}>
      <div className='left-nav'>
        <Logo/>
      </div>
      <div className='right-nav'>
        <ul>
          <li>
            <HeadLink name={`Home`} offsetValue={-100}/>
          </li>
          <li>
            <HeadLink name={`About`} offsetValue={-8}/>
          </li>
          <li>
            <HeadLink name={`Work`} offsetValue={-8}/>
          </li>
          <li>
            <HeadLink name={`Resume`} offsetValue={-8}/>
          </li>
          <li>
            <HeadLink name={`Contact`} offsetValue={-8}/>
          </li>
        </ul>
      </div>
    </NavContainer>
  )
}

