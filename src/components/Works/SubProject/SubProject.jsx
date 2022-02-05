import React from 'react';
import {ButtonWrapper, ChildBtn, ChildSection, FirstChild, SecondChild, UlWrapper} from "./SubProject.styles";

const SubProject = ({title, content, projectUrl, githubUrl, skills, img, alt}) => {
  return (
    <ChildSection>
      <FirstChild>
        <div className='child-title'>{title}</div>
        <p>{content}</p>
        <UlWrapper>
          {skills.map((skill, index) => <li key={index}>{skill}</li>)}
        </UlWrapper>
        <ButtonWrapper>
          <ChildBtn href={projectUrl} target='_blank'>View Project</ChildBtn>
          <ChildBtn href={githubUrl} target='_blank'>Github</ChildBtn>
        </ButtonWrapper>
      </FirstChild>
      <SecondChild>
        <img src={img} alt={alt}/>
      </SecondChild>
    </ChildSection>

  )
}
export default SubProject;
