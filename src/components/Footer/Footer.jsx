import React from 'react';
import {FooterContainer} from "./Footer.styles";

export const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <FooterContainer>
      <div>
      <p>&copy; Made By Grace Yu  &#10084; {date} </p>
      </div>
      <div> social media</div>
    </FooterContainer>
  );
};
