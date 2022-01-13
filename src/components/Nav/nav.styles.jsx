import styled from 'styled-components';

export const NavContainer = styled.div`
  background-color: var(--dark-green);
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 14px;

  .left-nav {
  }

  .right-nav {
    display: flex;
    line-height: 34px;

    div {
      padding: 10px;
    }
  }

  div .logo {
    width: 100px;
    height: 100px;
  }
`
