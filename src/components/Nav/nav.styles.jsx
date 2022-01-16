import styled from 'styled-components';

export const NavContainer = styled.div`
  background-color: ${({theme}) => theme.fixedNavColor};
  top: 0;
  display: grid;
  position: sticky;
  position: -webkit-sticky;
  grid-template-columns: 7fr 2fr 1fr;
  padding: 10px;
  font-size: 14px;
  transition: 0.2s;
  box-shadow: 0 1px 3px rgb(198, 221, 221);
`

export const LeftNavContainer = styled.div`
  width: 50px;
  height: 50px;

  .logo {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`

export const MiddleNavContainer = styled.div`
  ul {
    display: flex;
    height: 50px;

    li {
      align-self: center;
      letter-spacing: 1.5px;
      transition: 0.3s;
      font-weight: 600;
      margin: 2px;
      color: ${({theme}) => theme.color};

      .scroll-link {
        display: block;
        margin: 0 6px;
        padding: 6px;
        cursor: pointer;
        position: relative;
      }

      .scroll-link::after {
        content: '';
        position: absolute;
        width: 100%;
        background-color: var(--prussian-blue);
        transform: scaleX(0);
        height: 3px;
        bottom: 0;
        left: 0;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }

      .scroll-link:hover::after, .scroll-link:focus::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
`

export const RightNavContainer = styled.div`
  justify-self: center;
  align-self: center;
`