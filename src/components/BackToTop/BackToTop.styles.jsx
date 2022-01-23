import styled, {keyframes} from 'styled-components';
import {deviceSize} from "../Utils/DeviceSize";

const bounce = keyframes`
  0% {
    transform: scale(1)
  }
  50% {
    transform: scale(1.5)
  }
  100% {
    transform: scale(1)
  }
`
export const BackToTopContainer = styled.a`
  font-size: 1rem;
  position: fixed;
  bottom: 5rem;
  right: 3rem;
  width: 1.5rem;
  height: 1.5rem;
  display: grid;
  place-items: center;
  background: ${({theme: {chosenTheme}}) => chosenTheme.toTopBackground};
  color: ${({theme: {chosenTheme}}) => chosenTheme.toTopColor};
  border-radius: var(--radius);
  animation: ${bounce} 2s ease-in-out infinite;
  visibility: hidden;
  z-index: -10;


  &.show-btn {
    visibility: visible;
    z-index: 10;
  }

  &.show-btn:hover {
    background: ${({theme: {chosenTheme}}) => chosenTheme.toTopColor};
    color: ${({theme: {chosenTheme}}) => chosenTheme.toTopBackground};
  }

  @media screen and ${deviceSize.tablet} {
    visibility: hidden;
    z-index: -3;
    &.show-btn {
      visibility: ${({theme: {isOpen}}) => (isOpen ? 'hidden' : 'visible')};
    }

    &.show-btn:hover {
      background: ${({theme: {chosenTheme}}) => chosenTheme.toTopColor};
      color: ${({theme: {chosenTheme}}) => chosenTheme.toTopBackground};
    }
  }
`


