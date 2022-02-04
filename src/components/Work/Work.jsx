import React from 'react';
import {
  ButtonWrapper, ChildBtn,
  ChildSection,
  FirstChild,
  SecondChild,
  SectionContainer,
  UlWrapper,
  WorkContainer
} from "./Work.styles";
import SectionTitle from "../SectionTitle/SectionTitle";
import happyFamily from '../../assets/images/happyFamilyMockUp.png';

const Work = () => {
  return (
    <WorkContainer id='work'>
      <SectionTitle>
        Work
      </SectionTitle>
      <SectionContainer>
        <ChildSection>
          <FirstChild>
            <div className='child-title'>This is Happy Family</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aliquid corporis,
              dignissimos ea et ex ipsum itaque laboriosam, nostrum praesentium sit tenetur vero? Cumque ducimus eaque
              laboriosam nisi possimus.</p>
            <UlWrapper>
              <li>Skill 1</li>
              <li>Skill 2</li>
              <li>Skill 3</li>
              <li>Skill 4</li>
              <li>Skill 5</li>
            </UlWrapper>
            <ButtonWrapper>
              <ChildBtn>Website</ChildBtn>
              <ChildBtn>Github</ChildBtn>
            </ButtonWrapper>
          </FirstChild>
          <SecondChild>
            <img src={happyFamily} alt="Happy family"/>
          </SecondChild>
        </ChildSection>
        <ChildSection>
          <FirstChild>
            First
          </FirstChild>
          <SecondChild>
            Second
          </SecondChild>
        </ChildSection>
        <ChildSection>
          <FirstChild>
            First
          </FirstChild>
          <SecondChild>
            Second
          </SecondChild>
        </ChildSection>
      </SectionContainer>
    </WorkContainer>
  )
}

export default Work;
