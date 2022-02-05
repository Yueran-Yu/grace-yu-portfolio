import styled from "styled-components";
import {deviceSize} from "../../Utils/DeviceSize";
import {CustomBtnContainer} from "../../CustomBtn.styles";

export const ChildSection = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  margin-bottom: 5rem;

  @media screen and ${deviceSize.tablet} {
    margin-top: 0;
    margin-right: 0;
    width: 100%;
    flex-direction: column-reverse;
  }
`

export const FirstChild = styled.div`
  background: ${({theme:{chosenTheme}})=>(chosenTheme.cardBgColor1)};
  color: ${({theme:{chosenTheme}})=>(chosenTheme.color)};
  width: 50%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 1rem 1.5rem;
  min-width: 10rem;
  margin-right: -10vw;
  margin-left: 2.5vw;
  z-index: 2;
  border-radius: 5px;
  box-shadow: rgba(255, 255, 255, 0.08) 0 4px 12px;


  .child-title {
    font-size: 1.5rem;
    padding-bottom: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 800;

    @media screen and ${deviceSize.mobile} {
      font-size: 1.3rem;
      padding-bottom: 0.5rem;
    }
  }

  @media screen and ${deviceSize.tablet} {
    display: flex;
    flex-direction: column;
    margin-right: 0;
    width: 90%;
    max-width: 35rem;
    margin-left: 0;
  }

  @media screen and ${deviceSize.mobile} {
    display: flex;
    flex-direction: column;
    margin-right: 0;
    width: 90%;
    max-width: 25rem;
    margin-left: 0;
  }
`

export const SecondChild = styled.div`
  background: ${({theme:{chosenTheme}})=>(chosenTheme.cardBgColor2)};
  color: ${({theme:{chosenTheme}})=>(chosenTheme.color)};
  width: 50%;
  padding: 1rem;
  height: 30%;
  display: flex;
  align-self: end;
  min-width: 25rem;
  margin-left: 5vw;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;

  @media screen and ${deviceSize.tablet} {
    width: 90%;
    min-width: 20rem;
    max-width: 35rem;
    display: flex;
    align-self: center;
    margin-left: 0;

  }

  @media screen and ${deviceSize.mobile} {
    width: 90%;
    max-width: 25rem;
    display: flex;
    align-self: center;
    margin-left: 0;
  }

  img {
    padding: 1rem;
    width: 100%;
    height: auto;
    transition: all 0.5s ease-in-out;

    @media screen and ${deviceSize.tablet} {
      height: 50%;
      padding: 0.5rem 0;
    }
  }

  img:hover {
    transform: scale(1.05);
  }
`

export const UlWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  min-width: 25vw;
  max-width: 30vw;
  font-family: Courier New, monospace;

  li {
    font-weight: 5;
    font-size: 0.8rem;
  }

  @media screen and ${deviceSize.tablet} {
    min-width: 95%;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

export const ChildBtn = styled(CustomBtnContainer)`
  font-size: 0.8rem;
  font-weight: 100;
`