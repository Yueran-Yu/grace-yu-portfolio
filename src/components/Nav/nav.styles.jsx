import styled from 'styled-components';

export const NavContainer = styled.div`
  background-color: var(--celadon-blue);
  display: grid;
  grid-template-columns: 7fr 2fr 1fr;
  padding: 10px 20px;
  font-size: 14px;
  transition: 0.7s;

  &.fixed-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--honeydew);
    box-shadow: 0 1px 3px rgb(198, 221, 221);
    ul > li{
      color:${({theme})=> theme.fixedNavColor};
    }
  }
`

export const LeftNavContainer = styled.div`
  .logo {
    width: 50px;
    height: 50px;
  }
`

export const MiddleNavContainer = styled.div`
  ul {
    display: flex;
    line-height: 34px;

    li {
      padding: 10px;
      letter-spacing: 1.5px;
      transition: 0.5s;
      font-weight: 600;
      color: ${({theme})=> theme.bodyColor};
    }
  }
`

export const RightNavContainer = styled.div`
  justify-self: center;
  align-self: center;
`