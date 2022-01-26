import styled, {keyframes} from 'styled-components';
import {deviceSize} from "../Utils/DeviceSize";
import {CustomBtnContainer} from "../CustomBtn/CustomBtn.styles";

const backAnimation = keyframes`
  0% {
    background-position: left;
  }

  100% {
    background-position: right;
  }
`

export const HomeContainer = styled.div`
  margin-top: 5vh;
  position: relative;
  height: 65vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  justify-items: center;
  align-content: center;

  @media screen and ${deviceSize.tablet} {
    margin-top: 5vh;
    height: 35vh;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }

  @media screen and ${deviceSize.mobile} {
    margin-top: 5vh;
    display: grid;
    height: 60vh;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
    justify-content: center;
    align-items: center;

    .photo {
      grid-row-start: 1;
      grid-row-end: 2;
    }
  }

  .photo {
    order: 3;
    position: relative;
    border-radius: 50%;
    width: 32vw;
    height: 32vw;
    transition: all 0.2s ease-in-out;
    max-width: 380px;
    max-height: 380px;

    @media screen and ${deviceSize.tablet} {
      width: 230px;
      height: 230px;
    }

    @media screen and ${deviceSize.mobile} {
      width: 150px;
      height: 150px;
    }

    img {
      width: 30vw;
      height: 30vw;
      max-width: 350px;
      max-height: 350px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-55deg);
      cursor: pointer;
      transition: all 0.5s linear;
      -webkit-transition: all 0.5s linear;
      box-shadow: rgba(105, 105, 162, 0.25) 0 50px 100px -20px, rgba(40, 38, 38, 0.3) 0px 30px 60px -30px, rgba(38, 85, 131, 0.35) 0px -2px 6px 0px inset;

      @media screen and ${deviceSize.tablet} {
        width: 230px;
        height: 230px;
      }

      @media screen and ${deviceSize.mobile} {
        width: 140px;
        height: 140px;
      }
    }
  }

  .photo:hover {
    transform: scale(1.02);
    background-color: ${({theme: {chosenTheme}}) => (chosenTheme.imgBg)};
    box-shadow: rgba(0, 0, 0, 0.25) 0 14px 28px, rgba(0, 0, 0, 0.22) 0 10px 10px;


    @media screen and ${deviceSize.tablet} {
      width: 250px;
      height: 250px;
    }

    @media screen and ${deviceSize.mobile} {
      width: 150px;
      height: 150px;
    }
  }
`

export const SelfIntroduction = styled.div`
  text-align: center;
  margin: 20px 0;

`

export const MyName = styled.h2`
  margin: 20px 0;
  font-size: 65px;
  font-family: ${({theme: {fontCollection}}) => (fontCollection.sectionTitleFF)};
  text-transform: uppercase;
  background-image: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 500%;
  background-position: left;
  transition: background-position 1s;
  animation: ${backAnimation} 20s infinite alternate;
  text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.1);

  @media screen and ${deviceSize.tablet} {
    font-size: 55px;
  }

  @media screen and ${deviceSize.mobile} {
    font-size: 45px;
  }

`

export const HelloText = styled.p`
  font-size: 25px;
  @media screen and ${deviceSize.tablet} {
    font-size: 20px;
  }

  @media screen and ${deviceSize.mobile} {
    font-size: 15px;
  }
`

export const SelfText = styled.p`
  margin: 20px;
  font-size: ${({theme: {fontCollection}}) => (fontCollection.large)};


  @media screen and ${deviceSize.tablet} {
    font-size: ${({theme: {fontCollection}}) => (fontCollection.middle)};
  }

  @media screen and ${deviceSize.mobile} {
    font-size: ${({theme: {fontCollection}}) => (fontCollection.small)};
  }
`

export const ResumeBtn = styled(CustomBtnContainer)`
  font-size: ${({theme: {fontCollection}}) => (fontCollection.small)};
`

export const SocialMedia = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const MediaItem = styled.li`
  margin: 15px 10px;
  font-size: ${({theme: {fontCollection}}) => (fontCollection.xLarge)};


  @media screen and ${deviceSize.mobile} {
    font-size: ${({theme: {fontCollection}}) => (fontCollection.middle)};
  }

  &:hover {
    transform: scale(1.05);
  }
`