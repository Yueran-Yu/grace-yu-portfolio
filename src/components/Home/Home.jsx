import React from 'react';
import {HomeContainer} from "./Home.styles";
import {Image} from "../Image";

const Home = () => {
  return (
    <HomeContainer id='home'>
      <div>
        <h2>'m a front end web developer 😜`</h2>
        <a href={process.env.PUBLIC_URL + "Grace_Yu_Resume.pdf"} download='Grace_Yu_Resume.pdf'>
          <button>Resume</button>
        </a>
      </div>

      <div className='photo'>
        <Image imageName={`photo`}/>
      </div>
    </HomeContainer>
  )
}
export default Home;