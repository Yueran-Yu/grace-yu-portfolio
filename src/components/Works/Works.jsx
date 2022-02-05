import React from 'react';
import {
  SectionContainer,
  WorkContainer
} from "./Works.styles";
import SectionTitle from "../SectionTitle/SectionTitle";
import {PROJECTS_DATA} from "../../data/data";
import SubProject from "./SubProject/SubProject";

const Works = () => {
  return (
    <WorkContainer id='work'>
      <SectionTitle>
        Works
      </SectionTitle>
      <SectionContainer>
        {
          PROJECTS_DATA.map(({id, ...otherProps}) => <SubProject key={id} {...otherProps}/>)
        }
      </SectionContainer>
    </WorkContainer>
  )
}

export default Works;
