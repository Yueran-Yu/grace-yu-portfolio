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
  bottom: 3rem;
  right: 3rem;
  width: 1.5rem;
  height: 1.5rem;
  display: grid;
  place-items: center;
  background: var(--honeydew);
  color: var(--celadon-blue);
  border-radius: var(--radius);
  animation: ${bounce} 2s ease-in-out infinite;
  visibility: visible;
`


