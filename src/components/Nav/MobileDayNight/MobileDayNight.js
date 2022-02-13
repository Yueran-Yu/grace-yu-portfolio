import React from 'react';
import {MobileDayNightContainer} from "./MobileDayNight.styles";

const MobileDayNight = ({isDay, themeChange}) => {

  return (
    <MobileDayNightContainer onClick={themeChange}>
      <div className='outside'>
         <div>TOGGLE {isDay ? 'DAY MODE' : 'NIGHT MODE'}</div>
      </div>
    </MobileDayNightContainer>
  )
}

export default MobileDayNight;
