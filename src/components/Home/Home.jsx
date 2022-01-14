import React from 'react';
import {HomeContainer} from "./Home.styles";
import Typical from 'react-typical';
import {Image} from "../Image";

export const HomePage = () => {
  return (
    <HomeContainer id='home'>
      <div>
        <Typical
          steps={[`Home Page 🥳`, 1000,
            `I'm a front end web developer 😜`, 1000,
            `I love coding 🐶`, 1000]}
          loop={Infinity}
          wrapper="h2"
        />
        <a href={process.env.PUBLIC_URL + "Grace_Yu_Resume.pdf"} download='Grace_Yu_Resume.pdf'>
          <button>Resume</button>
        </a>
      </div>

      <div className='photo'>
        <Image imageName={`photo`}/>
      </div>
    </HomeContainer>
  )
    ;
};

