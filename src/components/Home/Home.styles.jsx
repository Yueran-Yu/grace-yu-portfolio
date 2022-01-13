import styled from 'styled-components';

export const HomeContainer = styled.div`
  border: 5px solid green;
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  div {
    width: 500px;
    align-self: center;
  }
  
  .photo img {
    width: 300px;
    border-radius: 50%;
  }

`