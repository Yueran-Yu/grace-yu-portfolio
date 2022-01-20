import styled, {keyframes} from 'styled-components';

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
  background: ${({theme}) => theme.toTopBackground};
  color: ${({theme}) => theme.toTopColor};
  border-radius: var(--radius);
  animation: ${bounce} 2s ease-in-out infinite;
  visibility: hidden;
  z-index: -10;

  &.show-btn {
    visibility: visible;
    z-index: 100;
  }

  &.show-btn:hover {
    background: ${({theme}) => theme.toTopColor};
    color: ${({theme}) => theme.toTopBackground };
  }
`


