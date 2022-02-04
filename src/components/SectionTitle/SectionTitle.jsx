import React from 'react';
import {SectionTitleContainer} from "./SectionTitle.styles";

const SectionTitle = ({children}) => {
  return (
    <SectionTitleContainer>
      <span>
      {children}
      </span>
    </SectionTitleContainer>
  );
};

export default SectionTitle;
