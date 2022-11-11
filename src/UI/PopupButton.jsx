import React from 'react';
import styled from "styled-components";

const CustomButton = styled.div`
  background-color: ${props => props.bgColor};
  border-radius: 3px;
  width: 95px;
  height: 27px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 36px;
  gap: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: ${props => props.color};
`

const PopupButton = ({bgColor, color, children}) => {
    return (
        <CustomButton bgColor={bgColor} color={color}>
            {children}
        </CustomButton>
    );
};

export default PopupButton;