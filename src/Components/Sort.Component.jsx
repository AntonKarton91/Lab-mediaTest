import React from 'react';
import styled from "styled-components";

const SortContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 14px;
  left: 0;
  top: 234px;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
`

const SortTitle = styled.div`
  color: #9EAAB4;
  margin-right: 9px;
`

const SortItem = styled.div`
  color: #333333;
  border-bottom: 1px dashed;
  margin-right: 9px;
`

const SortComponent = () => {
    return (
        <SortContainer>
            <SortTitle>Сортировка:</SortTitle>
            <SortItem>Дата регистрации</SortItem>
            <SortItem>Рейтинг</SortItem>
        </SortContainer>
    );
};

export default SortComponent;