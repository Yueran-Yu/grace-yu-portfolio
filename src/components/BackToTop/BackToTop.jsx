import React from 'react';
import {ImArrowUp} from "react-icons/im";
import {BackToTopContainer} from "./BackToTop.styles";

 const BackToTop = ({toTopRef}) => (
  <BackToTopContainer href="#home" ref={toTopRef}>
    <ImArrowUp/>
  </BackToTopContainer>
)

export default BackToTop;