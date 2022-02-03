import styled from 'styled-components';

export const SectionTitleContainer = styled.div`
  margin: 30px auto;
  font-family: ${({theme: {fontCollection}}) => (fontCollection.sectionTitleFF)};
  font-size: ${({theme: {fontCollection}}) => (fontCollection.sectionTitleSize)};

  span {
    display: inline-block;
    position: relative;
  }

  span:before,
  span:after {
    content: "";
    position: absolute;
    height: 5px;
    border-bottom: 1px solid white;
    border-top: 1px solid white;
    top: 20px;
    width: 22vw;
  }

  span:before {
    right: 100%;
    margin-right: 10%;
  }

  span:after {
    left: 100%;
    margin-left: 10%;
  }
`