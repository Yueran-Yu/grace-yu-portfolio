import React from 'react';
import {AboutContainer, AboutContent, ATag, LeftContent, RightContent} from "./About.styles";
import SectionTitle from "../SectionTitle/SectionTitle";

const About = () => {
  return (
    <AboutContainer id='about'>
      <SectionTitle>
        About Me
      </SectionTitle>
      <AboutContent>
        <div>Hello! My name is Grace. I come from China. Currently, I'm seeking a front-end job to which I can devote
          myself into. I studied Business Information Technology at Red River College in Manitoba for about 2.5 years.
          I have 8 months of Co-op experience as an application developer and data analyst by using C# in a capital
          management company.
        </div>
        <div>
          During the internship, my work was to meet the demands of the desktop application of my colleagues, like
          creating windows, which can
          display certain clients' financial data, fetching data from the Microsoft SQL server to generate certain
          financial analysis reports, and so on.
        </div>
        <div>
          <p>My first job after graduation was been a customer service agent solving technical problems for clients.
            I’m fully committed to learning React after work and honing skills by doing projects so that I can land a
            dream job in the front-end industry someday.
          </p>
          <br/>
          <p>
            In the process of self taught, my ability of problem solving and debugging have been improved
            unprecedentedly.
          </p>
        </div>
        <div>
          <p>In my coding time, I have the habit of recording the tricky knowledge in my personal blog <ATag
            href="https://yueran-yu.github.io/" target='_blank' rel="noreferrer">(My Blog)</ATag> when I
            encounter problems during constructing a project.
            It seems like an Errors collection that I can often review in case I forgot.</p>
          <br/>
          <p>In my spare time, I like to go to the gym to run and swim to keep my fitness. Recently, I have been
            fascinated with moxibustion, since it can relieve back pain, pain from arthritis, and other chronic
            illnesses.</p>
        </div>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;

