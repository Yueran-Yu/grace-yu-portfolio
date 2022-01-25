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
        {/*<img src={require('./image/photo.webp')} alt='avatar'/>*/}
      </div>
      <SelfIntroduction>
        <HelloText>Hello everyone👋, I'm</HelloText>
        <MyName>Grace Yu</MyName>
        <SelfText>I'm a persistent and life-long learning front end web developer</SelfText>
        <ResumeBtn href={process.env.PUBLIC_URL + "Grace_Yu_Resume.pdf"}
                   download='Grace_Yu_Resume.pdf'>Resume</ResumeBtn>
        <SocialMedia>
          <MediaItem><FaTwitterSquare/></MediaItem>
          <MediaItem><FaGithubSquare/></MediaItem>
          <MediaItem><FaLinkedin/></MediaItem>
          <MediaItem><FaBlog/></MediaItem>
        </SocialMedia>
      </SelfIntroduction>
    </HomeContainer>
  )
}

export default Home;