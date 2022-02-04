import styled from "styled-components";
import {deviceSize} from "../Utils/DeviceSize";
import SectionTitle from "../SectionTitle/SectionTitle";

export const ContactContainer = styled.div`
  padding: 0 20px;
  margin: 0 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media screen and ${deviceSize.mobile} {
    span:before,
    span:after {
      width: 20vw;
    }

    span:before {
      right: 90%;
      margin-right: 15%;
    }

    span:after {
      left: 90%;
      margin-left: 15%;
    }
  }
`

export const WrapTitle = styled(SectionTitle)`
  margin: 0 20px;
`

export const FormContainer = styled.form`
  margin: 20px 30px;

  @media screen and ${deviceSize.mobile} {
    margin: 0 10px;
  }
`

export const SendBtn = styled.button`
  font-size: ${({theme: {fontCollection}}) => (fontCollection.small)};
  float: right;
  display: inline-block;
  cursor: pointer;
  padding: 6px 20px;
  border: none;
  border-radius: 5px;
  margin: 20px auto;
  background: linear-gradient(135deg, #ffc75f, #f68aa4, #f579cf);
  color: inherit;
  box-shadow: rgba(56, 56, 81, 0.25) 0 2px 5px -1px, rgba(47, 46, 46, 0.3) 0px 1px 3px -1px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-family: 'Monda', sans-serif;

  @media screen and ${deviceSize.mobile} {
    margin: 0;
    padding: 6px 18px;
    font-size: 0.8rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`