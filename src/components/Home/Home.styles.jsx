import styled from 'styled-components';

export const HomeContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: relative;
  z-index: -2;

  div {
    width: 30vw;
    align-self: center;
  }

  .photo img {
    width: 30vw;
    border-radius: 50%;
  }

`