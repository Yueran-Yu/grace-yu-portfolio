import styled from 'styled-components';
import {CustomBtnContainer} from "../CustomBtn.styles";
import {deviceSize} from "../Utils/DeviceSize";

export const WorkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const SectionContainer = styled.div`
  width: 80%;
  height: inherit;
  @media screen and ${deviceSize.tablet} {
    width: 100%;
  }
`

export const ChildSection = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 3rem;
  margin-bottom: 5rem;
  margin-right: -8vw;


  @media screen and ${deviceSize.tablet} {
    margin-top: 0;
    margin-right: 0;
    width: 100%;
    flex-direction: column-reverse;
  }
`

export const FirstChild = styled.div`
  background: var(--prussian-blue);
  width: 45%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 1rem 1.5rem;
  min-width: 10rem;
  z-index: 2;
  margin-right: -8vw;
  border-radius: 5px;
  box-shadow: rgba(255, 255, 255, 0.08) 0 4px 12px;

  .child-title {
    font-size: 1.5rem;
    padding: 1rem 0;
  }

  @media screen and ${deviceSize.tablet} {
    display: flex;
    flex-direction: column;
    margin-right: 0;
    width: 90%;

  }
`

export const SecondChild = styled.div`
  background: whitesmoke;
  width: 55%;
  padding: 1rem;
  height: 50%;
  display: flex;
  align-self: center;
  min-width: 25rem;
  border-radius: 5px;

  @media screen and ${deviceSize.tablet} {
    width: 90%;
    min-width: 20rem;
  }

  img {
    padding: 1rem;
    width: 100%;
    height: auto;

    @media screen and ${deviceSize.tablet} {
      height: 50%;
      padding: 0.5rem 0;
    }
  }
`

export const UlWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  min-width: 25vw;
  max-width: 30vw;

  @media screen and ${deviceSize.tablet} {
    min-width: 80%;
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