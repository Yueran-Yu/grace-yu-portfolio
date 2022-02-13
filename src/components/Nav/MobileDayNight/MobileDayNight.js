import React from 'react';
import {MobileDayNightContainer} from "./MobileDayNight.styles";

const MobileDayNight = ({isDay, themeChange}) => {

  return (
    <MobileDayNightContainer onClick={themeChange}>
      <div className='outside'>
         <div>TOGGLE {isDay ? 'NIGHT MODE' : 'DAY MODE'}</div>
      </div>
    </MobileDayNightContainer>
  )
}

export default MobileDayNight;
