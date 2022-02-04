import React from 'react';
import {MobileDayNightContainer} from "./MobileDayNight.styles";

const MobileDayNight = ({isDark, themeChange}) => {

  return (
    <MobileDayNightContainer onClick={themeChange}>
      <div className='outside'>
         <div>TOGGLE {isDark ? 'DAY MODE' : 'NIGHT MODE'}</div>
      </div>
    </MobileDayNightContainer>
  )
}

export default MobileDayNight;
