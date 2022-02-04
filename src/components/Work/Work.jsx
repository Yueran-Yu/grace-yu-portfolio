import React from 'react';
import {
  SectionContainer,
  WorkContainer
} from "./Work.styles";
import SectionTitle from "../SectionTitle/SectionTitle";
import {PROJECTS_DATA} from "../../data/data";
import SubProject from "./SubProject/SubProject";

const Work = () => {
  return (
    <WorkContainer id='work'>
      <SectionTitle>
        Work
      </SectionTitle>
      <SectionContainer>
        {
          PROJECTS_DATA.map(({id, ...otherProps}) => <SubProject key={id} {...otherProps}/>)
        }
      </SectionContainer>
    </WorkContainer>
  )
}

export default Work;
