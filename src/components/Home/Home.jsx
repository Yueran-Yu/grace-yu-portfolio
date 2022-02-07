import React from 'react';
import {
  HelloText,
  HomeContainer,
  MediaItem,
  MyName,
  ResumeBtn,
  SelfIntroduction,
  SelfText,
  SocialMedia
} from "./Home.styles";
import {Image} from "../Image";
import {FaBlog, FaGithubSquare, FaLinkedin, FaTwitterSquare} from "react-icons/fa";

const Home = () => {
  return (
    <HomeContainer id='home'>
      <div className='photo'>
        <Image imageName={`photo`}/>
      </div>
      <SelfIntroduction>
        <HelloText>Hello everyone👋, I'm</HelloText>
        <MyName>Grace Yu</MyName>
        <SelfText>I'm a self-taught, persistent and life-long learning front end web developer</SelfText>
        <ResumeBtn href={process.env.PUBLIC_URL + "Grace_Yu_Resume.pdf"} target='_blank'>Resume</ResumeBtn>
        <SocialMedia>
          <MediaItem href='https://twitter.com/librayuyueran'><FaTwitterSquare/></MediaItem>
          <MediaItem href='https://github.com/Yueran-Yu'><FaGithubSquare/></MediaItem>
          <MediaItem href='https://www.linkedin.com/in/grace-yyu/'><FaLinkedin/></MediaItem>
          <MediaItem href='https://yueran-yu.github.io/'><FaBlog/></MediaItem>
        </SocialMedia>
      </SelfIntroduction>
    </HomeContainer>
  )
}

export default Home;