import styled from "styled-components";

export const CustomBtnContainer = styled.a`
  display: block;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  margin: 20px auto;
  width: 100px;
  background: var(--gradient);
  background-size: 200%;
  background-position: right;
  color: inherit;
  box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  transition: all 0.2s ease-in-out;
  font-family: 'Monda', sans-serif;

  &:hover {
    transform: scale(1.05);
  }

`