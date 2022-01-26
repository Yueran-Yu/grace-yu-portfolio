import styled from 'styled-components';

export const SectionTitleContainer = styled.div`
  margin: 30px auto;
  font-family:${({theme: {fontCollection}}) => (fontCollection.sectionTitleFF)};
  font-size: ${({theme: {fontCollection}}) => (fontCollection.sectionTitleSize)};
`