import React from 'react';
import {CustomBtnContainer} from "./CustomBtn.styles";

const CustomBtn = (props) => {
  return (
    <CustomBtnContainer fontSize={props.fontSize}>
      {props.children}
    </CustomBtnContainer>
  );
};

export default CustomBtn;
