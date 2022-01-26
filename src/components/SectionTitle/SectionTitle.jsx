import React from 'react';
import {SectionTitleContainer} from "./SectionTitle.styles";

const SectionTitle = ({children}) => {
  return (
    <SectionTitleContainer>
      {children}
    </SectionTitleContainer>
  );
};

export default SectionTitle;
