import styled from "styled-components";
import {deviceSize} from "../../Utils/DeviceSize";
import {CustomBtnContainer} from "../../CustomBtn.styles";

export const ChildSection = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  margin-bottom: 5rem;
  cursor: pointer;

  @media screen and ${deviceSize.tablet} {
    margin-top: 0;
    margin-right: 0;
    width: 100%;
    height: 100%;
    flex-direction: column-reverse;
    position: relative;

  }
`

export const FirstChild = styled.div`
  background: ${({theme: {chosenTheme}}) => (chosenTheme.cardBgColor1)};
  color: ${({theme: {chosenTheme}}) => (chosenTheme.color)};
  width: 50%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 1rem 1.5rem;
  min-width: 10rem;
  margin-right: -10vw;
  margin-left: 2.5vw;
  border-radius: 5px;
  box-shadow: rgba(198, 223, 252, 0.08) 0 4px 12px;
  z-index: 1;

  .child-title {
    font-size: 1.5rem;
    padding-bottom: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 800;

    @media screen and ${deviceSize.mobile} {
      font-size: 1.3rem;
      padding-bottom: 0.5rem;
      margin-bottom: 1rem;
    }
  }

  @media screen and ${deviceSize.tablet} {
    display: flex;
    flex-direction: column;
    margin-right: 0;
    width: 90%;
    height: 100%;
    max-width: 35rem;
    margin-left: 0;
    position: absolute;
    background: ${({theme: {chosenTheme}}) => (chosenTheme.transBg)};
    border: 2px solid ${({theme: {chosenTheme}}) => (chosenTheme.toTopBackground)};
    justify-content: center;
    align-items: center;
  }

  @media screen and ${deviceSize.mobile} {
    display: flex;
    flex-direction: column;
    margin-right: 0;
    width: 90%;
    max-width: 25rem;
    margin-left: 0;
    justify-content: center;
    align-items: center;
  }
`

export const SecondChild = styled.div`
  background: ${({theme: {chosenTheme}}) => (chosenTheme.cardBgColor2)};
  color: ${({theme: {chosenTheme}}) => (chosenTheme.color)};
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
    padding: 5vw;
  }

  @media screen and ${deviceSize.mobile} {
    width: 90%;
    max-width: 25rem;
    display: flex;
    align-self: center;
    margin-left: 0;
    padding: 26vw 5vw;
  }

  img {
    padding: 1rem;
    width: 100%;
    height: auto;
    transition: all 0.5s ease-in-out;

    @media screen and ${deviceSize.tablet} {
      height: auto;
      padding: 0.5rem 0;
    }
  }

  img:hover {
    transform: scale(1.05);
  }
`

export const UlWrapper = styled.ul`
  display: inline-block;
  padding: 1rem 0.8rem;
  min-width: 25vw;
  max-width: 35vw;
  font-family: Courier New, monospace;

  li {
    font-weight: 700;
    font-size: 0.8rem;
    padding: 0.3rem;
    display: inline;
  }

  @media screen and ${deviceSize.tablet} {
    min-width: 100%;
    display: inline-block;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

export const ChildBtn = styled(CustomBtnContainer)`
  font-size: 0.8rem;
  font-weight: 100;

  @media screen and ${deviceSize.mobile} {
    justify-content: space-between;
    margin: 0 10px;
  }
`