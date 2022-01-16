import React, {useContext} from 'react';
import {SwitchButtonContainer} from "./DayNightSwitchButton.styles";
import {ThemeContext} from "../../context/DayNightSwitchProvider";

export const DayNightSwitchButton = () => {
  const {theme, themeToggler} = useContext(ThemeContext)
  return (
    <SwitchButtonContainer>
      <div className={`toggle ` + theme} onClick={themeToggler}>
        <div className="notch">
          <div className="crater"/>
          <div className="crater"/>
          <div className="crater"/>
        </div>
        <div>
          <div className="shape sm"/>
          <div className="shape sm"/>
          <div className="shape md"/>
          <div className="shape lg"/>
        </div>
      </div>
    </SwitchButtonContainer>
  )
}