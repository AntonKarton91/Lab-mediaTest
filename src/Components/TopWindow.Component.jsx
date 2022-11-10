import React from 'react';
import PaperComponent from "../UI/Paper.Component";
import SearchStringComponent from "./SearchString.Component";
import styled from "styled-components";
import svg from '../images/clean.svg'

const CleanIcon = styled.img`
  position: absolute;
  width: 16px;
  height: 16px;
  left: 16px;
  top: 70px;
  background-color: transparent;
`
const CleanButton = styled.div`
  position: absolute;
  width: 103px;
  height: 16px;
  left: 36px;
  top: 70px;
  bottom: 16px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  
`

const TopWindowComponent = () => {
    return (
        <PaperComponent top='60px' height={'102px'}>
            <SearchStringComponent/>
            <CleanIcon src={svg}/>
            <CleanButton>Очистить фильтр</CleanButton>
        </PaperComponent>
    );
};

export default TopWindowComponent;